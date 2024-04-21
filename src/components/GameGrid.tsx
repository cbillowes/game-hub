import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames()

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
