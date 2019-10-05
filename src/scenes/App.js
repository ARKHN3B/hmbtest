import React, { Component } from 'react'
import { Layout as GridLayout } from './Grid'

const data = [
  {
    id: 'd1',
    title: "my bar",
    subtitle: "my subtitle",
    pos: {x: 0, y: 2},
    size: {w: 1, h: 2},
    chartType: "Bar",
    chartOptions: {
      high: 10,
      low: -10,
    },
    data: {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      series: [
        [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
      ]
    }
  },
  {
    id: 'd2',
    title: "my foo",
    subtitle: "my subtitle",
    pos: {x: 2, y: 0},
    size: {w: 3, h: 3},
    chartType: "Line",
    chartOptions: {},
    data: {
      labels: [1, 2, 3, 4, 5],
      series: [
        [1, 5, 10, 0, 1],
        [10, 15, 0, 1, 2]
      ]
    }
  }
]
export default class App extends Component {
  render() {
    return (
      <GridLayout data={data}/>
    )
  }
}