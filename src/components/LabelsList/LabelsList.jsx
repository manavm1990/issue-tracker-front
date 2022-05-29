import LabelType from "@/types/Label";
import Label from "@components//Label/Label";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

export default function LabelsList({ labels }) {
  return (
    <Box component="section">
      <Typography component="h2" variant="h5" fontWeight="bold" gutterBottom>
        Labels
      </Typography>

      <Grid container spacing={1}>
        {labels.map((label) => (
          <Grid item key={label.id}>
            <Label label={label} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

LabelsList.propTypes = {
  labels: PropTypes.arrayOf(LabelType).isRequired,
};
