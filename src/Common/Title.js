import React from 'react'
import CustomBox from './CustomBox'
import CustomTypography from './CustomTypography'
import EBStyled from './EBStyled'
 
const TitleStyled = EBStyled(CustomBox)(({ theme, white }) => ({
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    marginBottom: 64,
    [theme.breakpoints.down('sm')]: {
        marginBottom: 40,
    },
    [theme.breakpoints.down('xs')]: {
        marginBottom: 24,
    },
    [theme.breakpoints.down('lxs')]: {
        marginBottom: 16,
    },
    '& > .MuiTypography-h4 ': {
        fontWeight: 600,
        color: white ? theme.palette.primary.light : theme.palette.primary.main,
        position: 'relative',
        marginBottom: white ? null : 25,
        [theme.breakpoints.down('md')]: {
            fontSize: 30,
            marginBottom: 18,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 24,
            marginBottom: 10,
        },
    },
    '& > .MuiTypography-h3': {
        maxWidth: 560,
        margin: '0 auto',
        lineHeight: '56px',
        color: white ? theme.palette.primary.light : theme.palette.secondary.main,
        fontWeight: 600,
        [theme.breakpoints.down('md')]: {
            fontSize: 40,
            lineHeight: '55px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 32,
            lineHeight: '45px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 22,
            lineHeight: '33px',
        },
    },
    '& > .MuiTypography-body1': {
        fontWeight: 500,
        color: theme.palette.primary.dark,
        maxWidth: 520,
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        }
    }
}))
const Title = ({ title, subTitle, textAlign, white, descripiotion }) => {
    return (
        <TitleStyled white={white}>
            <CustomTypography variant='h4' component='h2' display="inline-block">{title}</CustomTypography>
            {
                subTitle &&
                <CustomTypography variant='h3' component='h3' textAlign={textAlign}>{subTitle}</CustomTypography>
            }
            {
                descripiotion &&
                <CustomTypography paragrph={true}>{descripiotion}</CustomTypography>
            }
        </TitleStyled>
    )
}

export default Title
