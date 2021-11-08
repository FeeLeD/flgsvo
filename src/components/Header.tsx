import React, { FC, useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";

const Header: FC = () => {
  const {
    wp: {
      generalSettings: { title, description },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `);
  const toast = useToast();

  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const onLogoClick = () => {
    setNumberOfClicks(numberOfClicks + 1);
    setTimeout(() => {
      setNumberOfClicks(0);
    }, 5000);
  };

  useEffect(() => {
    if (numberOfClicks === 10) {
      toast({
        status: "info",
        title: "Внимание!",
        description: "Олежа, на тебя всем похуй",
        position: "top",
      });
    }
  }, [numberOfClicks]);

  return (
    <HStack my="32px" spacing="24px">
      <Image
        w="100px"
        h="100px"
        src="/flgso.svg"
        alt="Логотип"
        onClick={onLogoClick}
      />

      <Stack spacing="4px">
        <Heading fontSize="h2">{title}</Heading>
        <Text fontSize="md" opacity="60%">
          {description}
        </Text>
      </Stack>
    </HStack>
  );
};

export default Header;
