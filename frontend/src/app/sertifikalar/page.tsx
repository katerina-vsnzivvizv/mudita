import BubbleBox from "@/components/BubbleBox";
import Header from "@/components/Header";
import { Flex, Box} from "@chakra-ui/react";
import Team from "@/components/Team";

export default function CertificatesPage() {
    return (
        <div>
            <Header
                url={'/images/healthcare.jpg'}
                section={'Online sertifikalar'}
                text={'Tüm eğitimlerimiz sertifikalı ve Educert tarafından uluslararası akreditasyona sahiptir.'}
            />




            <BubbleBox
                text={'Tüm eğitimlerimiz sertifikalı ve Educert tarafından uluslararası akreditasyona sahiptir.'}
            />
        </div>
    )};
