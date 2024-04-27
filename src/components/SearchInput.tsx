import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <BsSearch />
      </InputLeftElement>
      <Input
        borderRadius={10}
        placeholder="Eg. Grand Theft Auto"
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchInput;
