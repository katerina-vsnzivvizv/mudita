import {Heading, Text, Card, Stack} from "@chakra-ui/react";

type HeaderProps = {
    heading?: string | null;
    text: React.ReactNode | null;
}


export default function BubbleBox({heading, text}: HeaderProps) {

    return (
        <Stack m={{ base: 0, md: 4 }}>
            <Card.Root size="sm" bg="rgba(255, 255, 255, 0.8)" p={{ base: 0, md: 10 }} m={7}>
                <Card.Header>
                    <Heading>{heading}</Heading>
                </Card.Header>
                <Card.Body>
                    <Text whiteSpace="pre-line" >{text}</Text>
                </Card.Body>
            </Card.Root>
        </Stack>

    );

}