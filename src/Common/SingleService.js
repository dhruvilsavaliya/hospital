import React from 'react'
import ServiceCard from './ServiceCard'
import CustomGrid from './CustomGrid'
import serviceCard1 from '../Assets/jpg/medicine.jpg'
import serviceCard2 from '../Assets/jpg/DenatCare.jpg'
import serviceCard3 from '../Assets/jpg/kidney.jpg'
import serviceCard4 from '../Assets/jpg/brain.jpg'
import serviceCard5 from '../Assets/jpg/Gynecologoists.jpg'
import serviceCard6 from '../Assets/jpg/eye.jpg'
import ServiceCardIcon1 from '../Assets/png/medicine.png'
import ServiceCardIcon2 from '../Assets/png/tooth.png'
import ServiceCardIcon3 from '../Assets/png/kidney.png'
import ServiceCardIcon4 from '../Assets/png/neurology.png'
import ServiceCardIcon5 from '../Assets/png/newborn.png'
import ServiceCardIcon6 from '../Assets/png/eyeball.png'
import CustomContainer from './CustomContainer'
const ServiceCardData = [
    {
        backgroundImage: serviceCard1,
        BoxTitle:'Internal Medicine',
        BoxIcon: ServiceCardIcon1, 
        subTitle: '30+ Doctors', 
        Iconalt: 'service', 
        btnText:'Read More'
    },
    {
        backgroundImage: serviceCard2,
        BoxTitle:'Dental Care',
        BoxIcon: ServiceCardIcon2, 
        subTitle: '20+ Doctors', 
        Iconalt: 'service', 
        btnText:'Read More'
    },
    {
        backgroundImage: serviceCard3,
        BoxTitle:'Urology Care',
        BoxIcon: ServiceCardIcon3, 
        subTitle: '20+ Doctors', 
        Iconalt: 'service', 
        btnText:'Read More'
    },
    {
        backgroundImage: serviceCard4,
        BoxTitle:'Neurology Care',
        BoxIcon: ServiceCardIcon4, 
        subTitle: '10+ Doctors', 
        Iconalt: 'service', 
        btnText:'Read More'
    },
    {
        backgroundImage: serviceCard5,
        BoxTitle:'Gynecologoists',
        BoxIcon: ServiceCardIcon5, 
        subTitle: '30+ Doctors', 
        Iconalt: 'service', 
        btnText:'Read More'
    },
    {
        backgroundImage: serviceCard6,
        BoxTitle:'Ophthalmology',
        BoxIcon: ServiceCardIcon6, 
        subTitle: '30+ Doctors', 
        Iconalt: 'service', 
        btnText:'Read More'
    },
]
const SingleService = () => {
  return (
    <>
    <CustomContainer>
        <CustomGrid container spacing={2.5}>
            {ServiceCardData.map((item,index) => (
            <CustomGrid sm={4} xs={6} lxs={12} key={index}>
                    <ServiceCard {...item}/>
                </CustomGrid>
            ))}
        </CustomGrid>
    </CustomContainer>
    </>
  )
}

export default SingleService
