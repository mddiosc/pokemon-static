import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: theme?.colors.gray900.value,
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        padding: "0px 20px",
        width: "100%",
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="icono app"
        width={70}
        height={70}
      />
      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Link>
          <Text h4 color="white">
            Favoritos
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};
