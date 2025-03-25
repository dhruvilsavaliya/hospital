import React from 'react'
import CustomBox from './CustomBox'
import CustomStack from './CustomStack'
import CustomTypography from './CustomTypography'
 
import theme from '../Theme'
import CustomAvatar from './CustomAvatar'
import EBStyled from './EBStyled'
const AuthorStyled = EBStyled(CustomBox)(({theme}) => ({
    flex: 1.2,
    textAlign: 'center',
    '& > .MuiTypography-h6':{
        marginTop:10,
        fontWeight:theme.typography.fontWeight[600],
        color:theme.palette.primary.main,
        [theme.breakpoints.down('sm')]:{
            fontSize: 16,
        },
        [theme.breakpoints.down('xs')]:{
            fontSize: 14,
        }
    },
    '& > .MuiTypography-subtitle2':{
        [theme.breakpoints.down('xs')]:{
            fontSize: 12,
        }
    }
}))
const TestimonialData = ({src, title, designation, text}) => {
    return (
        <CustomBox>
                <CustomStack
                    direction={{md:"row",lxs:'column'}}
                    spacing={{md:0,lxs:2}}
                    sx={{ alignItems: "center" }}
                >
                    <AuthorStyled>
                        <CustomAvatar
                            alt="Remy Sharp"
                            src={src}
                            sx={{ width: {md:100,lxs:80}, height: {md:100,lxs:80}, margin: 'auto' }}
                        />

                        <CustomTypography variant="h6" component="h4"> {title} </CustomTypography>
                        <CustomTypography variant="subtitle2"> {designation} </CustomTypography>
                    </AuthorStyled>
                    <CustomBox sx={{ flex: 3}}>
                        <CustomTypography variant="body1" sx={{
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 4,
                            overflow: 'hidden',
                            fontWeight:theme.typography.fontWeight[500],
                            color:theme.palette.grey[500],
                            [theme.breakpoints.down('sm')]:{
                                fontSize:14,
                            }
                        }}>{text}</CustomTypography>
                    </CustomBox>
                </CustomStack>
        </CustomBox>
    )
}

export default TestimonialData;
export {AuthorStyled}