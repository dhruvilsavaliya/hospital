import React from 'react'
import CustomBox from './CustomBox'
import LogoImg from '../Assets/png/Logo2.png'
import CustomNavLink from './CustomNavLink'
const Logo = ({maxWidth,sx,...rest}) => {
    return (
        <CustomNavLink to="/"
            {...rest}
        >
            <CustomBox component='img' height='auto' src={LogoImg} sx={sx}/>
        </CustomNavLink>
    )
}

export default Logo
