import React from 'react'

export default function Body({ users, searchHandler, search }) {
    // const searchCase = search.toUpperCase()
    return (
        <div className='container'>
            <div className="form-group">
                <label for="employee">{search}</label>
                <input type="text" className="form-control" id="employee" placeholder="Start searching employee name" onChange={searchHandler} />
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
