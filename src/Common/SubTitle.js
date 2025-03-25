 
import React from 'react'
import CustomTypography from './CustomTypography'
import CustomBox from './CustomBox'
import EBStyled from './EBStyled'
const SubTitleStyled = EBStyled(CustomBox)(({ theme }) => ({
    position: 'relative',
    display: 'inline-block',
    '& > .MuiTypography-span': {
        fontSize: 11,
        letterSpacing: '0.6px',
        display: 'inline-block',
        padding: '8px 12px',
        borderRadius: 20,
        textTransform: 'uppercase',
        [theme.breakpoints.down('xs')]: {
            fontSize: 10,
            padding: '6px 8px',
        },
    },
    '> img': {
        height: '100%',
        position: 'absolute',
        maxWidth: 100,
        top: '-67%',
        right: '-5%',
        animation: `spin 3s forwards infinite alternate`,
        zIndex: -1,
        [theme.breakpoints.down('md')]: {
            bottom: '70%',
            right: '-10%',
        },
        [theme.breakpoints.down('sm')]: {
            bottom: '90%',
            right: '10%',
            maxWidth: 90,
        },
        '@keyframes spin': {
            '0%': {
                transform: 'rotate(-20deg)',
            },
            '100%': {
                transform: 'rotate(-5deg)',
            }
        }
    },
}))
const SubTitle = ({ title, mb, backgroundColor, color, src, alt, ...rest }) => {
    return (
        <SubTitleStyled>
            <CustomTypography variant='span' mb={mb} {...rest} backgroundColor={backgroundColor} color={color}>
                {title}
            </CustomTypography>
            {
                src &&
                <CustomBox component='img' src={src} alt={alt} />
            }
        </SubTitleStyled>
    )
}

export default SubTitle