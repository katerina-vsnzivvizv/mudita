import { Box, Heading, Text, Image } from "@chakra-ui/react";

type HeaderProps = {
    url: string | null;
    section: string | null;
    text: string | null;
}

export default function Header({ url, section, text }: HeaderProps) {
    return (
        <Box position="relative" width="100%" minHeight="250px" overflow="hidden">
            <Box
                as="header"
                position="relative"
                width="100%"
                minHeight="250px"
                backgroundImage={`url(${url ?? '/images/beach.webp'})`}
                backgroundSize="cover"
                backgroundPosition="center"
                color="white"
                display="flex"
                alignItems="end"
                justifyContent="flex-start"
                textAlign="left"
                px={4}
            >
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="rgba(0, 0, 0, 0.5)"
                    zIndex={1}
                />

                <Box
                    position='relative'
                    zIndex={2}
                    mb={10}
                >
                    <Heading fontSize={{ base: '2xl', md: '5xl' }} mb={2} ml={10}>
                        {section ?? 'Bioenerji'}
                    </Heading>
                    <Text mb={5} ml={10}>
                        {text ?? 'Bedeninizi ve zihninizi dengeleyin ve enerjinizi keşfedin'}
                    </Text>
                </Box>
            </Box>

            <Box
                position="absolute"
                bottom={0}
                left={0}
                w="100%"
                overflow="hidden"
                lineHeight="0"
                zIndex={4}
            >
                <svg
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    width="100%"
                    height="80"
                >
                    <path
                        fill="#ffffff"
                        d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,144C672,149,768,203,864,224C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96V320H0Z"
                    />
                </svg>
            </Box>
        </Box>
    );
}