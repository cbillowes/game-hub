import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  selectedGenre: Genre | null;
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { genres, isLoading } = useGenres();
  if (isLoading) return <SkeletonText noOfLines={8} spacing={4} />;

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack
            clipPath="polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)"
            textOverflow="ellipsis"
            padding={2}
            borderRadius={8}
            backgroundColor={
              selectedGenre?.id === genre.id ? "crimson" : "transparent"
            }
          >
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
            />
            <Button
              fontSize="lg"
              variant="link"
              onClick={() => onSelectedGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
