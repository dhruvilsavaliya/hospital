import React from 'react'
import SingleDoctorCard from './SingleDoctorCard'
import CustomContainer from './CustomContainer'
import doctor1 from '../Assets/jpg/team_img1.jpeg'
import doctor2 from '../Assets/jpg/team_img2.jpeg'
import doctor3 from '../Assets/jpg/team_img3.jpeg'
import doctor4 from '../Assets/jpg/team_img4.jpeg'
import CustomGrid from './CustomGrid'
import CustomTypography from './CustomTypography'
import Title from './Title'
import theme from '../Theme'
const SingleDoctorCardData = [
    {
        src: doctor1,
        alt: 'doctor',
        title: 'John Muniz',
        subTitle: 'Restorative Dentist',
    },
    {
        src: doctor2,
        alt: 'doctor',
        title: 'John Muniz',
        subTitle: 'Cancer Specialist',
    },
    {
        src: doctor3,
        alt: 'doctor',
        title: 'John Muniz',
        subTitle: 'Cosmetic Surgeon',
    },
    {
        src: doctor4,
        alt: 'doctor',
        title: 'Dr. John Muniz',
        subTitle: 'Cosmetic Surgeon',
    },
]
const SpecialDoctor = () => {
    return (
        <CustomTypography component={'section'} variant="section" sx={{background:theme.palette.primary[50]}}>
            <CustomContainer>
                <CustomGrid container>
                    <CustomGrid lxs={12}>
                        <Title title={'Core Team'} subTitle={'Our Team Members'}/>
                    </CustomGrid>
                </CustomGrid>
                <CustomGrid container columnSpacing={2} rowSpacing={{md:0,lxs:2}}>
                    {SingleDoctorCardData.map((data, index) => (
                        <CustomGrid md={3} xs={6} lxs={12} key={index}>
                            <SingleDoctorCard {...data} />
                        </CustomGrid>
                    ))}
                </CustomGrid>
            </CustomContainer>
        </CustomTypography>
    )
}

export default SpecialDoctor
