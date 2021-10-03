import React, { FC } from "react";
import { HStack, Link, LinkProps, Text } from "@chakra-ui/react";
import { ListSvg } from "~icons/ListSvg";

type Props = {
  styling: "fill" | "outline";
} & LinkProps;

const STYLES = {
  fill: { bg: "#5C89CA", color: "white" },
  outline: {
    boxShadow: "inset 0 0 0 1px #5C89CA",
    color: "#5C89CA",
  },
};

const LinkButton: FC<Props> = ({
  styling = "fill",
  children,
  ...linkProps
}) => {
  return (
    <Link
      py="6px"
      borderRadius="8px"
      isExternal
      _hover={{
        opacity: 0.7,
      }}
      {...STYLES[styling]}
      {...linkProps}
    >
      <HStack justify="center">
        <ListSvg />

        <Text>{children}</Text>
      </HStack>
    </Link>
  );
};

export default LinkButton;
