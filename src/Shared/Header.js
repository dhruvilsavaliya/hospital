import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CustomContainer from "../Common/CustomContainer";
import CustomBox from "../Common/CustomBox";
import { TextField } from "@mui/material";
import CustomButton from "../Common/CustomButton";
import SearchIcon from "@mui/icons-material/Search";
import CustomStack from "../Common/CustomStack";
import HeaderMenu from "../Common/HeaderMenu";
import Logo from "../Common/Logo";
import CloseIcon from "@mui/icons-material/Close";
import EBStyled from "../Common/EBStyled";
const StyledAppBar = EBStyled(AppBar)(({ theme, scrolled }) => ({
  backgroundColor: theme.palette.common.white,
  boxShadow: scrolled ? "" : "none",
  position: scrolled ? null : "relative",
  top: scrolled ? 0 : "unset",
  left: 0,
  animation: scrolled ? "smoothScroll .8s forwards" : "none",
  "@keyframes smoothScroll": {
    "0%": {
      transform: "translateY(-100px)",
    },
    "100%": {
      transform: "translateY(0px)",
    },
  },
}));
const SearchWrapStyled = EBStyled(CustomBox)(({ theme, isSearchBarOpen }) => ({
  position: "fixed",
  left: `${isSearchBarOpen ? "0" : "-100%"}`,
  right: `${isSearchBarOpen ? 0 : null}`,
  top: 0,
  display: "flex",
  alignItems: "center",
  maxWidth: 800,
  margin: "0 auto",
  zIndex: "10000",
  height: "100vh",
  transition: "all .5s ease-in-out",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
    margin: "0 30px",
  },
  "& > form": {
    width: "100%",
    "& > .MuiTextField-root": {
      width: "100%",
    },
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.common.white,
  },
  "& .MuiInputBase-input": {
    color: theme.palette.common.white,
  },
  "& .MuiInputBase-root": {
    "&:before": {
      borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
  },
}));
const OverlayStyled = EBStyled(CustomBox)(
  ({ theme, isSearchBarOpen, isdraweropen }) => ({
    backgroundColor: "rgba(3,13,45,0.8)",
    backdropFilter: "blur(6.5px)",
    height: "100vh",
    width: "100%",
    position: "fixed",
    top: 0,
    zIndex: 1,
    transition: "all 0.5s ease-in-out ",
    left: `${isSearchBarOpen ? "0" : "-100%"}`,
    [theme.breakpoints.down("md")]: {
      left: isdraweropen || isSearchBarOpen ? "0" : "-100%",
    },
  })
);
const CloseButtonStyled = EBStyled(IconButton)(() => ({
  position: "absolute",
  right: 0,
  top: "10%",
}));
const pages = [
  {
    link: "/",
    page: "Home",
  },
  {
    link: "/about",
    page: "About",
  },
  {
    link: "/services",
    page: "Services",
  },
  {
    link: "/doctor",
    page: "Doctors",
  },
  {
    link: "/Blog-Grid",
    page: "Blog",
  },
  {
    link: "/contact",
    page: "Contact",
  },
];
const DriverCloseButtonStyled = EBStyled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: 10,
  top: 10,
  padding: 10,
  transition: "all .4s ease-in-out",
  display: "none",
  lineHeight: "21px",
  "> svg": {
    fill: theme.palette.primary.dark,
    fontSize: 28,
  },
  "&:hover": {
    "> svg": {
      transform: "rotate(90deg)",
    },
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));
const CustomDrawerStyled = EBStyled(CustomBox)(({ theme, isdraweropen }) => ({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  minWidth: 320,
  height: "auto",
  padding: 0,
  position: "relative",
  backgroundColor: "white",
  zIndex: 1,
  top: 0,
  left: 0,
  [theme.breakpoints.down("md")]: {
    zIndex: 2,
    display: "block",
    height: "100vh",
    padding: "24px",
    position: "fixed",
    left: isdraweropen ? "0" : "-100%",
    transition: "all 0.6s ease-in-out ",
  },
  [theme.breakpoints.down("xs")]: {
    minWidth: 220,
  },
}));
const Header = () => {
  const [anchorElNav] = useState(null);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleOpenSearchBar = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
    document.body.style.overflow = !isSearchBarOpen ? "hidden" : "visible";
  };
  const OpenDrawer = () => {
    setIsDrawerOpen(true);
    document.body.style.overflow = "hidden";
  };
  const CloseDrawer = () => {
    setIsDrawerOpen(false);
    document.body.style.overflow = "visible";
  };
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 150;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      window.addEventListener("scroll", handleScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <StyledAppBar scrolled={scrolled}>
      <CustomContainer maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Logo
            sx={{
              maxWidth: { md: "170px", lxs: "140px" },
            }}
          />
          <CustomDrawerStyled isdraweropen={isDrawerOpen}>
            <DriverCloseButtonStyled onClick={CloseDrawer}>
              <CloseIcon />
            </DriverCloseButtonStyled>
            <Logo
              sx={{
                maxWidth: { md: "170px", lxs: "140px" },
                display: { md: "none", lxs: "block" },
              }}
            />
            {pages.map((data, index) => (
              <HeaderMenu key={index} to={data.link} onClick={CloseDrawer}>
                {data.page}
              </HeaderMenu>
            ))}
            <CustomButton
              variant="contained"
              sx={{
                display: "block",
                height: "min-content",
                width: { md: "auto", lxs: "100%" },
                marginRight: { md: "-20px", lxs: 0 },
                marginTop: { md: 0, lxs: "15px" },
              }}
            >
              Appoinment
            </CustomButton>
          </CustomDrawerStyled>
          <CustomStack direction={"row"} sx={{ justifyContent: "end" }}>
            <IconButton
              size="large"
              onClick={handleOpenSearchBar}
              sx={{ color: "primary.dark" }}
            >
              <SearchIcon />
            </IconButton>
            <SearchWrapStyled isSearchBarOpen={isSearchBarOpen}>
              <CustomBox component="form">
                <CloseButtonStyled
                  anchorEl={anchorElNav}
                  onClick={handleOpenSearchBar}
                >
                  <CloseIcon sx={{ color: "common.white" }} />
                </CloseButtonStyled>
                <TextField
                  id="standard-basic"
                  label="search"
                  variant="standard"
                />
                <IconButton
                  type="submit"
                  sx={{
                    color: "common.white",
                    position: "absolute",
                    right: "0",
                  }}
                  onClick={handleOpenSearchBar}
                >
                  <SearchIcon />
                </IconButton>
              </CustomBox>
            </SearchWrapStyled>
            <IconButton
              size="large"
              onClick={OpenDrawer}
              sx={{
                color: "primary.dark",
                display: { md: "none", sm: "flex" },
              }}
            >
              <MenuIcon />
            </IconButton>
          </CustomStack>
        </Toolbar>
      </CustomContainer>
      <OverlayStyled
        isdraweropen={isDrawerOpen}
        onClick={CloseDrawer}
      ></OverlayStyled>
      <OverlayStyled
        isSearchBarOpen={isSearchBarOpen}
        onClick={handleOpenSearchBar}
      ></OverlayStyled>
    </StyledAppBar>
  );
};

export default Header;
