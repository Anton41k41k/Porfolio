import { TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import PropTypes from "prop-types";

FormInput.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  name: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
};

export default function FormInput({
  value,
  handleChange,
  name,
  required,
  type,
  label,
}) {
  return (
    <Grid xs={4} sm={8} md={6} lg={5.33} xl={6} mb={1}>
      <TextField
        fullWidth
        required={required}
        label={label}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </Grid>
  );
}
