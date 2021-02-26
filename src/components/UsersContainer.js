import React, { Component } from 'react'
import API from '../utils/API'
import Body from './elements/Body'
import Header from './elements/Header'

export class UsersContainer extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        API().then(res =>
            this.setState({
                users: res.results
            })).catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <Header />
                <Body users={this.state.users} />
            </div>
        )
    }
}

export default UsersContainer
