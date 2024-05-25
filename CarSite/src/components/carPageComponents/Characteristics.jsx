import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import PropTypes from "prop-types";

Characteristics.propTypes = {
  characteristics: PropTypes.objectOf(PropTypes.string),
};

export default function Characteristics({ characteristics }) {
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
      mb="2rem"
      flexDirection="column"
      maxWidth="80vw"
    >
      <Typography
        sx={{
          fontSize: {
            xs: "1.1rem",
            sm: "1.8rem",
            md: "2.2rem",
            lg: "2.4rem",
            xl: "2.4rem",
          },
          color: "#262626",
        }}
        fontWeight="400"
        variant="h5"
        mb={1}
      >
        Характеристики автомобиля
      </Typography>

      <Table>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Тип двигателя
            </TableCell>
            <TableCell component="th" scope="row">
              {characteristics.type}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Мощность двигателя
            </TableCell>
            <TableCell component="th" scope="row">
              {characteristics.hp}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Запас хода в км
            </TableCell>
            <TableCell component="th" scope="row">
              {characteristics.reserve}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Выбросы CO<sub>2</sub> г/км
            </TableCell>
            <TableCell component="th" scope="row">
              {characteristics.emissions}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Расход на 100км
            </TableCell>
            <TableCell component="th" scope="row">
              {characteristics.consumption}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Grid>
  );
}
