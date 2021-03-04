import React from 'react'

export default function Body({ employees, searchHandler, search, sort, sortDesc }) {

    return (
        <div className='container'>
            <div className="form-group rounded p-3" style={{ background: '#22577a' }}>
                <label htmlFor="employee" style={{ color: '#80ed99' }}>{search}</label>
                <input type="text" className="form-control" id="employee" placeholder="Search employee by name" onChange={searchHandler} />
                <button className='btn btn-success round m-2' onClick={sort}><i className="fas fa-arrow-circle-up"> Sort Asc</i></button>
                <button className='btn btn-success round m-2' onClick={sortDesc}><i className="fas fa-arrow-circle-down"> Sort Desc</i></button>
            </div>
            <ul className="list-group">
                {
                    employees.filter(employee =>
                        employee.name.title.concat(` ${employee.name.first} ${employee.name.last}`)
                            .toUpperCase()
                            .includes(search.toUpperCase())
                    )
                        .map(employee => (
                            <div key={employee.login.uuid}>
                                <li className='list-group-item rounded mb-1' style={{
                                    background: '#22577a',
                                    color: '#c7f9cc'
                                }}>
                                    <span className='font-weight-bold' style={{ color: '#38a3a5' }}>Employee Name: </span>  {employee.name.title} {employee.name.first} {employee.name.last}
                                    <br />
                                    <span className='font-weight-bold' style={{ color: '#38a3a5' }}>Employee Email: </span>  {employee.email}
                                    <br />
                                    <img className='rounded' src={employee.picture.large} alt="employee pic" />
                                </li>
                            </div>)

                        )
                }
            </ul>
        </div >
    )
}
