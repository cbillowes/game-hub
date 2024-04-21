import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  SimpleGrid,
} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = Array.from({ length: 12 }, (_, i) => i);

  return (
    <>
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <SimpleGrid
        columns={{
          base: 1,
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing="10px"
        padding="10px"
      >
        {isLoading && skeletons.map((i) => <GameCardSkeleton key={i} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
