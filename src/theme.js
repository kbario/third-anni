import { extendTheme } from "@chakra-ui/react";
import { m } from "framer-motion";

const config = {
  useSystemColourMode: true,
};

const colors = {
  brand: {
    background: "#F1E0EA",
    card: "#F0D5E5",
    purple: "#3E064A",
    hotPink: "#E82150",
    skelOne: "#F3CBE3",
    skelTwo: "#DCB9CE",
  },
};
const components = {
  Button: {
    variants: {
      hotPink: {
        bg: "brand.hotPink",
        borderColor: "brand.hotPink",
        borderWidth: "2px",
        textColor: "brand.background",
        p: 5,
        fontSize: "lg",
      },
      hotPinkSecondary: {
        borderColor: "brand.hotPink",
        borderWidth: "2px",
        textColor: "brand.hotPink",
        p: 5,
        fontSize: "lg",
        bg: "brand.background",
      },
    },
    defaultProps: {
      variant: "hotPink",
      _focus: {
        boxShadow: "none",
      },
    },
  },
  Tag: {
    variants: {
      "recipe-card": {
        boxShadow: "0 0 2px 2px #efdfde",
        bg: "brand.blue",
      },
    },
  },
  Heading: {
    variants: {
      schedCardHeading: {
        // fontWeight: "thin",
        // letterSpacing: "2px",
      },
      schedCardLabel: {
        fontSize: "md",
        fontWeight: "semi-thin",
        letterSpacing: "2px",
      },
    },
  },
  Text: {
    variants: {
      navlink: {
        fontSize: "xl",
        fontWeight: "thin",
        cursor: "pointer",
      },
      navlinkActive: {
        fontSize: "xl",
        fontWeight: "normal",
        borderBottom: "1px black solid",
      },
    },
  },
};

const theme = extendTheme({ config, colors, components });

export default theme;
