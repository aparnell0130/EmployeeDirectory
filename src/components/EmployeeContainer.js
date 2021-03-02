import React, { Component } from 'react'
import API from '../utils/API'
import Body from './elements/Body'
import Header from './elements/Header'

export class EmployeeContainer extends Component {
    state = {
        search: '',
        employees: []
    }
    componentDidMount() {
        this.employees()
    }
    employees = () => {
        API().then(res => {
            console.log(res.data.results)
            this.setState({
                employees: res.data.results
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
                <Body employees={this.state.employees} searchHandler={this.searchEmployee} search={this.state.search} />
            </div>
        )
    }
}

export default EmployeeContainer
