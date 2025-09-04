"use client";

import { Link, Text, Box, Flex } from "@chakra-ui/react";
import NextLink from "next/link";

export default function NotFoundPage() {
    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            minH="100vh"
            bg="gray.50"
            px={4}
        >
            <Box textAlign="center">
                <Text fontSize="6xl" fontWeight="bold" mb={4}>
                    404
                </Text>
                <Text fontSize="xl" mb={6}>
                    Üzgünüz, aradığınız sayfa bulunamadı.
                </Text>
                <Link
                    as={NextLink}
                    href="/"
                    color="teal.500"
                    fontWeight="bold"
                    textDecoration="underline"
                >
                    Ana Sayfaya Dön
                </Link>
            </Box>
        </Flex>
    );
}