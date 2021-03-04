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
    sortEmployee = (event) => {
        event.preventDefault()
        console.log('this button has been clicked')
        const sortedEmp = this.state.employees.sort((a, b) => a.name.first > b.name.first ? 1 : -1)
        console.log(sortedEmp)
        this.setState({
            employees: sortedEmp

        })
        console.log(this.state.employees)
    }
    sortEmployeeDesc = (event) => {
        event.preventDefault()
        console.log('this button has been clicked')
        const sortedEmp = this.state.employees.sort((a, b) => a.name.first < b.name.first ? 1 : -1)
        console.log(sortedEmp)
        this.setState({
            employees: sortedEmp

        })
        console.log(this.state.employees)
    }
    render() {
        return (
            <div>
                <Header />
                <Body employees={this.state.employees} searchHandler={this.searchEmployee} sort={this.sortEmployee} sortDesc={this.sortEmployeeDesc} search={this.state.search} />
            </div>
        )
    }
}

export default EmployeeContainer
