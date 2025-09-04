import { Card, Image, Box, Text, Link, Button } from "@chakra-ui/react"

interface MediaItem {
    id: string
    url?: string
}

interface CourseProps {
    id: number
    title: string
    description: string
    price: number
    media: MediaItem[]
    url?: string
}

export default function CourseCard({ course }: { course: CourseProps }) {
    const courseUrl = course.url ?? `https://www.shopier.com/${course.id}`
    const imageUrl = course.media?.[0]?.url ?? '/images/beaches/beach.webp'

    return (
        <Card.Root
            maxW="sm"
            overflow="hidden"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="500px"
            _hover={{
                textDecoration: 'none',
                filter: 'brightness(1.05)',
                boxShadow: '0 0 10px rgba(0,0,0,0.2)',
                transform: 'scale(1.02)',
                transition: 'all 0.3s ease',
            }}
        >
            <Link
                href={courseUrl}
                style={{ textDecoration: 'none', display: 'block' }}
            >
            <Box
                rel="noopener noreferrer"
                flex="1"
                display="flex"
                flexDirection="column"
                style={{ minHeight: 0 }}
            >
                <Box position="relative" height="200px" width="100%">
                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        height="100%"
                        backgroundImage={`url(${imageUrl})`}
                        backgroundSize="cover"
                        backgroundPosition="center"
                        filter="blur(15px)"
                        transform="scale(1.1)"
                        zIndex={0}
                    />
                    <Image
                        src={imageUrl}
                        alt={course.title}
                        height="100%"
                        width="100%"
                        objectFit="contain"
                        position="relative"
                        zIndex={1}
                    />
                </Box>
                <Card.Body
                    gap="2"
                    flex="1"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    minH={0}
                >
                    <Card.Title dangerouslySetInnerHTML={{ __html: course.title }} />
                    <Box flex="1" minH={0}>
                        <Text
                            style={{
                                display: "-webkit-box",
                                WebkitLineClamp: 5,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                            dangerouslySetInnerHTML={{ __html: course.description }}
                        />
                        Devamı oku →
                    </Box>
                </Card.Body>
            </Box>
            </Link>
            <Card.Footer gap="2">
                <Link href={`https://www.shopier.com/${course.id}`} style={{ textDecoration: 'none' }}>
                    <Button variant="surface" colorPalette='grey'>Kurs Detayları</Button>
                </Link>
                <Link href="https://www.shopier.com/muditadanismanlik" style={{ textDecoration: 'none' }}>
                    <Button variant="surface" colorPalette='green'>Tüm Kurslar</Button>
                </Link>
            </Card.Footer>
        </Card.Root>
    )
}