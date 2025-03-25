import React from 'react'
import { NavLink } from 'react-router-dom'

const CustomNavLink = ({...rest}) => {
  return (
    <NavLink {...rest}/>
  )
}

export default CustomNavLink
