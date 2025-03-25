import React from 'react' 
import injectionImg from '../Assets/jpg/service/Injection.webp'
import CustomTypography from '../Common/CustomTypography'
import Video from '../Common/Video'
import CustomContainer from '../Common/CustomContainer'
import CustomGrid from '../Common/CustomGrid'
import CustomStack from '../Common/CustomStack'
import Heading from '../Common/Heading'
import CustomBox from '../Common/CustomBox'
import EBStyled from '../Common/EBStyled'
const SerivceVideoStyled = EBStyled(CustomTypography)(({ theme }) => ({
    background: `url(${injectionImg}) ,no-repeat`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    position:'relative',
    '&:before':{
        content:'" "' ,
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgb(3 27 78 / 40%)',
    }
}))
const VideoContentStyled = EBStyled(CustomBox)(({theme}) =>({
    '& > .MuiTypography-h4':{
        fontWeight: 600,
        color:theme.palette.primary.light,
        [theme.breakpoints.down('sm')]:{
            fontSize:30,
            textAlign:'center',
        },
        [theme.breakpoints.down('xs')]:{
            fontSize: 28,
        },
        [theme.breakpoints.down('mxs')]:{
            fontSize: 24,
        }
    },
    '& > .MuiTypography-body1':{
        marginTop:10,
        color:theme.palette.primary.light,
        [theme.breakpoints.down('sm')]:{
            textAlign:'center',
        },
        [theme.breakpoints.down('xs')]:{
            fontSize:14,
        },
    },
}))
const SerivceVideo = () => {
    return (
        <SerivceVideoStyled variant="section" component="section">
            <CustomContainer>
                <CustomGrid container justifyContent={{md:"space-between",lxs:'center'}} alignItems={'center'}>
                    <CustomGrid md={6}>
                        <Heading title={'Custious RESULTS'} sliderHeading='We Provide The Highest Level Of Care And Services' sliderParagraph={'Lorem ipsum dolor amet consectetur adipisicing elit. consequuntur incidunt accusamus adipisci officia libero laboriosam!'} condition={true} btnText={'Contact Now'}/>
                    </CustomGrid>
                    <CustomGrid md={5} mt={5}>
                        <CustomStack 
                            sx={{position:'relative',zIndex:1,alignItems:'center'}}
                            direction={{sm:'row',mxs:'column'}}
                            justifyContent={'center'}
                            spacing={6}
                            >
                            <Video src={'https://www.youtube.com/embed/lTGHf69T4l8'} condition={true}/>
                            <VideoContentStyled>
                                <CustomTypography variant='h4' component='h3'>Our Experts Video</CustomTypography>
                                <CustomTypography variant='body1'>Health care is an essential category that encompasses range </CustomTypography>
                            </VideoContentStyled>
                        </CustomStack>
                    </CustomGrid>
                </CustomGrid>
            </CustomContainer>
            
        </SerivceVideoStyled>
    )
}

export default SerivceVideo
