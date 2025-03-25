import React from 'react'
import CustomTypography from '../Common/CustomTypography'
import CustomContainer from '../Common/CustomContainer'
import CustomGrid from '../Common/CustomGrid'
import CustomBox from '../Common/CustomBox'
import doctor1 from '../Assets/jpg/team_img1.jpeg'
import Heading from '../Common/Heading'
import CustomProgressBar from '../Common/CustomProgressBar'
 
import SingleDoctorCard from '../Common/SingleDoctorCard'
import CustomList from '../Common/CustomList'
import CustomListItem from '../Common/CustomListItem'
import CustomLink from '../Common/CustomLink'
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import UseIcon from '../Assets/png/user.png'
import TollIcon from '@mui/icons-material/Toll';
import CustomForm from '../Common/CustomForm'
import Social from '../Common/Social'
import EBStyled from '../Common/EBStyled'
const ProgressBarData = [
    {
        text: "Medic Success",
        value: 80,
    },
    {
        text: "Dental & Medical Services",
        value: 75,
    },
    {
        text: "Health Success",
        value: 85,
    },
]
const ProgressWrapperStyled = EBStyled(CustomBox)(({ theme }) => ({
    background: 'linear-gradient(220deg, rgb(51 104 198 / 15%), transparent 30%)',
    boxShadow: '3px 3px 6px 0px rgba(227, 227, 227, 0.8)',
    padding: 30,
    marginTop: 30,
    [theme.breakpoints.down('sm')]: {
        padding: 20,
    },
    '& > .MuiTypography-h5': {
        fontWeight: 600,
        color: theme.palette.primary.main,
        marginBottom: 10,
    },
    '& > .MuiTypography-body2': {
        color: theme.palette.primary.dark,
        lineHeight: 1.83,
        marginBottom: 14,
        letterSpacing: 0.6,
    }
}))
const ListItemData = [
    {
        icon: <CallIcon />,
        linkText: '+453-5684 1952',
    },
    {
        icon: <MailOutlineIcon />,
        linkText: 'info@gmai.com',
    },
    {
        icon: <LocationOnIcon />,
        text: ' 12546 LK Road, United States',
    },
]
const PersonalInfoWrapperStyled = EBStyled(CustomBox)(({ theme }) => ({
    background: 'linear-gradient(340deg, rgb(51 104 198 / 20%), transparent 50%)',
    position: 'relative',
    padding: 30,
    [theme.breakpoints.down('sm')]:{
        padding:20,
    },
    // boxShadow: '5px 2px 4px 0px rgba(227, 227, 227, 0.7)',
    '& > img': {
        maxWidth: '100%',
        top: 0,
        right: 0,
        position: 'absolute',
        opacity: 0.1,
        zIndex: -1,
    },
    '& > .MuiTypography-h6': {
        color: theme.palette.primary.main,
        fontWeight: 500,
        marginBottom: 8,
    },
    '& > .MuiList-root': {
        padding: 0,
        marginBottom: 15,
        '& > .MuiListItem-root': {
            paddingLeft: 0,
            paddingRight: 0,
            '& > .MuiTypography-body2': {
                fontSize: 16,
                color: theme.palette.primary.dark,
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                [theme.breakpoints.down('sm')]:{
                    fontSize:14,
                },
                '& > .MuiTypography-a': {
                    height: 38,
                    width: 38,
                    textAlign: 'center',
                    lineHeight: '38px',
                    backgroundColor: theme.palette.grey[100],
                    color: theme.palette.primary.main,
                    marginRight: 12,
                    borderRadius: '50%',
                    transition: 'all .2s ease-in-out',
                    "&:hover": {
                        color: theme.palette.grey[100],
                        backgroundColor: theme.palette.primary.main,
                    },
                    '& > svg': {
                        verticalAlign: 'middle',
                        fontSize: 20,
                    },
                },
                '& > .MuiLink-root': {
                    color: theme.palette.primary.dark,
                    textDecoration: 'none',
                    transition: 'all .3s ease-in-out',
                    '&:hover': {
                        color: theme.palette.primary.main
                    }
                }
            }
        }
    }
}))
const ContentStyled = EBStyled(CustomBox)(({ theme }) => ({
    marginTop: 50,
    '& > .MuiTypography-h6': {
        fontSize: 22,
    },
    '& > .MuiTypography-body2': {
        color: theme.palette.secondary.dark,
        letterSpacing: '0.6px',
        lineHeight: '1.83'
    },
    '& > .MuiList-root': {
        padding: 0,
        '& > .MuiListItem-root': {
            paddingLeft: 0,
            paddingRight: 0,
            flexWrap:'wrap',
            '& > svg': {
                fontSize: 16,
                color: theme.palette.secondary,
                marginRight: 12,
                [theme.breakpoints.down('xs')]:{
                    marginRight:8 ,
                },
            },
            '& > .MuiTypography-body1': {
                fontWeight: 600,
                color: theme.palette.primary.main,
                [theme.breakpoints.down('xs')]:{
                    fontSize:14,
                }
            },
            '& > .MuiTypography-body2': {
                color: theme.palette.grey[600],
                marginLeft: 10,
                [theme.breakpoints.down('xs')]:{
                    fontSize:12,
                    marginLeft: 20 ,
                },
            },
        }
    }
}))
const EducationItemData = [
    {
        icon: <TollIcon />,
        text: 'Medical College Of California',
        subtitle: '(Doctor of Medicine 2005)'
    },
    {
        icon: <TollIcon />,
        text: 'Medical College Of California',
        subtitle: '(Doctor of Medicine 2005)'
    },
    {
        icon: <TollIcon />,
        text: 'Medical College Of California',
        subtitle: '(Doctor of Medicine 2005)'
    },
]
const TextFieldData = [
    {
        placeholder: 'Name',
        type: 'text',
    },
    {
        placeholder: 'Email',
        type: 'text',
    },
    {
        placeholder: 'Phone',
        type: 'number',
    },
    {
        placeholder: 'subject',
        type: 'text',
    }
]
const DoctorDetailSingle = () => {
    return (
        <CustomTypography component='section' variant='section'>
            <CustomContainer>
                <CustomGrid container columnSpacing={4.5} justifyContent={'center'}>
                    <CustomGrid md={4} sm={5} xs={12} lxs={12}>
                        <CustomBox sx={{ position: 'sticky', top: 110 }}>
                            <CustomBox sx={{ textAlign: 'center' }}>
                                <SingleDoctorCard src={doctor1} alt={'doctor'} title={"Dr. John Muniz"} subTitle={'Restorative Dentist'} text={'Our team of skilled doctors, nurses, and specialists bring years of experience and expertise to ensure you receive.'} boxShadow={true} />
                            </CustomBox>
                            <CustomBox sx={{ padding: '0 4px' }}>
                                <PersonalInfoWrapperStyled>
                                    <CustomBox component='img' src={UseIcon} />
                                    <CustomTypography variant="h6" component='h4'>Personal Info</CustomTypography>
                                    <CustomList>
                                        {ListItemData.map((data, index) => (
                                            <CustomListItem key={index}>
                                                <CustomTypography component='p' variant='body2'>
                                                    <CustomTypography component='a' variant='a' href='#'>
                                                        {data.icon}
                                                    </CustomTypography>
                                                    {
                                                        data.linkText &&
                                                        <CustomLink href="#">{data.linkText}</CustomLink>
                                                    }
                                                    {data.text}
                                                </CustomTypography>
                                            </CustomListItem>
                                        ))}
                                    </CustomList>
                                    <Social flexDirection={'row'} condition={true} sizeCondicition={true} margin={'0 10px 0 0'} boxShadow={'0px 10px 20px rgba(2,29,53,0.1)'} />
                                </PersonalInfoWrapperStyled>
                            </CustomBox>
                        </CustomBox>
                    </CustomGrid>
                    <CustomGrid md={7.5} sm={6} lxs={12}>
                        <ContentStyled sx={{ marginTop: { md: 0, sm: 10 } }}>
                            <Heading title={'About Us'} sliderHeadingSmall={'Find The Right Doctor Righ At Your Fingertips'} sliderParagraph={'There are many variations of passages of Lorem Ipsum Fasts There are many variations of passages of Lorem Ipsum Fastsby we are the fast to mane injected humour,by injected humour, or randomised coved ceilings.'} />
                            <ProgressWrapperStyled>
                                <CustomTypography variant='h5' component='h2'>Areas Of Skill</CustomTypography>
                                <CustomTypography variant='body2' component='p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer and scrambled specimen book.</CustomTypography>
                                <CustomBox sx={{ padding: { md: '12px 30px', lxs: '12px 20px' } }}>
                                    {ProgressBarData.map((data, index) => (
                                        <CustomProgressBar key={index} {...data} />
                                    ))}
                                </CustomBox>
                            </ProgressWrapperStyled>
                        </ContentStyled>
                        <ContentStyled>
                            <Heading sliderHeadingSmall={'Co Founder & Ceo'} sliderParagraph={'There are many variations of passages of Lorem Ipsum Fasts There are many variations of passages of Lorem Ipsum Fastsby we are the fast.'} />
                            <CustomList>
                                {EducationItemData.map((data, index) => (
                                    <CustomListItem key={index}>
                                        {data.icon}
                                        <CustomTypography variant='body1' component='p'>
                                            {data.text}
                                        </CustomTypography>
                                        <CustomTypography variant='body2' component='p'>
                                            {data.subtitle}
                                        </CustomTypography>
                                    </CustomListItem>
                                ))}
                            </CustomList>
                        </ContentStyled>
                        <CustomBox marginTop={6.3}>
                            <CustomForm TextFieldData={TextFieldData} title={'Application Form'} subTitle={'Free Consultation'} textAreaPlaceholder={'Message....'} textAreaName={'placeholder'} btnText={'submit'} condition={false}/>
                        </CustomBox>
                    </CustomGrid>
                </CustomGrid>
            </CustomContainer>
        </CustomTypography>
    )
}

export default DoctorDetailSingle
