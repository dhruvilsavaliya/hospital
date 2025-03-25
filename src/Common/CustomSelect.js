import React from 'react'
import NativeSelect from '@mui/material/NativeSelect';
import CustomBox from './CustomBox';
import EBStyled from './EBStyled'; 

const SelectStyled = EBStyled(CustomBox)(({ theme }) => ({
    '& > .MuiInput-root': {
        width: '100%',
        borderRadius: '14px',
        background: '#65b5ff21',
        '&:before': {
            borderBottom: 'none'
        },
        '&:after': {
            borderBottom: 'none'
        },
        "&:hover": {
            '&:before': {
                borderBottom: 'none !important'
            },
        },
        '& > .MuiInput-input': {
            fontSize: 14,
            padding: '16.5px 14px',
            '&:focus': {
                background: 'none',
            },
            [theme.breakpoints.down('xs')]: {
                padding: 10,
            }
        }
    }
}))
const CustomSelect = ({ select, SelectData }) => {
    return (
        <SelectStyled sx={{ width: '100%' }}>
            <NativeSelect>
                <option value={null} style={{ color: "common.white" }}>{select}</option>
                {SelectData.map((data, index) => (
                    <option key={index} value={data.selectValue}>
                        {data.selectValue}
                    </option>
                ))}
            </NativeSelect>
        </SelectStyled>
    )
}

export default CustomSelect
