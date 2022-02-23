import React, { Component } from 'react'

import  "../myCss.css"
//tsrcc
type Props = {}

type State = {}

export default class Header extends Component<Props, State> {

    render() {
        return (
            <div className="header">
            <a href="#default" className="logo">Tinh Dầu HANA</a>
            <div className="header-right">
              <a className="active" href="#home">Home</a>
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
            </div>
          </div>
        )
    }
}