import { Image, ImageProps } from "@chakra-ui/react";
import love from "../assets/love.png";
import star from "../assets/star.png";
import meh from "../assets/thumb-up.png";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Meh!", boxSize: 6 },
    4: { src: star, alt: "Star! Recommended!", boxSize: 6 },
    5: { src: love, alt: "Love! Exceptional!", boxSize: 6 },
  };

  return <Image right="0" margin={3} position="absolute" {...emojiMap[rating]} />;
};

export default Emoji;
