import React from "react";
import { Flex, Box, Image } from "@chakra-ui/react";
import BubbleBox from "./BubbleBox";

type HeaderProps = {
    heading: string;
    text: React.ReactNode;
    image: string;
};

export default function AboutMe({ heading, text, image }: HeaderProps) {
    return (
        <Flex
            maxW="6xl"
            mx="auto"
            py={8}
            gap={6}
            direction={{ base: "column", md: "row" }}
            align="flex-start"
        >
            <Box flex={{ base: "100%", md: "40%" }}>
                <Image
                    src={`/images/about/${image}`}
                    alt="Nüket Kara"
                    borderRadius="lg"
                    w="100%"
                    objectFit="cover"
                />
            </Box>

            <Box flex={{ base: "100%", md: "60%" }}>
                <BubbleBox heading={heading} text={text} />
            </Box>
        </Flex>
    );
}
