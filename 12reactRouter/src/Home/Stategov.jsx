import React from 'react'
import District from './District'

const Stategov = ({money}) => {
  return (
    <div>
      <h1>This is State Gov Component</h1>
      <District money = {money}/>
    </div>
  )
}

export default Stategov
