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
                text={
                    <>
                        Mudita Akademi olarak, katılımcılarımıza hem <strong>katılım belgeleri</strong> hem de <strong>ücretli e-Devlet onaylı ve uluslararası geçerliliğe sahip sertifikalar</strong> sunmaktayız. Eğitim programlarımız, bireyin hem kişisel hem de profesyonel gelişimini desteklemeyi amaçlamaktadır. <strong>Temel seviye sertifikalı programlarımız:</strong>
                        <ul style={{ paddingLeft: '20px', marginTop: '20px' }}>
                            <li> ✓ EFT</li>
                            <li> ✓ Bioenerji</li>
                            <li> ✓ Pandül</li>
                            <li> ✓ İlahi Boyutta Kuantum</li>
                            <li> ✓ Theta Healing</li>
                            <li> ✓ Eğiticinin Eğitimi</li>
                            <li> ✓ Yapay Zekâ</li>
                            <li> ✓ Excel</li>
                            <li> ✓ Anlayarak Hızlı Okuma</li>
                        </ul>
                        <br/>
                        Her bir eğitim, alanında uzman eğitmenler tarafından verilmekte olup, edinilen sertifikalarla hem yurt içinde hem de yurt dışında yetkinliğinizi belgelendirme imkânı sağlanmaktadır.
                    </>
                }
            />

        </div>
    )};
