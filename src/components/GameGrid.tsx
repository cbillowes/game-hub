import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games2")
      .then((response) => setGames(response.data.results))
      .catch((error) => setError(error.message));
  });

  return (
    <>
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <ul>
        {games.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
