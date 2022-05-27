import LabelType from "@/types/Label";
import { List, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Label from "@components//Label/Label";

export default function LabelsList({ labels }) {
  return (
    <Box component="section">
      <Typography component="h2" variant="h5" fontWeight="bold">
        Labels
      </Typography>

      <List>
        {labels.map((label) => (
          <Label key={label.id} label={label} />
        ))}
      </List>
    </Box>
  );
}

LabelsList.propTypes = {
  labels: PropTypes.arrayOf(LabelType).isRequired,
};
