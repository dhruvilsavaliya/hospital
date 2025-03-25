import { TextField } from '@mui/material'
import React from 'react'
import CustomBox from './CustomBox'
import CustomDatePicker from './CustomDatePicker'
import CustomStack from './CustomStack'
import CustomGrid from './CustomGrid'
import CustomButton from './CustomButton'
import CustomSelect from './CustomSelect'
import CustomTypography from './CustomTypography'
import CommonInput from './InputFields/CommonInput'
import EBStyled from './EBStyled'
const TextareaStyled = EBStyled(TextField)(({ theme }) => ({
    marginTop: '14px',
    borderRadius: 14,
    padding: '16.50px 14px',
    background: '#65b5ff21',
    border: 'none',
    display: 'block',
    '& > .MuiFilledInput-root': {
        display: 'block',
        backgroundColor: 'transparent',
        padding:0,
        '&:hover': {
            backgroundColor: 'transparent'
        },
        '&::before': {
            content: 'none',
        },
        '&::after': {
            content: 'none',
        },
    },
    '&:focus-visible': {
        outline: 'none',
    },
}))
const FormStyled = EBStyled(CustomBox)(({ theme, condition }) => ({
    position: 'relative',
    background: theme.palette.common.white,
    padding: '40px',
    boxShadow: '0 0px 50px rgba(0,0,0,.1)',
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: condition ? '-7%' : null,
    [theme.breakpoints.down('sm')]: {
        padding: 25
    },
    '& > .MuiTypography-h4': {
        fontSize: 30,
        marginBottom: 20,
        [theme.breakpoints.down('sm')]: {
            fontSize: 28,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 22,
        }
    }
}))
const CustomForm = ({ TextFieldData, title, subTitle, select, textAreaPlaceholder, btnText, SelectData, condition, inputProps }) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('Name'),
            email: data.get('Email'),
            phoneNumber: data.get('Phone Number'),
            placeholder: data.get('placeholder')
        })
    };
    return (
        <>
            <FormStyled
                condition={condition}
                component='form' noValidate onSubmit={handleSubmit}
            >
                <CustomTypography component='span' variant='span' fontWeight={500} color={'secondary.main'} mb={1} display={'block'}>{subTitle}</CustomTypography>
                <CustomTypography component="h4" variant="h4" fontWeight={600} color={'primary.main'} gutterBottom>{title}</CustomTypography>
                <CustomGrid container spacing={2}>
                    {TextFieldData.map((data, index) => (
                        <CustomGrid lxs={6} key={index}>
                            <CommonInput variant="outlined" type={data.type} placeholder={data.placeholder} name={data.placeholder} inputProps={data.inputProps} required />
                        </CustomGrid>
                    ))}
                </CustomGrid>
                {
                    select &&
                    <CustomStack
                        direction={'row'}
                        spacing={2}
                        marginTop={2}
                    >
                        <CustomDatePicker />
                        <CustomSelect select={select} SelectData={SelectData} />
                    </CustomStack>
                }
                {
                    textAreaPlaceholder &&
                    <CustomBox>
                        <TextareaStyled
                            multiline
                            rows={4}
                            variant="filled"
                        />
                    </CustomBox>
                }
                {
                    btnText &&
                    <CustomButton variant='contained' type='submit' sx={{ minWidth: 130, marginTop: '14px' }}>{btnText}</CustomButton>
                }
            </FormStyled>
        </>
    )
}

export default CustomForm
