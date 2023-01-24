import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { DecaUIProvider, styled, Text } from "@deca-ui/react";
import slugify from "slugify";
import CodeBlock from "../components/CodeBlock";
import { createContext, useState } from "react";

const Link = styled("a", {
  color: "$primary",
  textDecoration: "none",
  "&:hover": {
    color: "$primary-darken-1",
  },
});

const Code = styled("code", {
  fontFamily: "$mono",
  bg: "$secondary-lighten-6",
  color: "$secondary",
  br: "$xs",
  fontSize: "$bodySm",
  px: "$1",
});

export const ThemeContext = createContext<any>({
  darkMode: false,
  switchMode: () => {},
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [darkMode, setDarkMode] = useState(false);

  const switchMode = () => {
    setDarkMode((prev) => !prev);
  };

  const MDXComponents = {
    h1: (props: any) => (
      <Text
        as="h1"
        css={{
          mb: "$3",
          wordWrap: "break-word",
        }}
        mono
        {...props}
        size={{
          "@n": "h4",
          "@xs": "h3",
          "@sm": "h1",
        }}
      />
    ),
    h2: (props: any) => {
      const id = slugify(props.children).toLowerCase();
      return (
        <Text
          as="h2"
          mono
          id={id}
          size="h5"
          css={{
            wordWrap: "break-word",
            scrollMarginTop: "$sizes$22",
            mt: "$4",
            mb: "$2",
          }}
          {...props}
        />
      );
    },

    p: (props: any) => (
      <Text
        as="p"
        css={{
          color: darkMode ? "$gray200" : "$gray700",
          py: "$1",
          fontWeight: "$normal",
        }}
        {...props}
      />
    ),
    a: (props: any) => <Link {...props} />,
    code: (props: any) => <Code {...props} />,
    pre: (props: any) => {
      const codeBlock = props.children;
      if (codeBlock.props.className === "language-bash") {
        return (
          <CodeBlock lang="bash" gutters={true} control>
            {codeBlock.props.children}
          </CodeBlock>
        );
      }
      if (codeBlock.props.className === "language-limit") {
        return (
          <CodeBlock lang="jsx" gutters={true} control limit>
            {codeBlock.props.children}
          </CodeBlock>
        );
      }
      return (
        <CodeBlock lang="jsx" gutters={true} control>
          {codeBlock.props.children}
        </CodeBlock>
      );
    },
  };

  return (
    <ThemeContext.Provider value={{ darkMode, switchMode }}>
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeContext.Provider>
  );
};

export default MyApp;
