import React from 'react'

export default function Body({ users, searchHandler, search }) {

    return (
        <div className='container'>
            <div className="form-group">
                <label for="employee">{search}</label>
                <input type="text" className="form-control" id="employee" placeholder="Start searching employee name" onChange={searchHandler} />
                <button className='btn btn-success'><i className="fas fa-arrow-circle-up"></i></button>
                <button className='btn btn-success'><i className="fas fa-arrow-circle-down"></i></button>
            </div>
            <ul className="list-group">
                {
                    users.filter(user =>
                        user.name.title.concat(` ${user.name.first} ${user.name.last}`)
                            .toUpperCase()
                            .includes(search.toUpperCase())
                    )
                        .map(user => (
                            <li key={user.email} className='list-group-item'>
                                {user.name.title} {user.name.first} {user.name.last} {user.email}
                            </li>)
                        )
                }
            </ul>
        </div>
    )
}
