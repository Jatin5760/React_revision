import React from 'react'

async function Page({params}) {
    const {username} = await params
    console.log(username);
    
  return (
    <div>User Name - {username[0]}</div>
  )
}

export default Page