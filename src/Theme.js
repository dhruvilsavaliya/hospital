import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#3368c6',
            light: '#F5F8F9',
            dark: '#626262',
            50: '#e9f1ff',
            200: '#96bcff'
        },
        secondary: {
            main: '#031b4e',
            light: '#FFFFFF33',
            dark: '#111111',
            200: '#031b4ea8'
        }
    },
    breakpoints: {
        values: {
            lxs: 0,
            mxs: 320,
            xs: 480,
            sm: 768,
            md: 960,
            lg: 1024,
            xl: 1920
        }
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                maxWidthLg: {
                    '@media(min-width:1280px)': {
                        maxWidth: 1140,
                    }
                }
            },
        },
        MuiBox: {
            styleOverrides: {
                root: {
                    '& > img': {
                        height: 'auto',
                        maxWidth: '100%',
                        verticalAlign: 'middle',
                    }
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none'
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: "'Montserrat', sans-serif",
                },
                section: {
                    padding: '100px 0',
                    '@media screen and (max-width:992px)': {
                        padding: '80px 0'
                    },
                    '@media screen and (max-width:767px)': {
                        padding: '60px 0'
                    },
                    '@media screen and (max-width:567px)': {
                        padding: '40px 0'
                    },
                },
            },
        },
    },
    typography: {
        fontFamily: [
            "'Montserrat'",
            'sans-serif',
        ].join(','),
        fontWeight: {
            400: '400',
            500: '500',
            600: '600',
            700: '700',
            800: '800',
        }
    },
    transitions: {
        create: () => 'all .3s ease-in-out',
        another: () => 'all .5s ease-in-out'
    }
})
export default theme