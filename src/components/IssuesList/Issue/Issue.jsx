import IssueType from "@/types/Issue";
import { ChatBubble, CheckCircle, ErrorOutline } from "@mui/icons-material";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import getAgo from "@/getAgo";

export default function Issue({ issue }) {
  const secondary = `#${issue.number} opened ${getAgo(issue.created_at)} by ${
    issue.user.login
  }`;

  return (
    <ListItem>
      <ListItemIcon>
        {issue.state === "open" ? <ErrorOutline /> : <CheckCircle />}
      </ListItemIcon>
      <ListItemText primary={issue.title} secondary={secondary} />
      {issue.comments > 0 && (
        <>
          <ListItemIcon>
            <ChatBubble />
          </ListItemIcon>
          <ListItemText primary={issue.comments} />
        </>
      )}
    </ListItem>
  );
}

Issue.propTypes = IssueType;
