import React from 'react'
import CustomContainer from './CustomContainer'
import CustomTypography from './CustomTypography'
import CustomGrid from './CustomGrid'
import SingleDoctorCard from './SingleDoctorCard'
import doctor1 from '../Assets/jpg/team_img1.jpeg'
import doctor2 from '../Assets/jpg/team_img2.jpeg'
import doctor3 from '../Assets/jpg/team_img3.jpeg'
import doctor4 from '../Assets/jpg/team_img4.jpeg'
import CustomPagination from '../Pages/CustomPagination'
const SingleDoctorCardData = [
    {
        src: doctor1,
        alt: 'doctor',
        title: 'Dr. John Muniz',
        subTitle: 'Restorative Dentist',
    },
    {
        src: doctor2,
        alt: 'doctor',
        title: 'Dr. John Muniz',
        subTitle: 'Cancer Specialist',
    },
    {
        src: doctor3,
        alt: 'doctor',
        title: 'Dr. John Muniz',
        subTitle: 'Cosmetic Surgeon',
    },
    {
        src: doctor4,
        alt: 'doctor',
        title: 'Dr. John Muniz',
        subTitle: 'Cosmetic Surgeon',
    },
    {
        src: doctor1,
        alt: 'doctor',
        title: 'Dr. John Muniz',
        subTitle: 'Restorative Dentist',
    },
    {
        src: doctor2,
        alt: 'doctor',
        title: 'Dr. John Muniz',
        subTitle: 'Cancer Specialist',
    },
    {
        src: doctor3,
        alt: 'doctor',
        title: 'Dr. John Muniz',
        subTitle: 'Cosmetic Surgeon',
    },
    {
        src: doctor4,
        alt: 'doctor',
        title: 'Dr. John Muniz',
        subTitle: 'Cosmetic Surgeon',
    },
]
const CustomDoctor = () => {
  return (
      <CustomTypography component='section' variant='section'>
        <CustomContainer>
            <CustomGrid container spacing={1.5}>
                {SingleDoctorCardData.map((card, index) => (
                    <CustomGrid md={3} sm={4} xs={6} lxs={12} key={index}>
                        <SingleDoctorCard  {...card} />
                    </CustomGrid>
                ))}
            </CustomGrid>
            <CustomPagination configs={[{ count: 4, color: "primary" }]}/>
        </CustomContainer>
    </CustomTypography>
  )
}

export default CustomDoctor
