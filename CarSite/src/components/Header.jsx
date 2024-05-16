import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../images/BMW_logo.svg";
import "./header.css";

export default function Header() {
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
        borderBottom: "1px solid #FFFFFF",
        zIndex: "1",
        backgroundColor: "rgba(0, 0, 0, 0)",
        position: "absolute",
        maxWidth: "1200px",
        width: "100%",
        left: "50%",
        transform: "translate(-50%, 0%)",
        boxShadow: "none",
      }}
    >
      <Toolbar
        disableGutters
        sx={{ maxWidth: "1150px", width: "100%", margin: "0 auto" }}
      >
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
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
            <MenuItem onClick={handleCloseNavMenu} className="headerButton">
              <Typography textAlign="center">Главная</Typography>
            </MenuItem>
          </Menu>
        </Box>
        <img
          src={Logo}
          alt="BMW Logo"
          style={{ width: "100%", maxWidth: "48px" }}
        />
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <Button
            className="headerButton"
            sx={{
              my: 2,
              color: "white",
              display: "block",
              borderRadius: "0",
              borderBottom: "4px transparent ",
            }}
          >
            Главная
          </Button>
          <Button
            className="headerButton"
            sx={{
              my: 2,
              color: "white",
              display: "block",
              borderRadius: "0",
              borderBottom: "4px transparent ",
            }}
          >
            Автомобили
          </Button>
          <Button
            className="headerButton"
            sx={{
              my: 2,
              color: "white",
              display: "block",
              borderRadius: "0",
              borderBottom: "4px transparent ",
            }}
          >
            О нас
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
