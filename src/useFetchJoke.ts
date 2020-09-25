import { useEffect, useState } from "react";

export default function useFetchJoke() {
  const [randomJoke, setRandomJoke] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorFetch, setErrorFetch] = useState<boolean>(false);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json",
          },
        });
        const data = await response.json();
        setRandomJoke(data.joke);
      } catch (error) {
        setErrorFetch(true);
      }
      setIsLoading(false);
    };

    fetchJoke();
  }, []);

  const refetchJoke = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setRandomJoke(data.joke);
    } catch (error) {
      setErrorFetch(true);
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    refetch: refetchJoke,
    data: randomJoke,
    error: errorFetch,
  };
}
