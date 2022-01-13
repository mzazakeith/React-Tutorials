import React from 'react'


const PropsHi = (props) => {
  return (
    <div>
      <h1>Hello {props.name} aka {props.HeroName}</h1> {props.children}
    </div>)
}

export default PropsHi