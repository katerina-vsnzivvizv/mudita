import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";

export default function AboutPage() {
    return (
        <div>
            <Header
                url={"/images/main.png"}
                section={"Nüket Kara"}
                text={"Bioenerjist"}
            />

            <AboutMe
                heading="Ben Nüket Kara, 30 yıl boyunca hukuk alanında insanlara rehberlik ettim."
                text="2020 yılından bu yana kişisel gelişim, enerji çalışmaları ve spiritüel dönüşüm alanında uzmanlaştım. Mudita Akademi bünyesinde eğitmen olarak yer almakta ve spiritüel gelişim alanında derinlemesine çalışmalar yürütmekteyim. Huana, Bioenerji ve İlahi Boyutta Kuantum gibi enerjisel şifa yöntemlerinde eğitmen olarak uzmanlaştım ve aynı zamanda farklı spiritüel alanlarda hem uygulayıcı hem de eğitmen rolüyle bireylerin içsel yolculuklarına rehberlik ediyorum. Mudita Akademi çatısı altında, ruhsal farkındalığı artırmaya yönelik eğitim ve seanslarla hizmet vermeye devam ediyorum."
                image="nuket.jpg"
            />
        </div>
    );
}
