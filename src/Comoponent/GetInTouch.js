import React from 'react'
import CustomTypography from '../Common/CustomTypography'
import CustomContainer from '../Common/CustomContainer'
import CustomGrid from '../Common/CustomGrid'
import ElementorWidget from '../Common/ElementorWidget'
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email'
import theme from '../Theme'
import Title from '../Common/Title'

const ElementorWidgetData = [
    {
        btnTextColor: theme.palette.primary.main,
        backgroundButton: theme.palette.primary[200],
        background: theme.palette.primary.main,
        icon: <CallIcon />,
        title: 'Quick Contact',
        subtitle: '(+233)456-789-01'
    },
    {
        btnTextColor: theme.palette.primary.main,
        backgroundButton: theme.palette.primary[200],
        background: theme.palette.primary.main,
        icon: <EmailIcon />,
        title: 'Email Address',
        subtitle: 'info@example.com'
    },
    {
        btnTextColor: theme.palette.primary.main,
        backgroundButton: theme.palette.primary[200],
        background: theme.palette.primary.main,
        backgroundSize: 'cover',
        icon: <LocationOnIcon />,
        title: 'Our Location',
        subtitle: '14/4, Bonosri, United States.'
    },
]
const GetInTouch = () => {
    return (
        <CustomContainer>
            <CustomTypography variant="section" component="section">
                <Title title='Get In Touch' descripiotion={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'} />
                <CustomGrid container>
                    {ElementorWidgetData.map((data, index) => (
                        <CustomGrid md={4} sm={6} mxs={12} lxs={12} key={index} mb={2} sx={{ padding: '0 12px' }}>
                            <ElementorWidget {...data} TitleFontSize={'20px'} condition={true} conditionTwo={false} textAlign={'center'} overflow={true} before={false} padding={'30px 35px 35px'} borderRadius={true}/>
                        </CustomGrid>
                    ))}
                </CustomGrid>
            </CustomTypography>
        </CustomContainer>
    )
}

export default GetInTouch
