'use client';

import { Flex, Link } from "@chakra-ui/react";
import NextLink from 'next/link';

export default function Navbar() {
    const navItems = [
        { name: 'Ana Sayfa', path: '/' },
        { name: 'Eğitimler', path: '/egitimler' },
        { name: 'E-Devlet Onaylı Sertifika', path: '/sertifikalar' },
        { name: 'Hakkımızda', path: '/hakkimizda' },
      //  { name: 'Blog', path: '/blog' },
        { name: 'İletişim', path: '/iletisim' },
    ];

    return (
        <Flex
            gap="6"
            align="center"
            justify="center"
            p={4}
            bg="transparent"
            boxShadow="none"
            position="absolute"
            top="0"
            left="0"
            width="100%"
            zIndex="1000"
        >
            {navItems.map((item) => (
                <Link
                    key={item.path}
                    as={NextLink}
                    href={item.path}
                    p={2}
                    fontWeight="600"
                    fontSize="lg"
                    color="white"
                    _hover={{
                        textDecoration: 'none',
                        color: 'blue.300',
                        transform: 'scale(1.08)',
                        transition: 'all 0.2s ease-in-out',
                    }}
                    _focus={{ boxShadow: "none", outline: "none" }}
                >
                    {item.name}
                </Link>
            ))}
        </Flex>
    );
}