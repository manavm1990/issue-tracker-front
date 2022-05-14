import { useQuery } from "react-query";
import apiService from "./api.service";
import Main from "./components/Main";

export default function App() {
  const userQuery = useQuery(["rails"], () => apiService.getIssues());

  const { data, isLoading, isError } = userQuery;

  function getChildren() {
    if (isLoading) {
      return <p className="text-orange-500">Loading...</p>;
    }

    if (isError) {
      return <p className="text-red-500">Error</p>;
    }

    return <p className="text-bold">{data[0].title}</p>;
  }

  return <Main>{getChildren()}</Main>;
}
