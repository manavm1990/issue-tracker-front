import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Error from "../../components/Error";
import IssuesList from "../../components/IssuesList/IssuesList";
import useIssuesQuery from "../../utils/useIssuesQuery";

const OWNER = "rails";
const REPO = "rails";

export default function Issues() {
  const issuesQuery = useIssuesQuery({
    owner: OWNER,
    repo: REPO,
    filters: { state: "all" },
  });

  // TODO: Deal with isLoading
  const { data, isError } = issuesQuery;

  return (
    <>
      {isError && <Error error={issuesQuery.error.message} />}
      {data && (
        <Grid container spacing={2}>
          <Grid item xs={8} component="section">
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              className="text-yellow-500"
            >
              Issues List{" "}
            </Typography>
            <IssuesList issues={data} />
          </Grid>
        </Grid>
      )}
    </>
  );
}
