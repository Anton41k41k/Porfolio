import { AppBar, IconButton, Paper, Stack, Typography } from "@mui/material";
import "./style/Header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar position="static" component="header">
      <Paper elevation={0}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          className="header__content"
          padding={"0 12px"}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className="header__title"
          >
            <b>Фильмы</b>
          </Typography>
          <Link to="/authorization">
            <IconButton className="header__button">
              <AccountCircleIcon
                fontSize="large"
                sx={{ color: "#FFF" }}
              ></AccountCircleIcon>
            </IconButton>
          </Link>
        </Stack>
      </Paper>
    </AppBar>
  );
}
