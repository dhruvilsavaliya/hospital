import React from 'react'
import CustomBox from '../CustomBox'
import CommonInput from './CommonInput'
import CustomButton from '../CustomButton'
const CommonInputAndButton = ({ type, placeholder, btnText, condition, padding, conditionTwo }) => {
    return (
        <CustomBox
            sx={{
                width: '100%',
                position: 'relative'
            }}>
            <CommonInput variant="outlined" type={type} placeholder={placeholder} condition={condition} conditionTwo={true} />
            {
                btnText &&
                <CustomButton mt={5} variant={'contained'} type='submit'
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        right: 3,
                        padding: padding || '10px 30px',
                        lineHeight:{xs:1.75,lxs:1.4}
                }}>
                    {btnText}
                </CustomButton>
            }
        </CustomBox>
    )
}

export default CommonInputAndButton
