import React, { Component } from 'react'
import Body from './elements/Body'
import Header from './elements/Header'

export class UsersContainer extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
            </div>
        )
    }
}

export default UsersContainer
