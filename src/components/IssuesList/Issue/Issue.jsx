import getAgo from "@/getAgo";
import IssueType from "@/types/Issue";
import { CheckCircle, ErrorOutline } from "@mui/icons-material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Box, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IssueTitleLabel from "./IssueTitleLabel/IssueTitleLabel";

export default function Issue({ issue }) {
  const issuerInfo = `#${issue.number} opened ${getAgo(issue.created_at)} by ${
    issue.user.login
  }`;

  const isOpen = issue.state === "open";

  return (
    <ListItem className="my-4 justify-between gap-4 overflow-hidden rounded-md border border-solid border-gray-500/50">
      <Box className="flex items-center">
        <ListItemIcon
          className={`mr-4 min-w-min ${
            isOpen ? "text-green-500" : "text-red-500"
          }`}
        >
          {isOpen ? <ErrorOutline /> : <CheckCircle />}
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary={
            <IssueTitleLabel label={issue.labels[0]} title={issue.title} />
          }
          secondary={issuerInfo}
        />
      </Box>

      <Box className="flex items-center gap-2">
        <Avatar
          alt={issue.user.login}
          src={issue.user.avatar_url}
          className="h-6 w-6"
        />
        {issue.comments > 0 && (
          <>
            <ListItemIcon className="min-w-min">
              <ChatBubbleOutlineIcon className="relative top-0.5 text-sm text-gray-500" />
            </ListItemIcon>
            <ListItemText
              primary={issue.comments}
              className="text-sm text-gray-500"
            />
          </>
        )}
      </Box>
    </ListItem>
  );
}

Issue.propTypes = IssueType;
