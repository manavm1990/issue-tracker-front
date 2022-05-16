import ky from "ky";
import { useQuery } from "react-query";

const BASE_URL = "https://api.github.com";

export default function useIssuesQuery({ owner, repo, filters = {} } = {}) {
  const getIssues = () => {
    const { assignee, labels, state } = filters;
    const searchParams = new URLSearchParams();

    if (assignee) {
      searchParams.append("assignee", assignee);
    }

    if (labels?.length) {
      searchParams.append("labels", labels.join(","));
    }

    if (state) {
      searchParams.append("state", state);
    }

    const filterQuery = searchParams.toString();

    return ky
      .get(`${BASE_URL}/repos/${owner}/${repo}/issues?${filterQuery}`)
      .json();
  };

  return useQuery(["issues", owner, repo], getIssues);
}
