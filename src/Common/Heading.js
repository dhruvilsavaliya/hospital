import React from 'react'
import CustomTypography from './CustomTypography'
import CustomButton from './CustomButton'
import CustomBox from './CustomBox'
import EBStyled from './EBStyled'
 
const SliderContent = EBStyled(CustomBox)(({ theme, condition }) => ({
    position: 'relative',
    zIndex: 1,
    '& > .MuiTypography-span': {
        fontSize: 11,
        color: theme.palette.primary.main,
        letterSpacing: '0.6px',
        marginBottom: '20px',
        display: 'inline-block',
        padding: '8px 12px',
        borderRadius: 20,
        textTransform: 'uppercase',
        backgroundColor: `${theme.palette.primary.light}`
    },
    '& > .MuiTypography-root.MuiTypography-h1': {
        fontSize: 46,
        fontWeight: 600,
        lineHeight: '56px',
        position: 'relative',
        marginBottom: 25,
        color: condition ? theme.palette.primary.light : theme.palette.secondary.dark,
        [theme.breakpoints.down('md')]: {
            fontSize: 40,
            lineHeight: '50px',
            marginBottom: 15,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 30,
            lineHeight: '45px',
            marginBottom: 8,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 22,
            lineHeight: '30px',
            marginBottom: 8,
        },
    },
    '& > .MuiTypography-root.MuiTypography-h4': {
        fontSize: 32,
        color: theme.palette.secondary.dark,
        fontWeight: 600,
        marginBottom: 22,
        [theme.breakpoints.down('sm')]: {
            fontSize: 28,
            lineHeight: '30px',
            marginBottom: 8,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 22,
            marginBottom: 8,
        },
    },
    '& > .MuiTypography-root.MuiTypography-body2': {
        marginBottom: '30px',
        letterSpacing: '0.6px',
        lineHeight: '1.83',
        color: condition ? theme.palette.primary.light : theme.palette.secondary.dark,
        [theme.breakpoints.down('md')]: {
            marginBottom: 20,
        },
    }
}))
const Heading = ({ condition, title, sliderHeading, sliderParagraph, btnText, sliderHeadColor, sliderParaColor, sliderHeadingSmall, mb }) => {
    return (
        <SliderContent condition={condition}>
            {
                title &&
                <CustomTypography variant='span'>{title}</CustomTypography>
            }
            {
                sliderHeading &&
                <CustomTypography component="h3" variant='h1' color={sliderHeadColor}>
                    {sliderHeading}
                </CustomTypography>
            }
            {
                sliderHeadingSmall &&
                <CustomTypography component="h4" variant='h4' color={sliderHeadColor}>
                    {sliderHeadingSmall}
                </CustomTypography>
            }
            {
                sliderParagraph &&
                <CustomTypography variant='body2' color={sliderParaColor} mb={mb}>{sliderParagraph}</CustomTypography>
            }
            {
                btnText &&
                <CustomButton variant={'contained'}>{btnText}</CustomButton>
            }
        </SliderContent>
    )
}

export default Heading
