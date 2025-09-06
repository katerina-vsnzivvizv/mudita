"use client";

import {useEffect, useState} from "react";
import LazyImage from "@/components/LazyImage";
import {Grid, Spinner, Flex, Box} from "@chakra-ui/react";
import Header from "@/components/Header";
import BubbleBox from "@/components/BubbleBox";

export default function BlogGrid() {
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchImages() {
            try {
                const res = await fetch("https://muditaakademi.com/php/images.php");
                const data: string[] = await res.json();

                const cleaned = data.map((url) =>
                    url.replace(/\\/g, "").replace(/^\/blog\//, "/images/blog/")
                );
                setImages(cleaned);
            } catch (err) {
                console.error("Chyba při načítání obrázků:", err);
                setImages([]);
            } finally {
                setLoading(false);
            }
        }

        fetchImages();
    }, []);

    return (
        <Box overflowX="hidden">
            <Header
                url={'/images/trips.png'}
                section={'Blog'}
                text={'Etkinlik fotoğrafları'}
            />

            <Flex direction="column" align="center" px={4} py={8}>
                <BubbleBox
                    text={'Çevrim içi kurslarımızın yanı sıra, yüz yüze buluşabileceğimiz birçok etkinlik de düzenliyoruz. Bu buluşmalar her zaman unutulmaz bir deneyim ve güçlü bir enerjiyle dolu.'}
                />

                {loading ? (
                    <Flex justify="center" w="100%" py={20}>
                        <Spinner size="xl" />
                    </Flex>
                ) : (
                    <Grid
                        templateColumns={{
                            base: "1fr",
                            md: "repeat(2, 1fr)",
                            lg: "repeat(3, 1fr)",
                        }}
                        gap={6}
                        justifyContent="center"
                        justifyItems="center"
                        maxW="7xl"
                        w="100%"
                    >
                        {images.map((img, idx) => (
                            <LazyImage key={idx} src={img} alt={`Blog image ${idx + 1}`} />
                        ))}
                    </Grid>
                )}
            </Flex>
        </Box>
    );
}
