import { Typography } from "@mui/material";
import LabelType from "@/types/Label";

export default function Label({ label }) {
  const { name, color } = label;

  return (
    <Typography
      className={`min-w-min rounded-full border border-solid bg-[#${color}]/50 px-2 py-1 text-center text-sm border-[#${color}] text-[#${color}]`}
    >
      {name}
    </Typography>
  );
}

Label.propTypes = {
  label: LabelType.isRequired,
};
