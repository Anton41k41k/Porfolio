import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function Filter() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Paper elevation={0} sx={{ position: "sticky", top: 0 }}>
      <Grid
        mt={3}
        container
        columns={{ xs: 4, sm: 8, md: 12, lg: 16, xl: 18 }}
        justifyContent="center"
      >
        <Grid
          component={Typography}
          xl={16}
          lg={15}
          md={11}
          sm={7}
          xs={4}
          textAlign="left"
          variant="h5"
          sx={{ color: "#262626" }}
          px={1}
        >
          ВЫБЕРИТЕ СВОЙ АВТОМОБИЛЬ
        </Grid>
        <Grid
          component={Toolbar}
          xl={18}
          lg={16}
          md={12}
          sm={8}
          xs={4}
          justifyContent="center"
          sx={{
            color: "#262626",
            maxWidth: "100vw",
            width: "100%",
            margin: "0 auto",
            minWidth: "0",
            backgroundColor: "#262626",
          }}
          px={1}
        >
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: "#666666",
                ":hover": {
                  color: "#262626",
                },
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
              <MenuItem onClick={handleCloseNavMenu} className="headerButton">
                <Typography textAlign="center">Главная</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} className="headerButton">
                <Typography textAlign="center">Автомобили</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} className="headerButton">
                <Typography textAlign="center">О нас</Typography>
              </MenuItem>
            </Menu>
          </Box>
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
            <Button />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
