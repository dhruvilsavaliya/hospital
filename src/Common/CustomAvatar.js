import { Avatar } from '@mui/material'
import React from 'react'

const CustomAvatar = ({src,alt,...props}) => {
  return (
    <Avatar src={src} alt={alt} {...props}/>
  )
}

export default CustomAvatar
