import getAgo from "@/getAgo";
import IssueType from "@/types/Issue";
import { CheckCircle, ErrorOutline } from "@mui/icons-material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Box, ListItem, ListItemIcon, ListItemText } from "@mui/material";

export default function Issue({ issue }) {
  const secondary = `#${issue.number} opened ${getAgo(issue.created_at)} by ${
    issue.user.login
  }`;

  const isOpen = issue.state === "open";
  const issueColor = issue.labels[0]?.color;

  return (
    <ListItem className="items-between my-4 rounded-md border border-solid border-gray-500/50">
      <ListItemIcon className={isOpen ? "text-green-500" : "text-red-500"}>
        {isOpen ? <ErrorOutline /> : <CheckCircle />}
      </ListItemIcon>
      <ListItemText primary={issue.title} secondary={secondary} />

      <Box class="flex items-center gap-4">
        {issueColor && (
          //  TODO: Investigate color display inconsistencies
          <ListItemText
            className={`min-w-min rounded-full border border-solid bg-[#${issueColor}]/50 px-2 py-1 text-center border-[#${issueColor}] text-[#${issueColor}]`}
            primary={issue.labels[0]?.name}
          />
        )}
        {issue.comments > 0 && (
          <Box className="flex items-center">
            <ListItemIcon className="mr-1 min-w-min">
              <ChatBubbleOutlineIcon className="relative top-0.5 text-sm text-gray-500" />
            </ListItemIcon>
            <ListItemText
              primary={issue.comments}
              className="text-sm text-gray-500"
            />
          </Box>
        )}
      </Box>
    </ListItem>
  );
}

Issue.propTypes = IssueType;
