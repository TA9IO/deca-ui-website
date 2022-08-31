import Link from "next/link";
import { Box, Grid, Text, Container, Button, styled } from "@deca-ui/react";
import { GitHub, Heart, Twitter, Menu } from "react-feather";
import { useState, useEffect } from "react";

interface NavbarProps {
  blockPosition?: boolean;
  whiteBg?: boolean;
}

const Navbar = ({ blockPosition, whiteBg }: NavbarProps) => {
  const [scrollPosition, setScrollPositon] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPositon(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      css={{
        height: blockPosition ? "$sizes$19" : "$n",
      }}
    >
      <Box
        css={{
          position: "fixed",
          top: 0,
          right: 0,
          bg: whiteBg ? "$white" : scrollPosition > 0 ? "$white" : "$bg",
          width: "100%",
          height: "$19",
          zIndex: "$max",
          boxShadow: scrollPosition > 0 ? "$default" : "none",
          transition: "$default",
        }}
      >
        <Container px="md">
          <Grid.Container
            css={{ height: "$19" }}
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              n={6}
              md={3}
              lg={2}
              css={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <img src="/icon.svg" alt="Deca UI" width="35px" height="35px" />
              <Text
                as="h6"
                weight="bold"
                mono
                css={{
                  ml: "$2",
                }}
              >
                DecaUI
              </Text>
            </Grid>
            <Grid
              css={{
                "@n": {
                  display: "none",
                },
                "@md": {
                  display: "flex",
                  justifyContent: "center",
                  gap: "$5",
                },
              }}
              md={6}
              lg={8}
            >
              <Text
                as="p"
                weight="medium"
                mono
                css={{
                  "& a": {
                    transition: "$default",
                    color: "$text",
                    textDecoration: "none",
                    "&:hover": {
                      color: "$primary",
                    },
                  },
                }}
              >
                <Link href="/docs/guide/installation">Documentation</Link>
              </Text>
              <Text as="p" weight="medium" mono>
                Products
              </Text>
              <Text as="p" weight="medium" mono>
                About Us
              </Text>
            </Grid>
            <Grid
              n={6}
              md={3}
              lg={2}
              css={{
                "@n": {
                  display: "none",
                },
                "@md": {
                  display: "flex",
                  gap: "$2",
                  justifyContent: "flex-end",
                },
              }}
            >
              <Button variant="ghost" icon={<GitHub />} />
              <Button variant="ghost" icon={<Twitter />} />
              <Button color="secondary" variant="flat" icon={<Heart />}>
                Sponsor
              </Button>
            </Grid>
            {/* For Mobile */}
            <Grid
              n={6}
              css={{
                "@n": {
                  display: "flex",
                  justifyContent: "flex-end",
                },
                "@md": {
                  display: "none",
                },
              }}
            >
              <Button variant="flat" icon={<Menu />} />
            </Grid>
          </Grid.Container>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
