import React from 'react'
import { Outlet } from 'react-router-dom'

const Educators = () => {
  return (
    <div>
        <h1>Educators</h1>
        <div>
            {<Outlet />}
        </div>
    </div>
  )
}

export default Educators