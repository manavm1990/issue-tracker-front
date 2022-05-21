import ky from "ky";
import { useQuery } from "react-query";

const BASE_URL = `http://localhost:${import.meta.env.VITE_SERVER_PORT}/issues`;

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

    return ky.get(`${BASE_URL}/${owner}/${repo}?${filterQuery}`).json();
  };

  return useQuery(["issues", owner, repo], getIssues);
}
