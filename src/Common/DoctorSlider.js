import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SingleDoctorCard from '../Common/SingleDoctorCard'
import doctor1 from '../Assets/jpg/team_img1.jpeg'
import doctor2 from '../Assets/jpg/team_img2.jpeg'
import doctor3 from '../Assets/jpg/team_img3.jpeg'
import doctor4 from '../Assets/jpg/team_img4.jpeg'
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
        title: 'John Muniz',
        subTitle: 'Medicine Doctor',
    },
    {
        src: doctor2,
        alt: 'doctor',
        title: 'John Muniz',
        subTitle: 'Cancer Specialist',
    },
]
const DoctorSlider = () => {
  return (<Swiper
    loop={true}
    spaceBetween={20}
    breakpoints={{
        1024: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 2
        },
        320: {
            sliderPerView: 2,
        },
        0: {
            sliderPerView: 1,
        }
    }}
>
    {SingleDoctorCardData.map((card, index) => (
        <SwiperSlide key={index}>
            <SingleDoctorCard  {...card} />
        </SwiperSlide>
    ))}
</Swiper>
  )
}

export default DoctorSlider
