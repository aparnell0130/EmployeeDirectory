import React, { Component } from 'react'
import API from '../utils/API'
import Body from './elements/Body'
import Header from './elements/Header'

export class EmployeeContainer extends Component {
    state = {
        search: '',
        users: []
    }
    componentDidMount() {
        this.employees()
    }
    employees = () => {
        API().then(res => {
            console.log(res.data.results)
            this.setState({
                users: res.data.results
            })
        }
        ).catch(err => console.log(err))
    }
    searchEmployee = (event) => {
        this.setState({
            search: event.target.value
        })
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

export default EmployeeContainer
