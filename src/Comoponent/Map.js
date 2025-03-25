import React from 'react'
import CustomBox from '../Common/CustomBox'
import CustomContainer from '../Common/CustomContainer'
import CustomForm from '../Common/CustomForm'
import CustomGrid from '../Common/CustomGrid'
import theme from '../Theme'
import CustomTypography from '../Common/CustomTypography'
const textFieldData = [
    {
        placeholder: 'Name',
        type: 'text',
    },
    {
        placeholder: 'Phone Number',
        type: 'text',
    },
    {
        placeholder: 'Medical Record Number',
        type: 'text',
    },
    {
        placeholder: 'Email',
        type: 'text',
    },
]
const Map = () => {
    return (
        <>
            <CustomTypography component='section' variant='section' sx={{ paddingBottom: { md: 0 }, backgroundColor: theme.palette.primary[50], }}>
                <CustomContainer>
                    <CustomGrid container justifyContent={'center'} >
                        <CustomGrid md={8}>
                            <CustomBox sx={{ marginBottom: { md: '-80px', sm: 0 } }}>
                                <CustomForm title={'Have Any Questions'} subTitle={'Contact Us'} TextFieldData={textFieldData} textAreaPlaceholder={'Message'} btnText={'Submit Now'} />
                            </CustomBox>
                        </CustomGrid>
                    </CustomGrid>
                </CustomContainer>
            </CustomTypography>
            <CustomBox>
                <CustomBox sx={{ '& > iframe': { border: 'none', display: 'block' } }}>
                    <iframe title='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4948484.269135291!2d-7.604954947034948!3d52.72764339910763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d0a98a6c1ed5df%3A0xf4e19525332d8ea8!2sEngland%2C%20UK!5e0!3m2!1sen!2sin!4v1710215102617!5m2!1sen!2sin" width="100%" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </CustomBox>
            </CustomBox>
        </>
    )
}

export default Map
