import React from 'react'

async function Page({params}) {
    const { username } = await params
  return (
    <div>User Name - {username}</div>
  )
}

export default Page