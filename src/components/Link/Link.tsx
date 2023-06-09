import { As, Icon, Link as ChakraLink, Tooltip } from "@chakra-ui/react";

interface LinkProps {
  as?: As;
  path?: string;
  children?: React.ReactNode;
  hasIcon?: boolean;
  iconEl?: React.ReactNode;
  hasTooltip?: boolean;
  tooltipLabel?: string;
}

const Link = ({
  path,
  children,
  hasIcon = false,
  iconEl,
  as,
  hasTooltip,
  tooltipLabel,
  ...rest
}: LinkProps) => {
  return (
    <ChakraLink
      as={as}
      display={"flex"}
      p="0.5rem"
      rounded="full"
      _hover={{
        color: "whiteAlpha.900",
        bgColor: "primary",
      }}
      _activeLink={{
        color: "whiteAlpha.900",
        bgColor: "primary",
      }}
      to={path}
      {...rest}
    >
      {hasIcon && hasTooltip && (
        <Tooltip label={tooltipLabel} placement="right" hasArrow>
          <Icon w={"1.5rem"} h="1.5rem">
            {iconEl}
          </Icon>
        </Tooltip>
      )}
      {children}
    </ChakraLink>
  );
};

export default Link;
