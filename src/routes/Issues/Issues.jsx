import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import IssuesList from "../../components/IssuesList/IssuesList";
import useIssuesQuery from "../../utils/useIssuesQuery";

export default function Issues() {
  const { owner, repo } = useParams();
  const issuesQuery = useIssuesQuery({
    owner,
    repo,
    filters: { state: "all" },
  });

  // TODO: Deal with isLoading
  const { data, isLoading, isError } = issuesQuery;

  return (
    <>
      {isError && <Error error={issuesQuery.error.message} />}
      {isLoading ? (
        <LinearProgress className="fixed inset-0 w-screen" />
      ) : (
        <div className="fixed inset-0 h-1 w-screen bg-yellow" />
      )}

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
