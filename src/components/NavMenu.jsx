import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { Link, useLocation, useParams } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

import uaImg from './images/lang-ua.svg'
import uasImg from './images/lang-usa.png'
import arrow from './images/aroow.svg'


const pages = [
  { name: "Головна", path: "/" },
  { name: "Менторія", path: "/mentoria" },
  { name: "Місто майбутнього", path: "/city" },
  {
    name: "Допомога лікарням",
    path: "/about",
  },
];

export const subPages = [
  {
    name: "Про нас",
    submenu: [
      { name: "Наші засновники", path: "/about" },
      { name: "Рада директорів", path: "/about" },
      { name: "Команда волонтерів", path: "/about" },
      { name: "Наші партнери", path: "/about" },
    ],
  },
  {
    name: "Наша діяльність",
    submenu: [
      { name: "Актуальний проект", path: "/about" },
      { name: "Виконані проекти", path: "/about" },
      { name: "Наш процес", path: "/about" },
    ],
  },
];

export function NavMenu() {
  const xmd = useMediaQuery("(min-width:1115px)");
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const location = useLocation();

  return (
    <Box sx={{ flexGrow: 1, height: "60px" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          height: "48px",
          boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.1);",
          position: 'relative',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ alignItems: "flex-start" }}>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <MobileMenu
                pages={pages}
                anchorElNav={anchorElNav}
                setAnchorElNav={setAnchorElNav}
                subPages={subPages}
              />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link to={page.path}>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      borderRadius: "0 0 15px 15px",
                      height: "58px",
                      ml: xmd ? 6 : 2,
                      color:
                        location.pathname === page.path ? "#ffffff" : "#03073E",
                      boxShadow: " 0px 8px 24px rgba(54, 44, 9, 0.15)",
                      background: (theme) =>
                        location.pathname === page.path
                          ? theme.palette.secondary.light
                          : theme.palette.primary.main,
                      "&:hover": {
                        background: (theme) =>
                          location.pathname === page.path
                            ? theme.palette.secondary.light
                            : theme.palette.primary.main,
                        color:
                          location.pathname === page.path
                            ? "#ffffff"
                            : "#03073E",
                        height: "67px",
                        transition: "all .3s ease-in-out",
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }} className="header__lang">
              <Button
                color="info"
                sx={{
                  borderRadius: "0 0 15px 15px",
                  height: "58px",
                  ml: 4,
                  "&:hover": {
                    height: "67px",
                    transition: "all .3s ease-in-out",
                  },
                }}
              >
                Допомогти
              </Button>
              <div className="header__lng">
                <Link to="#" class="current-lang">
                  <img src={uaImg} alt=""/>
                  <img src={arrow} alt=""/>
                </Link>
                <div className="header__list">
                  <Link to="#">
                    <img src={uasImg} alt=""/>
                  </Link>
                </div>
              </div>
            </Box>
          </Toolbar>

        </Container>
      </AppBar>
    </Box>
  );
}
