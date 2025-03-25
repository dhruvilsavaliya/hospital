import React from 'react'
import CustomTypography from './CustomTypography'
import CustomButton from './CustomButton'
import CustomBox from './CustomBox'
import EBStyled from './EBStyled'
 
const SliderContent = EBStyled(CustomBox)(({ theme }) => ({
    '& > .MuiTypography-span' : {
        fontSize:11,
        color:theme.palette.secondary.main,
        letterSpacing: '0.6px',
        marginBottom:'20px',
        display: 'inline-block',
        padding:'8px 12px',
        borderRadius:20,
        textTransform:'uppercase',
        backgroundColor:`${theme.palette.primary.light}`
    },
    '& > .MuiTypography-h1': {
        fontSize: 46,
        fontWeight: 600,
        lineHeight: '56px',
        position:'relative',
        marginBottom:25,
        "&:before" :{
            content: "''",
            position:'absolute',

        }
    },
    '& > .MuiTypography-body2': {
        color: theme.palette.primary.light,
        marginBottom: '30px',
        letterSpacing: '0.6px'
    }
}))
const CommonHeading = ({title, sliderHeading,sliderParagraph,btnText, sliderHeadColor, sliderParaColor}) => {
    return (
        <SliderContent>
            <CustomTypography variant='span'>
                {title}
            </CustomTypography>
            <CustomTypography variant='h1' color={sliderHeadColor}>
                {sliderHeading}
                {/* <CustomTypography variant='span'>
                    {emoji}
                </CustomTypography> */}
            </CustomTypography>
            <CustomTypography variant='body2' color={sliderParaColor}>{sliderParagraph}</CustomTypography>
            <CustomButton variant={'contained'}>{btnText}</CustomButton>
        </SliderContent>
    )
}

export default CommonHeading
