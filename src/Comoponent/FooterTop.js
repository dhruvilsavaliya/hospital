import React from 'react' 
import CustomStack from '../Common/CustomStack'
import FooterTopBg from '../Assets/png/footer-top-bg.webp'
import CustomBox from '../Common/CustomBox'
import Logo from '../Common/Logo'
import CommonInputAndButton from '../Common/InputFields/CommonInputAndButton'
import EBStyled from '../Common/EBStyled'
const FooterTopWrapper = EBStyled(CustomBox)(({ theme }) => ({
    backgroundImage: `url(${FooterTopBg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: '50px 40px',
    borderRadius: 10,
    marginBottom: 50,
    [theme.breakpoints.down('sm')]: {
        padding: '40px 30px',
        marginBottom: 40,
    },
    [theme.breakpoints.down('xs')]: {
        padding: '20px 30px ',
        marginBottom: 30,
    },
    '& > .MuiStack-root': {
        maxWidth: 850,
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            maxWidth: 420,
        },
        '& > a': {
            '& > img': {
                maxWidth: '230px',
                [theme.breakpoints.down('sm')]: {
                    maxWidth: '200px',
                },
                [theme.breakpoints.down('xs')]: {
                    maxWidth: '180px',
                }
            }
        }
    }
}))
const FooterTop = () => {
    return (
        <FooterTopWrapper>
            <CustomStack
                sx={{
                    alignItems: 'center',
                }}
                direction={{ md: 'row', lxs: 'column' }}
                spacing={{ md: 8, lxs: 2 }}
            >
                <Logo />
                <CommonInputAndButton type={'search'} placeholder={'Email Address'} btnText={'Subscribe'} condition={true} conditionTwo={false} />
            </CustomStack>
        </FooterTopWrapper>
    )
}

export default FooterTop
