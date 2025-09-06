"use client";

import { useEffect, useState } from "react";
import { Box, Image, Link, Flex, Spinner } from "@chakra-ui/react";

interface InstaPost {
    id: string;
    caption: string;
    media_url: string;
    permalink: string;
}

export default function InstagramCarousel() {
    const [posts, setPosts] = useState<InstaPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await fetch(`/api/instagram`);
                const data: InstaPost[] = await res.json();
                setPosts(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    if (loading) return <Spinner size="xl" />;

    return (
        <Box overflowX="auto" whiteSpace="nowrap" py={4} px={2}>
            <Flex gap={4}>
                {posts.map(post => (
                    <Link key={post.id} href={post.permalink} display="inline-block" minW="200px">
                        <Image
                            src={post.media_url}
                            alt={post.caption || "Instagram post"}
                            borderRadius="md"
                            objectFit="cover"
                            w="200px"
                            h="200px"
                            transition="transform 0.3s"
                            _hover={{ transform: "scale(1.05)" }}
                        />
                    </Link>
                ))}
            </Flex>
        </Box>
    );
}
