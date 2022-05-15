import IssueType from "@/types/Issue";
import List from "@mui/material/List";
import PropTypes from "prop-types";
import Issue from "./Issue/Issue";

export default function IssuesList({ issues }) {
  return (
    <List>
      {issues.map((issue) => (
        <Issue key={issue.id} issue={issue} />
      ))}
    </List>
  );
}

IssuesList.propTypes = {
  issues: PropTypes.arrayOf(IssueType).isRequired,
};
