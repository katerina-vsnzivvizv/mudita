'use client'
import {Button} from "@chakra-ui/react";

type WhatsAppButtonProps = {
    name: string | null;
    title: string | null;
};

export default function WhatsAppButton({name, title}: WhatsAppButtonProps) {
    const whatsappUrl = `https://wa.me/905444805083?text=${encodeURIComponent(
        "Merhaba, "+ name +" hakkında bilgi almak istiyorum."
    )}`;

    return (
        <Button
            variant="surface"
            colorPalette="green"
            onClick={() => window.open(whatsappUrl, "_blank")}
        >
            {title ?? 'WhatsApp’tan bana yazın'}
        </Button>
    );
}
