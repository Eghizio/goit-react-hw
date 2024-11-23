import { useSearchParams } from "react-router-dom";

const QUERY_PARAM_KEY = "query";

export const useSearch = (initialParams) => {
  const [searchParams, setSearchParams] = useSearchParams(initialParams);

  const searchQuery = searchParams.get(QUERY_PARAM_KEY) ?? "";

  const updateSearch = (searchQuery) =>
    setSearchParams((params) => {
      params.set(QUERY_PARAM_KEY, searchQuery);
      return params;
    });

  const clearSearch = () =>
    setSearchParams((params) => {
      params.delete(QUERY_PARAM_KEY);
      return params;
    });

  return { searchQuery, updateSearch, clearSearch };
};
