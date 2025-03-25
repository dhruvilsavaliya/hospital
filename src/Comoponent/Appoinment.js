import React from 'react'
import CustomContainer from '../Common/CustomContainer'
import CustomBox from '../Common/CustomBox'
import AppoinmentBg from '../Assets/svg/appointment_bg.svg'
import CustomForm from '../Common/CustomForm'
import CustomGrid from '../Common/CustomGrid'
import DoctorImg from '../Assets/png/Appoinment.png'
const TextFieldData = [
    {
        placeholder: 'Name',
        type: 'text',
    },
    {
        placeholder: 'Phone Number',
        type: 'number',
    },
    {
        placeholder: 'Medical Record Number',
        type: 'number',
    },
    {
        placeholder: 'Email',
        type: 'text',
    },
]
const SelectData = [
    {
        selectValue: 'Cardiology'
    },
    {
        selectValue: 'Urologic'
    },
    {
        selectValue: 'Neurology'
    },
    {
        selectValue: 'Medicine'
    },
    {
        selectValue: 'Surgery'
    },
    {
        selectValue: 'Urology'
    },
]
const Appoinment = () => {
    return (
        <CustomBox sx={{ backgroundImage: `url(${AppoinmentBg})`, backgroundAttachment: 'fixed' }}>
            <CustomContainer>
                <CustomGrid container justifyContent={'center'}>
                    <CustomGrid md={4} sm={5} lxs={8}>
                        <CustomBox component='img' src={DoctorImg} alt="doctor" sx={{
                            height: '100%',
                            width: "100%"
                        }} />
                    </CustomGrid>
                    <CustomGrid md={8} sm={7} lxs={12}>
                        <CustomForm TextFieldData={TextFieldData} title={'Application Form'} subTitle={'Free Consultation'} select={'Choose Select'} textAreaPlaceholder={'Message....'} textAreaName={'placeholder'} btnText={'submit'} SelectData={SelectData} condition={true} />
                    </CustomGrid>
                </CustomGrid>
            </CustomContainer>
        </CustomBox>
    )
}

export default Appoinment
