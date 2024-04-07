import React from 'react'

const Hello = (props) => {
  return (
    <div>
        {props.lang}
        {props.message}
    </div>
  )
}

export default Hello