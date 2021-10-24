import React, { FC } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Link,
  Stack,
  Text,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import HeaderMenuItem from "./HeaderMenuItem";
import { graphql, useStaticQuery } from "gatsby";
import { ListSvg } from "~icons/ListSvg";
import { SnowflakeSvg } from "~icons/SnowflakeSvg";

const HeaderMenu: FC = () => {
  const {
    allWpMenu: { menus },
  } = useStaticQuery<{
    allWpMenu: {
      menus: Array<{
        menu: {
          id: string;
          name: string;
          menuItems: {
            nodes: Array<{
              label: string;
              url: string;
            }>;
          };
        };
      }>;
    };
  }>(graphql`
    query allMenyQuery {
      allWpMenu(sort: { fields: locations }) {
        menus: edges {
          menu: node {
            id
            name
            menuItems {
              nodes {
                label
                url
              }
            }
          }
        }
      }
    }
  `);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Wrap
        display={["none", "none", "flex"]}
        pt="12px"
        justify={["flex-start", "flex-start", "flex-start", "space-around"]}
      >
        <Link tabIndex={-1} href="/" _hover={{ textDecor: "none" }}>
          <Button w="150px" children="Новости" />
        </Link>

        {menus.map(menu => (
          <WrapItem key={menu.menu.id}>
            <HeaderMenuItem
              title={menu.menu.name}
              items={menu.menu.menuItems.nodes}
            />
          </WrapItem>
        ))}
      </Wrap>

      <Button
        w="100%"
        display={["initial", "initial", "none"]}
        onClick={onOpen}
      >
        Меню
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} size="full">
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton bg="white" border="1px solid" color="winter.90" />

          <DrawerBody py="24px">
            <Stack spacing="24px">
              {menus.map((menu, i) => (
                <Stack key={i}>
                  <Text fontSize="h3">{menu.menu.name}</Text>
                  {menu.menu.name === "Федерация" && (
                    <Link
                      href="/"
                      color="winter.100"
                      _hover={{
                        bg: "winter.90",
                        textDecoration: "none",
                      }}
                      _active={{ bg: "none" }}
                      _focus={{ bg: "none" }}
                      children="Новости"
                    />
                  )}
                  {menu.menu.menuItems.nodes.map((item, i) => (
                    <Link
                      key={i}
                      href={item.url}
                      color="winter.100"
                      _hover={{
                        bg: "winter.90",
                        textDecoration: "none",
                      }}
                      _active={{ bg: "none" }}
                      _focus={{ bg: "none" }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HeaderMenu;
