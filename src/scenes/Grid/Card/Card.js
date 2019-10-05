import React, { Component } from 'react'
import ChartistGraph from 'react-chartist'

export default class Card extends Component {

    /**
     * Render method
     */
    render() {
        const { id, title, subtitle, data, options, type } = this.props

        return (
            <div key={id} style={{paddingBottom: '2em'}}>
                {title ? <h5>{title}</h5> : null}
                {subtitle ? <h6>{subtitle}</h6> : null}
                <ChartistGraph data={data} options={options} type={type} style={{height: '100%'}}/>
            </div>
        ) 
    }
}