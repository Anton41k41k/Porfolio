import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LinkButton from "./LinkButton.jsx";
import { Link, useLocation } from "react-router-dom";
import LogoBARS from "../images/Logo.jsx";

export default function Header() {
  const { pathname } = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar
      position="static"
      component="header"
      square
      sx={{
        borderBottom: `${
          pathname === "/" ? "1px solid #FFFFFF" : "1px solid #666666"
        }`,
        zIndex: "7",
        backgroundColor: "rgba(0, 0, 0, 0)",
        position: `${pathname === "/" ? "absolute" : "relative"}`,
        maxWidth: "1400px",
        width: "100%",
        left: "50%",
        transform: "translate(-50%, 0%)",
        boxShadow: "none",
      }}
    >
      <Toolbar
        disableGutters
        sx={{ maxWidth: "97%", width: "100%", margin: "0 auto", minWidth: "0" }}
      >
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            sx={{
              color: `${pathname === "/" ? "white" : "#666666"}`,
              ":hover": { color: `${pathname === "/" ? "white" : "#262626"}` },
            }}
          >
            <MenuIcon />
          </IconButton>
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
          >
            <MenuItem
              component={Link}
              to="/"
              onClick={handleCloseNavMenu}
              className="headerButton"
            >
              <Typography textAlign="center">Главная</Typography>
            </MenuItem>
            <MenuItem
              component={Link}
              to="allModels"
              onClick={handleCloseNavMenu}
              className="headerButton"
            >
              <Typography textAlign="center">Автомобили</Typography>
            </MenuItem>
            <MenuItem
              component={Link}
              to="contacts"
              onClick={handleCloseNavMenu}
              className="headerButton"
            >
              <Typography textAlign="center">Контакты</Typography>
            </MenuItem>
          </Menu>
        </Box>
        <LogoBARS color={pathname === "/" ? "#FFFFFF" : "#666666"} />
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto",
            height: "100%",
          }}
        >
          <LinkButton to="/" text="Главная" pathname={pathname} />
          <LinkButton to="allModels" text="Автомобили" pathname={pathname} />
          <LinkButton to="contacts" text="Контакты" pathname={pathname} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
