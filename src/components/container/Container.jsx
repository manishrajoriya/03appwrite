import React from 'react'
import { Children } from 'react'

function Container() {
  return (
    <div
    className='w-full px-4 mx-auto max-w-7xl'
    >{Children}</div>
  )
}

export default Container