import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Spinner } from "../Spinner/Spinner";
import { useQuery } from "../../hooks/useQuery";

const defaultChildren = () => null;

export const Fetcher = ({
  queryFn,
  initialState,
  children = defaultChildren,
}) => {
  const { error, isLoading, data } = useQuery(queryFn, initialState);

  return error ? (
    <ErrorMessage message={error.message} />
  ) : isLoading ? (
    <Spinner />
  ) : (
    children(data)
  );
};
