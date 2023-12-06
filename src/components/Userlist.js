import React from 'react'

function Userlist({users}) {
  return (
    <div>{users.map((el)=>(
    <h1>{el.name}</h1>))}
    </div>
  )
}

export default Userlist