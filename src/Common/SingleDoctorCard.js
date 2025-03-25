import React, { useState } from 'react'
import CustomBox from './CustomBox'
 
import CustomTypography from './CustomTypography'
import Social from './Social'
import AddIcon from '@mui/icons-material/Add';
import CustomNavLink from './CustomNavLink'
import EBStyled from './EBStyled';
const SingleDoctorStyled = EBStyled(CustomBox)(({ theme, boxShadow }) => ({
    background: 'linear-gradient(to bottom, rgb(51 104 198 / 60%), transparent 50%)',
    padding: '4px 4px 0 4px ',
    borderRadius: 4,
    position: 'relative',
    boxShadow: boxShadow ? '0px 6px 30px rgba(0,0,0,0.05)' : null,
    '&:hover': {
        "> .MuiBox-root > .MuiBox-root > img": {
            transform: 'scale(1.2)',
        },
    },
}))
const ContentBoxStyled = EBStyled(CustomBox)(({ theme }) => ({
    padding: 18,
    textAlign: 'center',
    transition: 'all .5s ease-in-out',
    "& > .MuiTypography-h6": {
        borderBottom: `1px solid rgba(${parseInt(theme.palette.primary.dark.slice(1, 3), 16)}, ${parseInt(theme.palette.primary.dark.slice(3, 5), 16)}, ${parseInt(theme.palette.primary.dark.slice(5, 7), 16)}, 0.2)`,
        fontWeight: 600,
        paddingBottom: 5,
        '& > a': {
            color: theme.palette.secondary.main,
            textDecoration: 'none',
            transition: 'all .3s ease-in-out',
            '&:hover': {
                color: theme.palette.primary.main,
            }
        }
    },
    '& > .MuiTypography-subtitle2': {
        paddingTop: 10,
        color: theme.palette.primary.dark,
        fontWeight: theme.typography.fontWeight[500]
    },
    '& > .MuiTypography-body1': {
        fontSize: 14,
        marginTop: 14,
        fontWeight: 500,
        color: theme.palette.secondary.main,
        opacity: 0.5,
    }
}))
const ImgStyled = EBStyled(CustomBox)(({ theme }) => ({
    '& .MuiBox-root>img': {
        width: '100%',
        objectFit: 'cover',
        transition: 'all .5s ease-in-out',
    },
    position: 'relative',
    borderRadius: '3px 3px 0px 0px',
    '&:before,&:after': {
        content: '""',
        position: 'absolute',
        opacity: 1,
        background: 'rgba(255, 255, 255, 0.3)',
        zIndex: 1,
    },
    '&:before': {
        top: 0,
        right: '50%',
        left: '50%',
        bottom: 0,
    },
    '&:after': {
        top: '51%',
        right: '0',
        bottom: '50%',
        left: '0',
    },
    '&:hover': {
        '&:before': {
            left: 0,
            right: 0,
            opacity: 0,
            transition: 'all .9s ease-in-out',
        },
        '&:after': {
            top: 0,
            bottom: 0,
            opacity: 0,
            transition: 'all .9s ease-in-out',
        },
    }
}))
const IconBoxStyled = EBStyled(CustomBox)(({ theme, isRotated }) => ({
    position: 'absolute',
    bottom: -15,
    left: 15,
    height: 40,
    width: 40,
    lineHeight: '52px',
    textAlign: 'center',
    background: theme.palette.primary.main,
    borderRadius: '50%',
    cursor: 'pointer',
    zIndex: 3,
    '& > svg': {
        fill: theme.palette.common.white,
        fontSize: 22,
        transition: 'all .3s ease-in-out',
        transform: isRotated ? 'rotate(120deg)' : 'rotate(0deg)' ,
    },
    '&:hover': {
        '&.MuiStack-root': {
            opacity: 0
        }
    }
}))
const SocialStyled = EBStyled(CustomBox)(({ theme, isVisible }) => ({
    position: 'absolute',
    bottom: isVisible ? '50px' : '0',
    opacity: isVisible ? 1 : 0,
    left: 10,
    background: 'rgb(233 241 255 / 50%)',
    zIndex: 2,
    padding: '2px 4px',
    borderRadius: 10,
    transition: 'all .3s ease-in-out'
}))
const SingleDoctorCard = ({ src, alt, title, subTitle, text, boxShadow }) => {
    const [isSocialOpen, setIsSocialOpen] = useState(false)
    const [isRotated, setIsRotated] = useState(false)
    const searchClick = () => {
        setIsSocialOpen(!isSocialOpen)
        setIsRotated(!isRotated)
    }
    return (
        <SingleDoctorStyled position="relative" overflow="hidden" boxShadow={boxShadow}>
            <ImgStyled>
                <CustomBox sx={{ overflow: 'hidden' }}>
                    <CustomBox component='img' src={src} alt={alt} sx={{ verticalAlign: 'middle' }} />
                </CustomBox>
                <IconBoxStyled onClick={searchClick} isRotated={isRotated}>
                    <AddIcon />
                </IconBoxStyled>
                <SocialStyled isVisible={isSocialOpen}>
                    <Social direction={'column'} condition={true} sizeCondicition={false} marginBottom={1} marginTop={1} />
                </SocialStyled>
            </ImgStyled>
            {
                title &&
                <ContentBoxStyled>
                    <CustomTypography variant="h6" component="h4">
                        <CustomNavLink to="/doctor-details">{title}</CustomNavLink>
                    </CustomTypography>
                    <CustomTypography variant="subtitle2">{subTitle}</CustomTypography>
                    <CustomTypography variant='body1'>{text}</CustomTypography>
                </ContentBoxStyled>
            }
        </SingleDoctorStyled>
    )
}

export default SingleDoctorCard