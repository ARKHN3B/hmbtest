/** Import components from libraries */
import React, { Component } from 'react'
import RGL, { WidthProvider } from 'react-grid-layout'
import ChartistGraph from 'react-chartist'
/** Import styles from libraries */
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
/** Import custom styles */
import layoutStyle from './Layout.styles';
import cardStyles from './../Card/Card.styles'
import './../../../assets/styles/css/styles.css'

// import Card from '../Card/Card';


const ReactGridLayout = WidthProvider(RGL);

export class Layout extends Component {

  /**
   * Constructor
   * @param props
   */
  constructor(props) {
    super(props);

    const layout = this.generateLayout();
    this.state = { layout, dom: this.generateDOM() };
  }

  /**
   * Generate content
   * @returns {*}
   */
  generateDOM() {
    return this.props.data.map(element => {
      const { id, title, subtitle, data, chartOptions, chartType } = element

      // return <Card key={id} id={id} title={title} subtitle={subtitle} data={data} options={chartOptions} type={chartType}/>
      return (
        <div key={id} style={cardStyles.parentContainer}>
          <div style={{ flex: '1 7' }}>
            {title ? <h5 style={cardStyles.title}>{title}</h5> : null}
            {subtitle ? <h6 style={cardStyles.subtitle}>{subtitle}</h6> : null}
          </div>
          <div style={{ flex: '6 7' }}>
            <div style={{ height: '100%' }}>
              <ChartistGraph data={data} options={chartOptions} type={chartType} style={{height: '100%'}}/>
            </div>
          </div>
        </div>
      )
    })
  }

  /**
   * Generate an array of layouts conf (this is useful for the RGL library)
   * @returns {*}
   */
  generateLayout() {
    return this.props.data.map(element => {
      const { id, pos, size } = element
      const { x, y } = pos
      const { w, h } = size

      return {
        i: id,
        x,
        y,
        w,
        h
      }
    })
  }

  /**
   * Regenerate layout from view 
   * @param {*} newLayout 
   */
  regenerateLayout(newLayout) {
    this.setState({layout: newLayout, dom: this.generateDOM() })
  }

  /**
   * Render method
   */
  render() {
    const { cols } = this.props

    return (
      <ReactGridLayout layout={this.state.layout} 
                       onLayoutChange={this.regenerateLayout.bind(this)}
                       style={layoutStyle.container}
                       cols={cols ? cols : 12}
      >
        { this.state.dom }
      </ReactGridLayout>
    );
  }
}