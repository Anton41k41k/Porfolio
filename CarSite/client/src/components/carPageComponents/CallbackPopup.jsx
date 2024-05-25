import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";

import PropTypes from "prop-types";
import { Typography } from "@mui/material";

CallbackPopup.propTypes = {
  make: PropTypes.string,
  model: PropTypes.string,
  total: PropTypes.number,
};

export default function CallbackPopup({ make, model, total }) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Grid
      xs={4}
      sm={8}
      md={12}
      lg={16}
      xl={18}
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexDirection="column"
      p={2}
    >
      <Typography
        variant="p"
        textAlign="center"
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "1.2rem",
            md: "1.4rem",
            lg: "1.5rem",
            xl: "1.7rem",
          },
          color: "#262626",
        }}
      >
        Для заказа или уточнения информации оставьте заявку
      </Typography>
      <Button variant="outlined" onClick={handleOpen} sx={{ margin: 2 }}>
        Оставить заявку
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            formJson.make = make;
            formJson.model = model;
            console.log(JSON.stringify(formJson));
            handleClose();
          },
        }}
      >
        <DialogTitle>Заказ автомобиля</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Оставьте заявку на заказ автомобиля, наш оператор свяжется с вами
            для соглосования. Цена на данный автомобиль от:{" "}
            {total.toLocaleString("ru") + "₽"}
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            name="fullName"
            label="ФИО"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            name="city"
            label="Город проживания"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            fullWidth
            required
            margin="dense"
            name="email"
            label="Email Address"
            type="email"
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            name="telephone"
            label="Номер телефона"
            type="tel"
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Назад</Button>
          <Button type="submit">Отправить заявку</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}
