import React from 'react'
import Sidebar from './include/Sidebar'

function Base({ children }) {

    return (
        <>
            <section className="bg-dashboard">
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar />
                        {children}
                    </div>
                </div>
            </section>


        </>
    )
}

export default Base