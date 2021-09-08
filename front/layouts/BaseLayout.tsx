import { Center, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";

type BaseLayoutProps = {
  children: JSX.Element;
};

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
       <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,900;1,400;1,600&display=swap" rel="stylesheet"
       />
      </Head>
      <Flex width='100vw'
      //maxW={{xl:'1200px'}}
      flexDirection="column">
        <Flex
          width="100vw"
          justifyContent="center"
          align="center"
          py={6}
          px={[4,4,20]}
          bg="lemon.500"
          direction='column'
        >
          <Text>
            🎉😃 hi welcome to our url shortener service !🌍😋
          </Text>
          {/* <Text>
            some other etxt here
          </Text> */}
        </Flex>
        <Center
        flexDirection="column"
        minH="80vh"
        width='100%'
        justify="space-between"
        px ={[4,4,20]}
        >
          {children}
        </Center>
      </Flex>
    </>
  );
};

export default BaseLayout;
