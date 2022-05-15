import getAgo from "@/getAgo";
import IssueType from "@/types/Issue";
import { CheckCircle, ErrorOutline } from "@mui/icons-material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

export default function Issue({ issue }) {
  const secondary = `#${issue.number} opened ${getAgo(issue.created_at)} by ${
    issue.user.login
  }`;

  const isOpen = issue.state === "open";

  return (
    <ListItem className="border border-gray-500/50 border-solid rounded-md my-4">
      <ListItemIcon className={isOpen ? "text-green-500" : "text-red-500"}>
        {isOpen ? <ErrorOutline /> : <CheckCircle />}
      </ListItemIcon>
      <ListItemText primary={issue.title} secondary={secondary} />
      {issue.comments > 0 && (
        <>
          <ListItemIcon className="min-w-min mr-1">
            <ChatBubbleOutlineIcon className="relative text-gray-500 text-sm top-0.5" />
          </ListItemIcon>
          <ListItemText
            primary={issue.comments}
            className="text-gray-500 text-sm"
          />
        </>
      )}
    </ListItem>
  );
}

Issue.propTypes = IssueType;
