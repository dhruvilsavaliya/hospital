import React from 'react'
import CustomBox from './CustomBox'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination';
import 'swiper/css';
import Slider1 from '../Assets/png/slider-01.png'
import Slider2 from '../Assets/png/slider-02.png'
import Slider3 from '../Assets/png/slider-03.png'
import Slider4 from '../Assets/png/slider-04.png'
import Slider5 from '../Assets/png/slider-05.png'
import SliderShape from '../Assets/png/slider-1-shape-1.png'
import BannerSlider from './BannerSlider';
import CustomTypography from './CustomTypography';
import EBStyled from './EBStyled';  

const BannerSliderData = [
    {
        images: Slider1,
        title: 'The Future off healthcare',
        sliderHeading: 'Your Community Hospital Providing Generations of Caring',
        src: SliderShape,
        alt: 'shape',
        sliderParagraph: "Lorem ipsum dolor sit amet,ad vix fuisset assention vim dicit lobortis molestiae no, maiorum postulant has ex. Has dicam singulis.",
        btnText: 'Make appopinment'
    },
    {
        images: Slider2,
        title: 'Tradition.Quality.Progress',
        sliderHeading: ' Uncompromising excellence. Commitment to care.',
        src: SliderShape,
        alt: 'shape',
        sliderParagraph: 'Lorem ipsum dolor sit amet,ad vix fuisset assention vim dicit lobortis molestiae no, maiorum postulant has ex. Has dicam singulis.',
        btnText: 'Make appopinment'
    },
    {
        images: Slider3,
        title: 'Quality care made easy',
        sliderHeading: 'World class care right where you need it ',
        src: SliderShape,
        alt: 'shape',
        sliderParagraph: 'Lorem ipsum dolor sit amet,ad vix fuisset assention vim dicit lobortis molestiae no, maiorum postulant has ex. Has dicam singulis.',
        btnText: 'Make appopinment'
    },
    {
        images: Slider4,
        title: 'Paractice positive energy',
        sliderHeading: 'Where there is healing, there is hope.',
        src: SliderShape,
        alt: 'shape',
        sliderParagraph: 'Lorem ipsum dolor sit amet,ad vix fuisset assention vim dicit lobortis molestiae no, maiorum postulant has ex. Has dicam singulis.',
        btnText: 'Make appopinment'
    },
    {
        images: Slider5,
        title: 'We are Beyound medicine',
        sliderHeading: 'Nothing is more important than wellness.',
        src: SliderShape,
        alt: 'shape',
        sliderParagraph: 'Lorem ipsum dolor sit amet,ad vix fuisset assention vim dicit lobortis molestiae no, maiorum postulant has ex. Has dicam singulis.',
        btnText: 'Make appopinment'
    },
    {
        images: Slider2,
        title: 'The perfect Balance between',
        sliderHeading: 'Uncompromising excellence. Commitment to care.',
        src: SliderShape,
        alt: 'shape',
        sliderParagraph: 'Lorem ipsum dolor sit amet,ad vix fuisset assention vim dicit lobortis molestiae no, maiorum postulant has ex. Has dicam singulis.',
        btnText: 'Make appopinment'
    },
]
const BannerWrapperStyled = EBStyled(CustomTypography)(({ theme }) => ({
    ' .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal': {
        bottom: '35px',
        '.swiper-pagination-bullet':{
            height: 5,
            width: 15,
            borderRadius:2,
            background: theme.palette.primary.light,
            transition:'all .3s ease-in-out',
            opacity: 0.6,
        },
        '.swiper-pagination-bullet-active':{
            width: '40px ',
            background: theme.palette.primary.main,
            opacity: 1,
        }
    },
}))
const BannerSliderImage = () => {
    return (
        <BannerWrapperStyled component="section" variant="section" sx={{ padding: {lxs:0} }}>
            <Swiper
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                speed={1100}
                autoplay={{
                    delay: 5000,
                }}
            >
                <CustomBox>
                    {BannerSliderData.map((data, index) => (
                        <SwiperSlide key={index}>
                            <BannerSlider {...data} />
                        </SwiperSlide>
                    ))}
                </CustomBox>
            </Swiper>
        </BannerWrapperStyled>
    )
}

export default BannerSliderImage
