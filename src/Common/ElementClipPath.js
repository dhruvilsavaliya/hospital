import React from 'react'
import CustomBox from './CustomBox'
import EBStyled from './EBStyled'
 
const ElementClipPathStyled = EBStyled(CustomBox)(({ theme, before, overflow, condition, imageRadius }) => ({
    borderRadius: imageRadius ? 30 : null,
    position: imageRadius ? 'relative' : null,
    transition: imageRadius ? 'all .3s ease-in-out' : null,
    overflow: imageRadius ? (overflow ? 'hidden' : 'visible') : null,
    display: condition ? 'flex' : null,
    alignItems: condition ? 'center' : null,
    justifyContent: condition ? 'space-between' : null,
    boxShadow: condition ? 'rgba(0, 0, 0, 0.6) 0px 1px 4px' : null,
    [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
    },
    '&:before': {
        content: before ? '" "' : 'none',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        background: `linear-gradient(to top,  rgba(3,13,45,0.4) 0%,rgba(88,132,175,0.3) 52%,rgba(125,185,232,0.3) 75%)`,
    },
}))
const ElementClipButtonStyled = EBStyled(CustomBox)(({ theme, condition, color }) => ({
    display: 'inline-block',
    lineHeight: condition ? '75px' : null,
    textAlign: 'center',
    borderRadius: condition ? '50%' : null,
    height: condition ? 60 : null,
    width: condition ? 60 : null,
    backgroundColor: condition ? theme.palette.common.white : null,
    color: condition ? theme.palette.common.white : color,
    position: 'relative',
    zIndex: 1,
    marginBottom: condition ? null : 14,
    marginRight: condition ? 15 : null,
    [theme.breakpoints.down('md')]: {
        lineHeight: condition ? '65px' : null,
        fontSize: 12,
    },
    [theme.breakpoints.down('sm')]: {
        height: condition ? 50 : null,
        width: condition ? 50 : null,
    },
    [theme.breakpoints.down('xs')]: {
        marginBottom: condition ? null : 4,
        marginRight: condition ? 0 : null,
    },
    '> svg': {
        fontSize: condition ? 24 : 30,
    },
    '&:hover': {
        '> svg': {
            animation: condition ? 'toLeftFromRight 0.5s linear forwards' : 'none',
        }
    },
    '@keyframes toLeftFromRight': {
        '49%': {
            transform: 'scale(0.2)'
        },
        '50%': {
            opacity: 0,
            transform: 'scale(1)'
        },
        '51%': {
            opacity: 1,
            transform: 'scale(0.2)'
        },
    }
}))
const ImgBoxStyled = EBStyled(CustomBox)(({ size }) => ({
    borderRadius: size ? 30 : null,
    overflow: 'hidden',
    height: size ? '267px' : '100%',
    '&>img': {
        transition: 'all .3s ease-in-out',
        height: '100%',
        verticalAlign: 'middle',
        width: '100%',
        objectFit: 'cover',
    }
}))
const ElementClipPath = ({ borderRadius, condition, color, before, children, background, backgroundColor, backgroundSize, backgroundPosition, padding, height, icon, bottom, overflow, right, src, size, sx, imageRadius, ...props }) => {
    return (
        <>
        <ElementClipPathStyled padding={padding} overflow={overflow} condition={condition} before={before} sx={{ ...sx }} height={height} imageRadius={imageRadius} {...props}>
            {
                src &&
                <ImgBoxStyled size={size}>
                    <CustomBox component='img' src={src} />
                </ImgBoxStyled>
            }
            {
                icon &&
                <ElementClipButtonStyled component='a' href='#' color={color} condition={condition} sx={{ backgroundColor: { backgroundColor } }}>
                    {icon}
                </ElementClipButtonStyled>
            }
            {children}
        </ElementClipPathStyled>
        </>
    )
}
export default ElementClipPath
