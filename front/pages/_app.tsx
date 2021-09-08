import "../styles/globals.css";
import type { AppProps } from "next/app";
import BaseLayout from "../layouts/BaseLayout";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  radii: {
    none: "1px",
    sm: "1px",
    base: "1px",
    md: "1px",
    lg: "1px",
    xl: "1px",
    "2xl": "1px",
    "3xl": "1px",
    full: "1px",
  },
  components: {
    Button: {
      baseStyle: {
        //borderRadius: "2px",
        fontWeight: "normal",

        //color:'white',
        //boxShadow:"xl"// Normally, it is "semibold"
      },
      variants: {
        // Make a variant, we'll call it `base` here and leave it empty
        base: {
          boxShadow: "xl",
        },
        link: {
          color: "blue.900",
        },
        classic: {
          bg: "ruby.500",

          _hover: {
            bg: "ruby.300",
            color: "blue.500",
          },
        },
        remove: {
          bg: "red.500",
          color: "white",

          _hover: {
            bg: "red.300",
            color: "white",
          },

          // _hover: {
          //   bg: "ruby.300",
          //   color: "blue.500"
          // },
        },
        checkout: {
          bg: "ruby.500",
          fontWeight: "bold",

          // _hover: {
          //   bg: "ruby.300",
          //   fontWeight: 'bold',
          //   boxShadow:'md',
          // },
        },
      },
      defaultProps: {
        // Then here we set the classic variant as the default
        variant: "classic",
      },
    },
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        // bg: "beige.300",
        color: "charcoal.500",
        fontFamily: "Lexend", //["Prompt","Rubik"]
      },
      // styles for the `a`
      a: {
        color: "neon.400",
        _hover: {
          textDecoration: "underline",
        },
      },
      // p, span: {
      //   color: "blue.900",
      // },
    },
  },
  colors: {
    lemon: {
      400: "#FCFFBF",
      500: "#F7FE72",
    },
    green: {
      500: "#8FF7A7",
    },
    blue: {
      100: "#F2FFFF",
      300: "#CACBE6",
      500: "#B9C0DA",
    },
    ruby: {
      300: "#F2CDBD",
      500: "#F09873",
    },

    charcoal: {
      500: "#313335",
    },

    grey: {
      100: "#FAFAFA",
      300: "#CACCCE",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </ChakraProvider>
  );
}
export default MyApp;
