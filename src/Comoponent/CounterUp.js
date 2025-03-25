import React from 'react'
import CustomCountUp from '../Common/CustomCountUp'
import CustomContainer from '../Common/CustomContainer'
import CustomGrid from '../Common/CustomGrid'
import bedImg from '../Assets/png/AboutUs/hospital-bed.png'
import staffsImg from '../Assets/png/AboutUs/doctor.png'
import awardImg from '../Assets/png/AboutUs/badge.png'
import patientImg from '../Assets/png/AboutUs/patient.png'
import HospitalRoomBG from '../Assets/jpg/aboutUs/HospitalRoom.jpg'
import CustomTypography from '../Common/CustomTypography'
import EBStyled from '../Common/EBStyled'
 
const CountUpdata = [
    {
        number: 1200,
        duration: 2,
        delay: 0,
        rightText: '+',
        text: 'Hospital Rooms',
        src: bedImg,
    },
    {
        number: 800,
        duration: 2,
        delay: 0,
        rightText: '+',
        text: 'Amazing Staffs',
        src:staffsImg,
    },
    {
        number: 1700,
        duration: 2,
        delay: 0,
        rightText: '+',
        text: 'Get Awards',
        src : awardImg,
    },
    {
        number: 1500,
        duration: 2,
        delay: 0,
        rightText: '+',
        text: 'Happy Patients',
        src:patientImg,
    },
]
const CounterUpStyled = EBStyled(CustomTypography)(({theme}) => ({
    background:`url(${HospitalRoomBG}) no-repeat`,
    backgroundSize:'cover',
    backgroundAttachment: 'fixed',
    position:'relative',
    '&:before':{
        content: '" "',
        position:'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        background:theme.palette.secondary.dark,
        opacity:0.5,
    }
}))
const CounterUp = () => {
  return (
    <CounterUpStyled component='section' variant="section" > 
        <CustomContainer>
            <CustomGrid container spacing={2}>
                {CountUpdata.map((data,index) => (
                    <CustomGrid md={3} xs={6} lxs={12} key={index}>
                        <CustomCountUp {...data}/>
                    </CustomGrid>
                ))}
            </CustomGrid>
        </CustomContainer>
    </CounterUpStyled>
  )
}

export default CounterUp
