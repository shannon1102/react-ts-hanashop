import React, { Component } from 'react'
import Product from './Product'

type Props = {}

type State = {}

export default class Body extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className='flex'>
              
            <Product/>

            </div>
        )
    }
}