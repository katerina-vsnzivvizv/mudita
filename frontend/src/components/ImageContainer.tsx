import {Container} from "@chakra-ui/react";

type ImageContainerProps = {
    imageUrl?: string,
    children?: React.ReactNode;
};

export default function ImageContainer({ imageUrl, children }: ImageContainerProps) {
    return (
        <Container
            maxW="full"
            py={12}
            px={4}
            position="relative"
            backgroundImage={`url('${imageUrl || '/images/izmir-bg.png'}')`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bg: "rgba(255,255,255,0.15)",
                zIndex: 0,
            }}
            zIndex={1}
        >
            {children}
        </Container>
    );
}
