import { useEffect, useState } from "react";

export const useQuery = (queryFn, initialState) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const performQuery = async () => {
      setError(null);
      setIsLoading(true);

      await queryFn()
        .then(setData)
        .catch(setError)
        .finally(() => setIsLoading(false));
    };

    performQuery();
  }, [queryFn]);

  return { data, isLoading, error };
};
