import Header from '@/components/Header';
import { Box, Image, Flex, Link, Button, Heading } from '@chakra-ui/react';
import WhatsAppButton from "@/components/WhatsAppButton";
import Team from "@/components/Team";
import Courses from "@/components/Courses";

export default function Home() {
    return (

        <div>
            <Header url={'/images/main.png'} section={null} text={null}/>
            <Box py={20} px={4}>
                <Flex
                    direction={{ base: "column", md: "row" }}
                    align="center"
                    justify="center"
                    maxW="1200px"
                    mx="auto"
                    gap={10}
                >
                    <Image
                        src="/images/sertifika.webp"
                        alt="Počítač"
                        boxSize={{ base: "200px", md: "400px" }}
                        objectFit="contain"
                    />

                    <Box textAlign={{ base: "center", md: "left" }}>
                        <Heading
                            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
                            maxW={{ base: "90%", md: "600px" }}
                            mb={4}
                            lineHeight="1.2"
                        >
                            Daha iyi bir yaşam için bioenerjiyi keşfedin
                        </Heading>
                        <Heading fontSize={{ base: "md", md: "xl" }} mb={6}>
                            Enerjinizi ve dengenizi destekleyen ürünler ve teknikler sunuyoruz
                        </Heading>

                        <WhatsAppButton
                            name='hepsini'
                            title='Sizinle kişisel olarak konuşmak istiyorum'>
                        </WhatsAppButton>
                    </Box>
                </Flex>
            </Box>

            <Heading
                textAlign="center"
                textTransform="uppercase"
                size="5xl"
                gap="2"
                mb={8}
            >
                Kurslarımız
            </Heading>

            <Courses/>
            <Team/>

        </div>
    );
}