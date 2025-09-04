import { Card, Image, Link, Text, Box } from "@chakra-ui/react";
import WhatsAppButton from "@/components/WhatsAppButton";

interface TransportProps {
    title: string;
    description: string;
    info: string;
    imageUrl: string;
    about: string | null;
    href: string;
}

export default function InfoCard({ title, description, imageUrl, info, about, href }: TransportProps) {
    return (
        <Card.Root maxW="sm" overflow="hidden" border="none">
            <Box position="relative" height="400px" width="100%">
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
                    alt={title}
                    height="100%"
                    width="100%"
                    objectFit="contain"
                    position="relative"
                    zIndex={1}
                />
            </Box>

            <Link href={href}>
                <Card.Body gap="2">
                    <Card.Title>{title}</Card.Title>
                    <Card.Description>{description}</Card.Description>

                    {about && (
                        <Text textStyle="md" fontWeight="medium" letterSpacing="tight" mt="2">
                            {about}
                        </Text>
                    )}
                    <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                        {info}
                    </Text>
                </Card.Body>
            </Link>

            <Card.Footer gap="2">
                <WhatsAppButton name={title} title={null} />
            </Card.Footer>
        </Card.Root>
    );
}