import React, { FC } from "react";
import { Box, Image, HStack, Stack, Text, Link } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import { SnowflakeSvg } from "~icons/SnowflakeSvg";
import { VkSvg } from "~icons/VkSvg";
import { FacebookSvg } from "~icons/FacebookSvg";
import { InstagramSvg } from "~icons/InstagramSvg";

const Footer: FC = () => {
  const {
    wp: {
      generalSettings: { title, instagram, footerContent, facebook, vk },
    },
  } = useStaticQuery<{
    wp: {
      generalSettings: {
        title: string;
        instagram: string;
        footerContent: string;
        facebook: string;
        vk: string;
      };
    };
  }>(graphql`
    query FooterQuery {
      wp {
        generalSettings {
          title
          instagram
          footerContent
          facebook
          vk
        }
      }
    }
  `);

  return (
    <Box w="100%" h="fit-content" bg="#35363A" py="72px">
      <HStack
        w={["95%", "95%", "90%", "1150px"]}
        mx="auto"
        flexDirection={["column", "row"]}
        justify="space-between"
      >
        <HStack spacing="32px">
          <SnowflakeSvg
            display={["none", "none", "initial"]}
            boxSize="76px"
            color="rgba(255,255,255,0.7)"
          />

          <Stack w={["100%", "70%", "50%", "50%"]} color="#FAFAFA">
            <Text as="b" children={title} />

            <Text children={footerContent} />
          </Stack>
        </HStack>

        <HStack pt={["32px", "0"]}>
          {vk && (
            <Link href={vk} isExternal>
              <VkSvg boxSize="32px" />
            </Link>
          )}

          {facebook && (
            <Link href={facebook} isExternal>
              <FacebookSvg boxSize="32px" />
            </Link>
          )}

          {instagram && (
            <Link href={instagram} isExternal>
              <InstagramSvg boxSize="32px" />
            </Link>
          )}
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
