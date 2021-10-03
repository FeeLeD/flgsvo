import React, { FC } from "react";
import { HStack, Stack, StackProps, Text } from "@chakra-ui/react";

type Props = {
  icon: JSX.Element;
  title: string | undefined;
  description: string | undefined;
} & StackProps;

const InfoSection: FC<Props> = ({
  icon,
  title,
  description,
  ...stackProps
}) => {
  return (
    <HStack align="flex-start" spacing="12px" {...stackProps}>
      {icon}

      <Stack spacing="4px">
        <Text children={title} />
        <Text opacity={0.6} children={description} />
      </Stack>
    </HStack>
  );
};

export default InfoSection;
