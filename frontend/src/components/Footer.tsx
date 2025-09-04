"use client";

import { Box, Flex, Stack, Link, Text, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
    return (
        <div>
        <Box>
            <svg
                viewBox="0 0 1440 320"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                width="100%"
                height="80"
                >
            <path
            fill="#1A202C"
            d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,144C672,149,768,203,864,224C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96V320H0Z"
            />
        </svg>
        </Box>
        <Box bg="#1A202C" color="white" py={10} px={{ base: 4, md: 20 }}>
            <Flex
                direction={{ base: "column", md: "row" }}
                justify="space-between"
                gap={{ base: 10, md: 16 }}
            >
                {/* 1. sloupec: Kontakty + Sociální sítě */}
                <Flex
                    direction="column"
                    flex="1"
                    mb={{ base: 8, md: 0 }}
                    gap={6}
                >
                    <Stack gap={2}>
                        <Text fontWeight="bold" fontSize="lg" color="white">
                            İletişim Bilgileri
                        </Text>
                        <Flex align="center">
                            <Icon as={MdPhone} mr={2} color="white" />
                            <Link as={NextLink} href="tel:+905421079467" color="white">
                                +90 542 107 94 67
                            </Link>
                        </Flex>
                        <Flex align="center">
                            <Icon as={MdEmail} mr={2} color="white" />
                            <Link as={NextLink} href="mailto:muditakademi@outlook.com" color="white">
                                muditakademi@outlook.com
                            </Link>
                        </Flex>
                        <Flex align="center">
                            <Icon as={MdLocationOn} mr={2} color="white" />
                            <Text color="white">Adres: İstanbul, Türkiye</Text>
                        </Flex>
                    </Stack>
                    <Stack gap={2}>
                        <Text fontWeight="bold" fontSize="lg" color="white">
                            Bizi Takip Edin
                        </Text>
                        <Flex>
                            <Link
                                as={NextLink}
                                href="https://www.facebook.com/nuketce"
                                target="_blank"
                                rel="noopener noreferrer"
                                mr={4}
                            >
                                <Icon as={FaFacebook} w={6} h={6} color="white" />
                            </Link>
                            <Link
                                as={NextLink}
                                href="https://www.instagram.com/mudita_akademi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                mr={4}
                            >
                                <Icon as={FaInstagram} w={6} h={6} color="white" />
                            </Link>
                            <Link
                                as={NextLink}
                                href="https://wa.me/905421079467"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon as={FaWhatsapp} w={6} h={6} color="white" />
                            </Link>
                        </Flex>
                    </Stack>
                </Flex>

                {/* 2. sloupec: Navigace */}
                <Stack gap={2} flex="1">
                    <Text fontWeight="bold" fontSize="lg" color="white">
                        Navigasyon
                    </Text>
                    <Link as={NextLink} href="/" color="white" _hover={{ textDecoration: "underline" }}>
                        Ana Sayfa
                    </Link>
                    <Link as={NextLink} href="/hakkimizda" color="white" _hover={{ textDecoration: "underline" }}>
                        Biz Kimiz?
                    </Link>
                    <Link as={NextLink} href="/sertifikalar" color="white" _hover={{ textDecoration: "underline" }}>
                        Online Sertifikalar
                    </Link>
                   {/*<Link as={NextLink} href="/blog" color="white" _hover={{ textDecoration: "underline" }}>*/}
                   {/*     Blog*/}
                   {/* </Link>*/}
                    <Link as={NextLink} href="/iletisim" color="white" _hover={{ textDecoration: "underline" }}>
                        İletişim
                    </Link>
                </Stack>

                {/* 3. sloupec: Bilgi */}
                <Stack gap={2} flex="1">
                    <Text fontWeight="bold" fontSize="lg" color="white">
                        Bilgi
                    </Text>
                    <Link as={NextLink} href="/" color="white" _hover={{ textDecoration: "underline" }}>
                        Ana Sayfa
                    </Link>
                    <Link as={NextLink} href="/sertifikalar" color="white" _hover={{ textDecoration: "underline" }}>
                        Online Sertifikalar
                    </Link>
                    <Link as={NextLink} href="/hakkimizda" color="white" _hover={{ textDecoration: "underline" }}>
                        Biz Kimiz?
                    </Link>
                    <Link as={NextLink} href="/banka-hesap-bilgilerimiz" color="white" _hover={{ textDecoration: "underline" }}>
                        Banka Hesap Bilgilerimiz
                    </Link>
                    <Link as={NextLink} href="/yardim-destek" color="white" _hover={{ textDecoration: "underline" }}>
                        Yardım & Destek
                    </Link>
                    <Link as={NextLink} href="/gizlilik-politikasi" color="white" _hover={{ textDecoration: "underline" }}>
                        Gizlilik Politikası
                    </Link>
                    <Link
                        as={NextLink}
                        href="/geri-odeme-ve-iade-politikasi"
                        color="white"
                        _hover={{ textDecoration: "underline" }}
                    >
                        Geri Ödeme ve İade Politikası
                    </Link>
                </Stack>
            </Flex>

            {/* Oddělení */}
            <Box borderTop="1px solid" borderColor="gray.600" my={8} />

            {/* Copyright */}
            <Text textAlign="center" fontSize="sm" color="white">
                © {new Date().getFullYear()} Mudita Akademi. Tüm hakları saklıdır.
            </Text>
        </Box>
        </div>
    );
}