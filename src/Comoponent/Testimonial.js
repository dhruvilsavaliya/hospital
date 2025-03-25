import React from 'react'
import TestimonialData from '../Common/TestimonialData'
import CustomContainer from '../Common/CustomContainer'
import CustomGrid from '../Common/CustomGrid'
import Title from '../Common/Title'
import CustomBox from '../Common/CustomBox'
import CustomTypography from '../Common/CustomTypography'
import TestimonialImg1 from '../Assets/jpg/aboutUs/testimonial1.jpeg'
import TestimonialImg2 from '../Assets/jpg/aboutUs/testimonial2.jpeg'
import TestimonialImg3 from '../Assets/jpg/aboutUs/testimonial3.jpeg'
import quotesImg from '../Assets/png/AboutUs/quotes.png' 
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import EBStyled from '../Common/EBStyled'
const TestimonialSliderData = [
    {
        src: TestimonialImg1,
        title: 'Richard Clark',
        designation: 'Doctor',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem elit amet laudantium, quaeillo inventore sed veritatis et quasi architecto beatae vitae dicta sunt explicabo eiusmod tempor incididunt ut labore which toil and pain can procure him some great pleasure.',
    },
    {
        src: TestimonialImg2,
        title: 'Lissa Castro',
        designation: 'Doctor',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem elit amet laudantium, quaeillo inventore sed veritatis et quasi architecto beatae vitae dicta sunt explicabo eiusmod tempor incididunt ut labore which toil and pain can procure him some great pleasure.',
    },
    {
        src: TestimonialImg3,
        title: 'Alden Smith',
        designation: 'Doctor',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem elit amet laudantium, quaeillo inventore sed veritatis et quasi architecto beatae vitae dicta sunt explicabo eiusmod tempor incididunt ut labore which toil and pain can procure him some great pleasure.',
    },
]
const TestimonialStyled = EBStyled(CustomBox)(({ theme }) => ({
    padding: '50px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    position: 'relative',
    background: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
        padding: '40px',
    },
    [theme.breakpoints.down('xs')]: {
        padding: '30px',
    },
    '&:before': {
        content: '" "',
        position: 'absolute',
        top: '15%',
        bottom: '-15%',
        left: '5%',
        width: '100%',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        zIndex: -1,
        [theme.breakpoints.down('sm')]:{
            top: '7%',
            bottom: '-4%',
            left: '1.5%',
        },
        [theme.breakpoints.down('xs')]:{
            top: '9%',
            bottom: '-5%',
            left: '3%',
        },
        [theme.breakpoints.down('lxs')]:{
            top: '10%',
            bottom: '-4%',
            left: '4%',
        }
    },
    '> img': {
        position: 'absolute',
        right: 10,
        bottom: 10,
        maxWidth: 80,
        opacity: 0.8,
        [theme.breakpoints.down('sm')]: {
            top: 20,
            right: 20,
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: 60,
        }
    }
}))
const Testimonial = () => {
    return (
        <CustomTypography variant="section" component="section">
            <CustomContainer>
                <CustomGrid container>
                    <CustomGrid lxs={12}>
                        <Title title={'Testimonial'} subTitle={'Our Client Say!'} />
                    </CustomGrid>
                </CustomGrid>
                <CustomGrid container justifyContent={'center'}>
                    <CustomGrid md={9}>
                        <TestimonialStyled>
                            <CustomBox component='img' src={quotesImg} />
                            <Swiper
                                slidesPerView={1}
                                modules={[Autoplay]}
                                loop={true}
                                spaceBetween={20}
                                speed={1100}
                                autoplay={{
                                    delay: 5000,
                                }}
                            >
                                {TestimonialSliderData.map((data, index) => (
                                    <SwiperSlide key={index}>
                                        <TestimonialData {...data} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </TestimonialStyled>
                    </CustomGrid>
                </CustomGrid>
            </CustomContainer>
        </CustomTypography>
    )
}

export default Testimonial
