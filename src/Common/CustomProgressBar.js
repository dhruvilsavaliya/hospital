import React from 'react'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
  
import CustomTypography from './CustomTypography';
import CustomBox from './CustomBox';
import EBStyled from './EBStyled';

const BorderLinearProgress = EBStyled(LinearProgress)(({ theme }) => ({
    height: 5,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.main : '#308fe8',
    },
}));
const ProgressBarStyled = EBStyled(CustomBox)(({theme}) => ({
    marginBottom: 20,
    '& > .MuiTypography-h5 ':{
        fontSize: 14,
        textTransform:'uppercase',
        fontWeight:600,
        color:theme.palette.primary.dark,
        marginBottom:8,
        [theme.breakpoints.down('sm')]:{
            fontSize:12,
        }
    }
}))
const CustomProgressBar = ({ text,value }) => {
    return (
        <ProgressBarStyled>
            <CustomTypography variant='h5' component='h4'>{text}</CustomTypography>
            <BorderLinearProgress variant="determinate" value={value} />
        </ProgressBarStyled>
    )
}

export default CustomProgressBar