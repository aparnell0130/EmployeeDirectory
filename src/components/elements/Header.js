import React from 'react'

export default function Header() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid "
                style={{
                    background: '#22577a',
                    color: '#57cc99'
                }}>
                <div className="container text-center ">
                    <h1 className="display-3 ">Employee <span className='rounded p-2' style={{ background: '#c7f9cc', color: '#57cc99' }}>Directory</span> </h1>
                    <p className="blockquote mt-3" style={{ color: '#c7f9cc' }}>Easily navigate through your Employees</p>
                </div>
            </div>
        </div>
    )
}
