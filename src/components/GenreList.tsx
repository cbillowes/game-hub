import {
  HStack,
  Image,
  List,
  ListItem,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { genres, isLoading } = useGenres();
  if (isLoading) return <SkeletonText noOfLines={8} spacing={4} />;

  return (
    <List>
      {genres.map(({ id, name, image_background }) => (
        <ListItem key={id} paddingY={2}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(image_background)}
              alt={name}
            />
            <Text fontSize="lg">{name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
