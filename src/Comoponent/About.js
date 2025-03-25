import React from 'react'
import CustomContainer from '../Common/CustomContainer'
import CustomBox from '../Common/CustomBox'
import CustomGrid from '../Common/CustomGrid'
import CustomStack from '../Common/CustomStack'
import About01 from '../Assets/jpg/about-01.jpeg'
import About02 from '../Assets/jpg/about-02.jpeg'
import { makeStyles } from '@mui/styles'
import Heading from '../Common/Heading'
import AboutBg02 from '../Assets/png/about-bg02.png'
import AboutBg03 from '../Assets/png/about-bg03.png'
import Video from '../Common/Video'
const useStyles = makeStyles((theme) => ({
    AboutLeft: {
        '&:hover $AboutImage': {
            transform: 'translate(0,0)',
        },
        '&:hover $AboutImageVideo': {
            transform: 'translate(0,0)',
        }
    },
    AboutImage: {
        backgroundImage: `url(${About01})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        width: '100%',
        height: '70vh',
        borderRadius: '15px',
        minHeight: '500px',
        transform: 'translate(0,30px)',
        transition: 'transform 0.5s ease-in-out',
        [theme.breakpoints.down('sm')]: {
            height: '50vh',
            minHeight: 300
        },
        [theme.breakpoints.down('xs')]: {
            height: '40vh',
        },
        '& > img': {
            maxWidth: 150,
            position: 'absolute',
            top: '-55px',
            left: '-22%',
            display: 'inline-block',
            animation: '$rotate 15s linear infinite',
            [theme.breakpoints.down('sm')]: {
                maxWidth: 120,
            },
            [theme.breakpoints.down('xs')]: {
                maxWidth: 100,
            },
        },
    },
    '@keyframes rotate': {
        '0%': {
            transform: 'rotate(0deg)',
        },
        '100%': {
            transform: 'rotate(1turn)',
        },
    },
    AboutImageVideo: {
        backgroundImage: `url(${About02})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        width: '100%',
        height: '70vh',
        minHeight: '500px',
        borderRadius: '15px',
        transform: 'translate(0,-30px)',
        transition: 'transform 0.5s ease-in-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            height: '50vh',
            minHeight: 300
        },
        [theme.breakpoints.down('xs')]: {
            height: '40vh',
        },
    },
    AboutBgDot: {
        position: 'absolute',
        zIndex: '-1',
        left: '50%',
        bottom: '-10%',
        transform: 'translate(-50%)',
        animation: `$circle 10s linear infinite`,
        maxWidth: 200,
        [theme.breakpoints.down('md')]: {
            maxWidth: 150
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: 130,
            bottom: '0',
        }
    },
    '@keyframes circle': {
        '0%': {
            transform: 'rotate(0deg) translate(-40px) rotate(0deg)',
        },
        '100%': {
            transform: 'rotate(1turn) translate(-40px) rotate(-1turn)',
        },
    },
}))
const About = () => {
    const classess = useStyles()
    return (
        <>
            <CustomBox component='section'>
                <CustomBox sx={{
                    backgroundImage: `url(${AboutBg02})`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <CustomContainer>
                        <CustomGrid container alignItems={'center'}>
                            <CustomGrid sm={6} lxs={12} position='relative' className={classess.AboutLeft}>
                                <CustomBox component='img' src={AboutBg03} className={classess.AboutBgDot} />
                                <CustomStack
                                    direction={'row'}
                                    spacing={2}
                                >
                                    <CustomBox className={classess.AboutImage}></CustomBox>
                                    <CustomBox className={classess.AboutImageVideo}>
                                        <Video src={"https://www.youtube.com/embed/lTGHf69T4l8"}/>
                                    </CustomBox>
                                </CustomStack>
                            </CustomGrid>
                            <CustomGrid sm={6} lxs={12} padding={{ xs: 2, sm: 3, md: 4, lg: 5 }} marginTop={{ sm: 0, xs: 5, lxs:7}}>
                                <Heading title={'About Doctor'} sliderHeadColor='secondary.dark' sliderHeading={'We Collaborate for Better Healthcare'} sliderParaColor={'primary.dark'} sliderParagraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.'} btnText={'Learn More'} />
                            </CustomGrid>
                        </CustomGrid>
                    </CustomContainer>
                </CustomBox>
            </CustomBox>
        </>
    )
}

export default About
