import LabelType from "@/types/Label";
import Label from "@components/Label/Label";
import { Box, Typography } from "@mui/material";
import { PropTypes } from "prop-types";

export default function IssueTitleLabel({ label, title }) {
  return (
    <Typography>
      <Box className="mr-2" component="span">
        {title}
      </Box>

      {label && <Label label={label} />}
    </Typography>
  );
}

IssueTitleLabel.propTypes = {
  label: LabelType,
  title: PropTypes.string.isRequired,
};

IssueTitleLabel.defaultProps = {
  label: null,
};
