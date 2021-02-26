import React from 'react'

export default function Body({ users, search }) {
    return (
        <div className='container'>
            <div className="form-group">
                <label for="employee">Search Employee</label>
                <input type="text" className="form-control" id="employee" placeholder="Start searching employee name" onChange={search} />
            </div>
            <ul className="list-group">
                {users.map(user => (
                    <li key={user.email} className='list-group-item'>
                        {user.name.title} {user.name.first} {user.name.last} {user.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}
