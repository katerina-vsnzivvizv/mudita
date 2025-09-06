"use client";

import CourseCard from "@/components/CourseCard";
import { useEffect, useState } from "react";
import {Grid, GridItem, Container, Box, Spinner, Link} from "@chakra-ui/react";

type MediaItem = {
    id: string;
    url?: string;
};

type Course = {
    id: number;
    title: string;
    description: string;
    price: number;
    media: MediaItem[];
    url?: string;
};

export default function Courses() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCourses() {
            try {
                const res = await fetch("https://muditaakademi.com/php/courses.php");
                const data: Course[] = await res.json();
                setCourses(data);
            } catch (err) {
                console.error("Chyba při načítání kurzů:", err);
                setCourses([]);
            } finally {
                setLoading(false);
            }
        }

        fetchCourses();
    }, []);

    if (loading) {
        return (
            <Box textAlign="center" py={20}>
                <Spinner size="xl" />
            </Box>
        );
    }

    return (
        <Container maxW="full" py={12} px={4} position="relative">
            {courses.length > 0 ? (
                <Grid
                    templateColumns={{
                        base: "1fr",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)",
                    }}
                    gap={6}
                    mx="auto"
                    maxW="7xl"
                    justifyContent="center"
                >
                    {courses.map((course) => (
                        <GridItem key={course.id}>
                            <CourseCard course={course} />
                        </GridItem>
                    ))}
                </Grid>
            ) : (
                <Box textAlign="center" py={10} fontSize="lg">
                    Kursları bulamadık. Buraya geçin:{" "}
                    <Link color="blue.500" href="https://www.shopier.com/muditadanismanlik">
                        Shopier
                    </Link>
                </Box>
            )}
        </Container>
    );
}