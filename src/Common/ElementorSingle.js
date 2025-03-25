import React from 'react'
import ElementorWidget from './ElementorWidget'
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import CustomGrid from './CustomGrid';
import theme from '../Theme';
import BgImg1 from '../Assets/jpg/bg-img-01.jpeg'

const ElementorWidgetData = [
  {
    background: theme.palette.primary.main,
    icon: <PersonIcon />, 
    title: 'Our Doctors', 
    desc: 'Select a doctor and schedule an appointment assurance you deserve with accuracy you can trust.'
  },
  {
    background: theme.palette.secondary.main,
    icon: <CalendarMonthIcon />, 
    title: 'Appointments', 
    desc: 'Search our locations to find the one nearest you Get the answers and assurance you deserve with accuracy you can trust.'
  },
  {
    background: `url(${BgImg1})`,
    backgroundSize: 'cover',
    icon: <VaccinesIcon />, 
    title: 'Emergency', 
    desc: 'Emergency Medical Services, more commonly known as EMS, is a system that respond'
  },
]
const ElementorSingle = () => {
  return (
      <CustomGrid container>
        {ElementorWidgetData.map((data,index) => (
          <CustomGrid md={4} sm={6} xs={12}  key={index} mb={2} sx={{padding:'0 12px'}}>
            <ElementorWidget {...data} TitleFontSize={'24px'} btnTextColor={theme.palette.common.white} condition={false} conditionTwo={true} overflow={true} before={true} padding={'40px 45px 45px'} borderRadius={false}/>
          </CustomGrid>
        ))}
      </CustomGrid>
  )
}

export default ElementorSingle
