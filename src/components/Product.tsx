import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Card } from 'antd';
type Props = {}

type State = {}

export default class Product extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>

          <Card title="Card Title"> Card content </Card>
      </div>
    )
  }
}