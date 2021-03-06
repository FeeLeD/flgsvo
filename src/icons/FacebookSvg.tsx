import React from "react";
import Icon, { IconProps } from "@chakra-ui/icon";

export const FacebookSvg = (iconProps: IconProps) => {
  return (
    <Icon viewBox="0 0 42 42" {...iconProps}>
      <path
        d="M36.75 0H5.25C2.35462 0 0 2.35462 0 5.25V36.75C0 39.6454 2.35462 42 5.25 42H36.75C39.6454 42 42 39.6454 42 36.75V5.25C42 2.35462 39.6454 0 36.75 0Z"
        fill="#1976D2"
      />
      <path
        d="M35.4375 21H28.875V15.75C28.875 14.301 30.051 14.4375 31.5 14.4375H34.125V7.875H28.875C24.5254 7.875 21 11.4004 21 15.75V21H15.75V27.5625H21V42H28.875V27.5625H32.8125L35.4375 21Z"
        fill="#FAFAFA"
      />
    </Icon>
  );
};
