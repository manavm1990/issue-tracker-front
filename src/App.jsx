import { useQuery } from "react-query";
import apiService from "./api.service";
import Main from "./components/Main";

export default function App() {
  const userQuery = useQuery(["manavm1990"], () => apiService.show());

  const { data, isLoading, isError } = userQuery;

  function getChildren() {
    if (isLoading) {
      return <p className="text-orange-500">Loading...</p>;
    }

    if (isError) {
      return <p className="text-red-500">Error</p>;
    }

    return <p className="text-bold">{data?.login}</p>;
  }

  return <Main>{getChildren()}</Main>;
}
