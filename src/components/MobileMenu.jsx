import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const MobileMenu = ({
  pages,
  anchorElNav,
  setAnchorElNav,
  subPages,
}) => {
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{
        display: { xs: "block", md: "none" },
      }}
      MenuListProps={{
        sx: {},
      }}
      PaperProps={{
        sx: {
          width: "95%",
          top: "0!important",
          left: "0!important",
          pb: "20px",
          boxShadow: "0px 10px 22px rgba(13, 15, 39, 0.3)",
          backgroundColor: (theme) => theme.palette.secondary.main,
          color: "white",
          borderRadius: "0px 0px 30px 0px",
        },
      }}
    >
      <IconButton size="large" onClick={handleCloseNavMenu} color="inherit">
        <MenuIcon color="info" />
      </IconButton>
      <Box sx={{ m: "32px" }}>
        <img src="images/help-hospital2.svg" width={170} alt="" style={{marginBottom:"15px"}} />
        {subPages?.map((page) => (
          <Accordion
            sx={{ background: "none", color: "#ffffff", boxShadow: 0, m: 0 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="warning" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ m: "0!important",pl:0 }}
            >
              <Typography
                sx={{ fontWeight: "600!important", fontSize: "14px" }}
              >
                {page.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ ml: "50px", p: 0 }}>
              {page.submenu.map((item) => (
                <Typography sx={{ fontSize: "14px", mb: "15px" }}>
                  {item.name}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Divider
        sx={{ backgroundColor: (theme) => theme.palette.info.main, mb: 5 }}
      />
      {pages.map((page) => (
        <Link to={page.path}>
          <MenuItem
            key={page}
            onClick={handleCloseNavMenu}
            sx={{
              pl: 8,
              width: "252px",
              height: "46px",
              fontFamily: "Hind",
              borderRadius: "0px 15px 15px 0px;",
              color: "white",
              "&:focus": {
                backgroundColor: (theme) => theme.palette.info.main,
                color: (theme) => theme.palette.secondary.main,
              },
            }}
          >
            <Typography
              textAlign="center"
              sx={{ fontWeight: "600!important", fontSize: "14px" }}
            >
              {page.name}
            </Typography>
          </MenuItem>
        </Link>
      ))}
    </Menu>
  );
};
