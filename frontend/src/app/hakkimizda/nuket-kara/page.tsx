import BubbleBox from "@/components/BubbleBox";
import Header from "@/components/Header";
import { Flex, Image, Box } from "@chakra-ui/react";

export default function AboutPage() {
    return (
        <div>
            <Header
                url={'/images/healthcare.jpg'}
                section={'Nüket Kara'}
                text={'Bioenerjist'}
            />
            <Flex
                maxW="6xl"
                mx="auto"
                py={8}
                gap={6}
                direction={{ base: "column", md: "row" }} // mobil: pod sebou, desktop: vedle sebe
                align="flex-start"
            >
                <Box flex={{ base: "100%", md: "40%" }}>
                    <Image
                        src="/images/about/img.png"
                        alt="Nüket Kara"
                        borderRadius="lg"
                        w="100%"
                        objectFit="cover"
                    />
                </Box>

                <Box flex={{ base: "100%", md: "60%" }}>
                    <BubbleBox
                        heading={'Ben Nüket Kara, 30 yıl boyunca hukuk alanında insanlara rehberlik ettim.'}
                        text={'2020 yılından bu yana ise kişisel gelişim, enerji çalışmaları ve spiritüel dönüşüm alanında uzmanlaştım. Bu alandaki yolculuğum, insanlara sadece zihinsel değil; ruhsal ve enerjisel anlamda da bütünsel şifa sunma amacıyla başladı.'}
                    />
                </Box>
            </Flex>
        </div>
    );
}
