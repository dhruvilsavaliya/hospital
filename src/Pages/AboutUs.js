import React from 'react'
import CustomBreadcrumb from '../Common/CustomBreadcrumb'
import BreadcrumbBg from '../Assets/png/BreadcrumbAboutBg.jpeg'
import CustomContainer from '../Common/CustomContainer'
import CustomBox from '../Common/CustomBox'
import CustomTypography from '../Common/CustomTypography'
import CustomGrid from '../Common/CustomGrid'
import Heading from '../Common/Heading'
import aboutsUs01 from '../Assets/jpg/aboutUs/aboutUs1.jpeg'
import aboutsUs02 from '../Assets/jpg/aboutUs/aboutus2.jpeg'
import CustomList from '../Common/CustomList'
import CustomListItem from '../Common/CustomListItem'
import DoneIcon from '@mui/icons-material/Done';
import CounterUp from '../Comoponent/CounterUp'
import SpecialDoctor from '../Common/SpecialDoctor'
import Testimonial from '../Comoponent/Testimonial'
import EBStyled from '../Common/EBStyled'
const SecondImageStyled = EBStyled(CustomBox)(({theme}) => ({
    position:'absolute',
    bottom: '-25%',
    left: '-10%',
    padding:10,
    backgroundColor:theme.palette.common.white,
    boxShadow:'0 10px 60px rgba(0,0,0,.1)',
    '& > img':{
        maxWidth:220,
    },
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}))
const CardStyled = EBStyled(CustomBox)(({theme}) => ({
    position:'absolute',
    right: '-16px',
    bottom: '-18%',
    maxWidth:100,
    padding:'25px 30px',
    textAlign:'center',
    background: 'rgba(3,13,45,0.2)',
    backdropFilter:'blur(6.5px)',
    borderBottom:`5px solid ${theme.palette.primary.main}`,
    borderRight:`5px solid ${theme.palette.primary.main}`,
    boxShadow: '2px 2px 11px 0px rgba(0,0,0,0.22)',
    [theme.breakpoints.down('md')]:{
        right: '-16px',
        bottom: '-6%',
    },
    [theme.breakpoints.down('sm')]:{
        right: '-10px',
        padding:'20px 25px',
    },
    [theme.breakpoints.down('xs')]:{
        padding:'14px 20px',
    },
    '& > .MuiTypography-h2':{
        color:theme.palette.common.white,
        fontWeight:theme.typography.fontWeight[600],
        textShadow:`3px 0px ${theme.palette.primary.main}`,
        [theme.breakpoints.down('sm')]:{
            fontSize:50,
        },
        [theme.breakpoints.down('xs')]:{
            fontSize:35,
        },
    },
    '& > .MuiTypography-body1':{
        color:theme.palette.common.white,
        fontWeight:theme.typography.fontWeight[600],
        lineHeight:'25px',
        fontSize:20,
        [theme.breakpoints.down('sm')]:{
            fontSize:18,
            lineHeight:'20px',
        },
        [theme.breakpoints.down('xs')]:{
            fontSize:16,
        },
        [theme.breakpoints.down('lxs')]:{
            fontSize:14,
        },
    }
}))
const ListStyled = EBStyled(CustomList)(({theme}) => ({
    padding:0,
    '& > .MuiListItem-root':{
        fontWeight:500,
        paddingLeft:0,
        paddingRight:0,
        [theme.breakpoints.down('sm')]:{
            fontSize:14,
            padding: '5px 0',
        },
        '& > svg' : {
            marginRight:15,
            fill:theme.palette.primary.main,
            [theme.breakpoints.down('sm')]:{
                marginRight: 12,
                fontSize:18,
            },
        }
    }
}))
const ListItemData = [
    {
        icon: <DoneIcon />,
        item:'We are able to offer the most test',
    },
    {
        icon: <DoneIcon />,
        item:'Full Documentation ipsum dolor sit',
    },
    {
        icon: <DoneIcon />,
        item:'Amazing Features many variations',
    },
    {
        icon: <DoneIcon />,
        item:'Wellness starts with us',
    },
]
const AboutUs = () => {
    return (
        <>
            <CustomBreadcrumb pageTitle={'about us'} backgroundImage={BreadcrumbBg} />
            <CustomTypography component="section" variant="section" sx={{paddingBottom: '160px'}}>
                <CustomContainer>
                    <CustomGrid container columnSpacing={4} alignItems={'center'}>
                        <CustomGrid md={7}>
                            <CustomBox position={'relative'}>
                                <CustomBox component="img" src={aboutsUs01} sx={{height:'100%',width:'100%'}} />
                                <SecondImageStyled>
                                    <CustomBox component="img" src={aboutsUs02} />
                                </SecondImageStyled>
                                <CardStyled>
                                    <CustomTypography component="h5" variant="h2">10</CustomTypography>
                                    <CustomTypography variant="body1">Years of exprience</CustomTypography>
                                </CardStyled>
                            </CustomBox>
                        </CustomGrid>
                        <CustomGrid md={5} mt={{mxs:3, lxs:4, md:6, lg:0 }}>
                            <Heading title="About us" sliderHeadingSmall={'Every Day Here We Take Care Of Your Oral Healthcare!'} sliderParagraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur quibusdam enim expedita sed nesciunt."}/>
                            <CustomBox>
                                <ListStyled>
                                    {ListItemData.map((data,index) => (
                                        <CustomListItem key={index}>
                                            {data.icon}
                                            {data.item}    
                                        </CustomListItem>
                                    ))}
                                </ListStyled>
                            </CustomBox>
                        </CustomGrid>
                    </CustomGrid>
                </CustomContainer>
            </CustomTypography>
            <CounterUp />
            <SpecialDoctor />    
            <Testimonial />
        </>
    )
}

export default AboutUs
