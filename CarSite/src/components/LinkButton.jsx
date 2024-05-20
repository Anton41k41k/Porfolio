import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function LinkButtonHeader({ to, text, pathname }) {
  return (
    <Button
      component={Link}
      className="headerButton"
      to={to}
      sx={{
        my: 2,
        display: "block",
        borderRadius: "0",
        color: `${pathname === "/" ? "white" : "#666666"}`,
        borderBottom: "0px solid blue",
        ":hover": {
          color: `${pathname === "/" ? "white" : "#262626"}`,
          borderBottom: "4px solid blue",
          borderRadius: "0%",
          mb: 0,
          backgroundColor: "unset",
        },
      }}
    >
      {text}
    </Button>
  );
}

LinkButtonHeader.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  pathname: PropTypes.string,
};

export default LinkButtonHeader;
