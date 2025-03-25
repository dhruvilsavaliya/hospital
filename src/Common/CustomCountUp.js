import React from 'react'
import CustomBox from './CustomBox'
 
import CountUp from 'react-countup'
import CustomTypography from './CustomTypography'
import EBStyled from './EBStyled'
const CountUpStyled =EBStyled(CustomBox)(({theme}) => ({
    position:'relative',
    padding:'50px 40px',
    // background: theme.palette.common.white,
    borderRight: `1px solid ${theme.palette.common.white}`,
    borderLeft: `1px solid ${theme.palette.common.white}`,
    borderRadius: 12,
    textAlign:'center',
    overflow:'hidden',
    [theme.breakpoints.down('sm')]:{
        padding:'30px 25px',
    },
    '& > img' : {
        position:'absolute',
        bottom: '-6%',
        right: '-3%',
        maxWidth: 80,
        transform:'scale(0.6)',
        opacity:1,
        transition:'all .3s ease-in-out',
        [theme.breakpoints.down('xs')]:{
            transform:'scale(0.5)',
        }
    },
    '& > .MuiTypography-h4':{
        fontWeight:theme.typography.fontWeight[600],
        color: theme.palette.primary.light,
        marginBottom:12,
        [theme.breakpoints.down('sm')]:{
            fontSize:30,
            marginBottom:10,
        },
        [theme.breakpoints.down('xs')]:{
            marginBottom: 8,
            fontSize:24,
        }
    },
    '& > .MuiTypography-body1':{
        fontWeight:theme.typography.fontWeight[500],
        color: theme.palette.primary.light,
        marginBottom:0,
        [theme.breakpoints.down('sm')]:{
            fontSize:14,
        }
    }
}))
const CustomCountUp = ({number,duration,delay,rightText,text,src}) => {
    return (
        <CountUpStyled>
            {
                src &&
                <CustomBox component='img' src={src} />
            }
                <CustomTypography variant='h4' component="h4">
                    <CountUp start={0} end={number} duration={duration} delay={delay} />
                    {rightText}
                </CustomTypography>
                <CustomTypography variant="body1">
                    {text}
                </CustomTypography>
        </CountUpStyled>
    )
}

export default CustomCountUp
