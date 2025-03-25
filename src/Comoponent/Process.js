import React from 'react'
import CustomBox from '../Common/CustomBox'
import CustomContainer from '../Common/CustomContainer'
import Title from '../Common/Title'
import ProcessBg from '../Assets/png/Process-bg.png'
import CustomGrid from '../Common/CustomGrid'
import SingleProcessCard from '../Common/SingleProcessCard'
import appoinmentImg from '../Assets/jpg/appoiment.jpg'
import ArrowImg from '../Assets/svg/arrow.svg'
import CheckUp from '../Assets/jpg/checkUp.jpg'
import Registration from '../Assets/jpg/Registration.webp'
 
import CustomTypography from '../Common/CustomTypography'
import EBStyled from '../Common/EBStyled'
const ProcessCardData = [
  {
    backgroundImageArrow: ArrowImg,
    srcCard: Registration,
    counterNumber: '01',
    altCard: 'Registration',
    title: 'Get Appointment',
    pragraph: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.'
  },
  {
    backgroundImageArrow: ArrowImg,
    counterNumber: '02',
    srcCard: appoinmentImg,
    altCard: 'appoinmentImg',
    title: 'Patient Registration',
    pragraph: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.'
  },
  {
    counterNumber: '03',
    srcCard: CheckUp,
    altCard: 'check-up',
    title: 'Check-Ups',
    pragraph: 'Once the patient is checked in, healthcare professional conduct a thorough evaluation.'
  }
]
const ProcessStyled = EBStyled(CustomTypography)(({ theme }) => ({
  backgroundImage: `url(${ProcessBg})`,
  backgroundPosition: 'center',
  position: 'relative',
  '&:before': {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'linear-gradient(90deg,rgba(88,132,175,0.3) 30%,rgba(125,185,232,0.3) 65%)',
    height: '100%',
    width: '100%',
    opacity: .3,
  },
}))
const Process = () => {
  return (
    <ProcessStyled component='section' variant='section'>
      <CustomContainer>
        <Title textAlign={'center'} title={'Process'} subTitle={'How It Helps You To Keep Healthy'} />
        <CustomBox>
          <CustomGrid container spacing={1}
            justifyContent={'space-between'}
          >
            {ProcessCardData.map((data, index) => (
              <CustomGrid md={3} sm={6} lxs={12} key={index} sx={{
                marginTop: {
                  xs: 0,
                  sm: 0,
                  md: index === 1 ? '50px' : index === 2 ? '100px' : 0
                }
              }}>
                <SingleProcessCard {...data} />
              </CustomGrid>
            ))}
          </CustomGrid>
        </CustomBox>
      </CustomContainer>

    </ProcessStyled>
  )
}

export default Process
