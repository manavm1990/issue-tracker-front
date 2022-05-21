import ErrorIcon from "@mui/icons-material/Error";
import { Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function Error({ error }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      gap={1}
      mt={4}
      className="text-red-500"
    >
      <ErrorIcon />
      <Typography className=" font-black text-xl uppercase">{error}</Typography>
    </Stack>
  );
}

Error.propTypes = {
  error: PropTypes.string,
};

Error.defaultProps = {
  error: "Unknown error",
};
