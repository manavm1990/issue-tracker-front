import useIssuesQuery from "@/utils/useIssuesQuery";
import Error from "@components/Error";
import IssuesList from "@components/IssuesList/IssuesList";
import LabelsList from "@components/LabelsList/LabelsList";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import { useParams } from "react-router-dom";

export default function Issues() {
  const { owner, repo } = useParams();
  const issuesQuery = useIssuesQuery({
    owner,
    repo,
    filters: { state: "all" },
  });

  const { data, isLoading, isError } = issuesQuery;

  const getLabels = (issuesData) =>
    issuesData.reduce((acc, { labels }) => {
      let ret = [...acc];

      labels.forEach((l) => {
        // If we don't already have this label in our list, add it
        if (!acc.find(({ id }) => id === l.id)) {
          ret = ret.concat(l);
        }
      });

      return ret;
    }, []);

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
          <Grid item xs={10} component="section" columnSpacing={4}>
            <Typography variant="h4" component="h2" fontWeight="bold">
              Issues List{" "}
            </Typography>
            <IssuesList issues={data} />
          </Grid>
          <Grid item xs={2}>
            <LabelsList labels={getLabels(data)} />
          </Grid>
        </Grid>
      )}
    </>
  );
}
