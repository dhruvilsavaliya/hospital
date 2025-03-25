import React from 'react'
import CustomContainer from '../Common/CustomContainer'
import CustomGrid from '../Common/CustomGrid'
import Heading from '../Common/Heading'
import ExpertBg from '../Assets/svg/Expeert-Bg.svg'
import DoctorSlider from '../Common/DoctorSlider'
import CustomTypography from '../Common/CustomTypography'
const Doctors = () => {
    return (
        <>
            <CustomTypography component='section' variant='section' sx={{backgroundImage: `url(${ExpertBg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <CustomContainer FullWidth={true}>
                    <CustomGrid container alignItems={'center'} justifyContent={'space-between'}>
                        <CustomGrid md={3} sm={5} lxs={12}>
                            <Heading title={'Doctors'} sliderHeading={'We Think Differently.'} sliderParagraph={'The human body is exceedingly versatile, which implies that the human body can shockingly be proficiently wasteful'} />
                        </CustomGrid>
                        <CustomGrid md={8} sm={7} lxs={12}>
                            <DoctorSlider />
                        </CustomGrid>
                    </CustomGrid>
                </CustomContainer>
            </CustomTypography>
        </>
    )
}

export default Doctors
