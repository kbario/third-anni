import { extendTheme } from "@chakra-ui/react";

const config = {
  useSystemColourMode: true,
};

const colors = {
  brand: {
    background: "#F4EBED",
    purple: "#3E064A",
    hotPink: "#E82150",
  },
};

// const style = {
//   styles: {
//     global: {
//       button: {
//         bg: "brand.hotPink",
//         backgroundcolor: "brand.background",
//       },
//     },
//   },
// };

const components = {
  Button: {
    variants: {
      hotPink: {
        bg: "brand.hotPink",
        textColor: "brand.background",
        p: 5,
        fontSize: "lg",
      },
    },
    defaultProps: {
      variant: "hotPink",
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
