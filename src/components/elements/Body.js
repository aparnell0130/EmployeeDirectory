import React from 'react'

export default function Body({ users, searchHandler, search }) {

    return (
        <div className='container'>
            <div className="form-group">
                <label htmlFor="employee">{search}</label>
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
                            <div key={user.login.uuid}>
                                <li className='list-group-item rounded mb-1' style={{
                                    background: '#22577a',
                                    color: '#57cc99'
                                }}>
                                    <span className='font-weight-bold' style={{ color: '#38a3a5' }}>Employee Name: </span>  {user.name.title} {user.name.first} {user.name.last}
                                    <br />
                                    <span className='font-weight-bold' style={{ color: '#38a3a5' }}>Employee Email: </span>  {user.email}
                                    <br />
                                    <img className='rounded' src={user.picture.large} alt="employee pic" />
                                </li>
                            </div>)

                        )
                }
            </ul>
        </div >
    )
}
