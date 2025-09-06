'use client';

import { useState } from "react";
import {Box, Flex, Link, Button, Image} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Ana Sayfa', path: '/' },
        { name: 'Eğitimler', path: '/egitimler' },
        { name: 'E-Devlet Onaylı Sertifika', path: '/sertifikalar' },
        { name: 'Hakkımızda', path: '/hakkimizda' },
        { name: 'Blog', path: '/blog' },
        { name: 'İletişim', path: '/iletisim' },
    ];

    return (
        <nav>
        <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            zIndex="1000"
            bg="transparent"
        >
            <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }}>
                <Image
                    src="/images/mudita.png"
                    alt="Mudita Akademi Logo"
                    position="absolute"
                    top="1rem"
                    left="1rem"
                    height="40px"
                    width="auto"
                    zIndex={10}
                    style={{
                        filter: "invert(100%) brightness(100%)",
                    }}
                />
            </Link>
            <Flex
                align="center"
                justify="center"
                p={4}
                position="relative"
            >
                {/* Desktop odkazy vycentrované */}
                <Flex display={["none", "flex"]} gap="6">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            as={NextLink}
                            href={item.path}
                            px="3"
                            fontWeight="600"
                            fontSize="lg"
                            color="white"
                            _hover={{
                                textDecoration: "none",
                                color: "blue.300",
                                transform: "scale(1.08)",
                                transition: "all 0.2s ease-in-out",
                            }}
                            _focus={{ boxShadow: "none", outline: "none" }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </Flex>

                {/* Hamburger jen na mobilu (vpravo) */}
                <Button
                    position="absolute"
                    right="1rem"
                    display={["block", "none"]}
                    onClick={() => setIsOpen(!isOpen)}
                    bg="transparent"
                    border="1px solid white"
                    color="white"
                    _hover={{ bg: "gray.700" }}
                >
                    ☰
                </Button>
            </Flex>

            {/* Mobile menu pod navbar */}
            {isOpen && (
                <Box
                    display={["block", "none"]}
                    bg="gray.800"
                    color="white"
                    px="4"
                    py="2"
                >
                    {navItems.map((item) => (
                        <Box key={item.path} py="2">
                            <Link
                                as={NextLink}
                                href={item.path}
                                fontWeight="600"
                                fontSize="lg"
                                color="white"
                                _hover={{ color: "blue.300" }}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
        </nav>
    );
}
