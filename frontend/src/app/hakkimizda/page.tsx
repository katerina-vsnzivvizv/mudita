import BubbleBox from "@/components/BubbleBox";
import Header from "@/components/Header";
import { Flex, Box} from "@chakra-ui/react";
import Team from "@/components/Team";

export default function AboutPage() {
  return (
    <div>
        <Header
            url={'/images/healthcare.jpg'}
            section={'Hakkımızda'}
            text={'Biz, bioenerji ürünleri ve çözümleri sunan bir ekibiz. Amacımız, yaşam kalitenizi artırmak ve enerji dengenizi desteklemek için güvenilir ve kaliteli ürünler sağlamaktır.'}
        />




        <BubbleBox
            text={
                <>
                    Bugün Mudita Akademi’nin kurucusu olarak; Bioenerji, İlahi Boyutta Kuantum Düşünce Tekniği, EFT, Pandül Çalışmaları ve kendi geliştirdiğim özgün enerji sistemi Huana ile bireylerin hayatında dönüşüm yaratıyorum. Hem online hem de yüz yüze verdiğim eğitimler ve bireysel seanslar sayesinde danışanlarımın enerjisel blokajlarını temizlemelerine, zihinsel farkındalık kazanmalarına ve hayatlarında pozitif değişiklikler yaratmalarına yardımcı oluyorum. Bu çalışmalardan alınan güçlü geri dönüşler ve yüksek memnuniyet, yaptığım işin insanlara gerçek anlamda katkı sağladığını gösteriyor.<br /><br />
                    Mudita Akademi bir kişisel gelişim akademisidir. Kişilerin mutlu, sağlıklı yaşamalarına ve hayat amaçlarını bulmalarına katkı sağlamayı hedefleyen bir akademidir. Mudita kelime olarak başkasının mutluluğu ile mutlu olabilme sanatı demektir. Amacımız ve vizyonumuz bu kelimenin içinde saklıdır. 2019 yılında kurulmuştur.
                </>
            }
        />

        <Flex
            direction={{ base: "column", md: "row" }}
            gap={6}
            align='stretch'
        >
            <Box
                w={{ base: "100%", md: "40%" }}
                flex="1"
            >
                <BubbleBox
                    heading="Mudita Akademi’de Neler Sunuyorum?"
                    text={
                        <>
                            ✔ Bioenerji Eğitimi ve Seansları<br />
                            ✔ Kuantum Düşünce Teknikleri<br />
                            ✔ EFT (Duygusal Özgürleşme Tekniği)<br />
                            ✔ Pandül ile Enerji Dengeleme<br />
                            ✔ Huana Enerji Sistemi Eğitimi (Özgün Enerji Yöntemim)
                        </>
                    }
                />
            </Box>

            <Box
                w={{ base: "100%", md: "60%" }}
                flex="1"
            >
                <BubbleBox
                    heading="Misyonum"
                    text={
                        <>
                            Her bireyin içindeki potansiyeli ortaya çıkarmasına, enerjisini arındırmasına ve yaşamını sevgi, huzur ve bollukla şekillendirmesine rehberlik etmek.<br /><br />
                            Siz de bu yolculuğa katılmak, eğitimlerime dahil olmak veya bireysel enerji seansı almak isterseniz, Mudita Akademi sizin için burada.
                        </>
                    }
                />
            </Box>

        </Flex>

       <Team/>


    </div>
  );
}
