import LabelType from "@/types/Label";
import { Box } from "@mui/material";

export default function Label({ label }) {
  const { name, color } = label;

  return (
    <Box
      className={`min-w-min rounded-full border border-solid bg-[#${color}]/50 px-1 text-center text-sm border-[#${color}] text-[#${color}]`}
      component="span"
    >
      {name}
    </Box>
  );
}

Label.propTypes = {
  label: LabelType.isRequired,
};
