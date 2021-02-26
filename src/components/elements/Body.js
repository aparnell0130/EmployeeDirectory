import React from 'react'

export default function Body({ users }) {
    return (
        <div className='container'>
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
