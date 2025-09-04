'use client';

import { Box, Flex, Heading, Text, Link, Icon } from "@chakra-ui/react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Header from "@/components/Header";
import NextLink from "next/link";

export default function ContactPage() {
    return (
        <Box>
            <Header
                url="/images/contact.jpg"
                section="İletişim"
                text="Sorularınız mı var? Bizimle iletişime geçin!"
            />

            <Flex
                direction={{ base: "column", md: "row" }}
                gap={8}
                px={4}
                py={8}
                maxW="1200px"
                mx="auto"
                align="stretch" // děti se roztáhnou na stejnou výšku
            >
                {/* Box s kontakty */}
                <Box
                    flex="1"
                    bg="white"
                    p={6}
                    borderRadius="md"
                    boxShadow="md"
                    display="flex"
                    flexDirection="column"
                    gap={4}
                    fontSize="lg" // větší text
                >
                    <Heading fontSize="2xl" mb={4}>
                        İletişim Bilgileri
                    </Heading>

                    <Flex align="center" mb={2}>
                        <Icon as={MdPhone} w={5} h={5} mr={2} color="black" />
                        <Link as={NextLink} href="tel:+905421079467">
                            +90 542 107 94 67
                        </Link>
                    </Flex>

                    <Flex align="center" mb={2}>
                        <Icon as={FaWhatsapp} w={5} h={5} mr={2} color="#25D366" />
                        <Link
                            href="https://wa.me/905444805083"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="#25D366"
                        >
                            +90 542 107 94 67
                        </Link>
                    </Flex>

                    <Flex align="center" mb={2}>
                        <Icon as={MdEmail} w={5} h={5} mr={2} color="black" />
                        <Link href="mailto:muditakademi@outlook.com">muditakademi@outlook.com</Link>
                    </Flex>

                    <Flex align="center" mb={2}>
                        <Icon as={FaFacebook} w={5} h={5} mr={2} color="blue.600" />
                        <Link
                            href="https://www.facebook.com/nuketce"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="blue.600"
                        >
                            Nüketçe
                        </Link>
                    </Flex>

                    <Flex align="center" mb={2}>
                        <Icon as={FaInstagram} w={5} h={5} mr={2} color="pink.500" />
                        <Link
                            href="https://www.instagram.com/mudita_akademi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="pink.500"
                        >
                            @mudita_akademi
                        </Link>
                    </Flex>

                    <Flex align="flex-start" mb={2}>
                        <Icon as={MdLocationOn} w={5} h={5} mr={2} color="black" mt={1} />
                        <Text>
                            Akarca Mah. Kadıtarlası Sok. No 11-A Kdz.Ereğli / Zonguldak
                        </Text>
                    </Flex>
                </Box>

                {/* Mapa */}
                <Box flex="2" minH="400px">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5498.388275113891!2d31.414227074934907!3d41.28672434461193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409c44bd20e6471b%3A0xb7d6427eef2e1d1d!2sKad%C4%B1tarlas%C4%B1%20Sk.%2011%20A!5e0!3m2!1sen!2scz!4v1613910376873!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    />
                </Box>
            </Flex>
        </Box>
    );
}