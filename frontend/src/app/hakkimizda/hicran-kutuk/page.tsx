import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";

export default function AboutPage() {
    return (
        <div>
            <Header
                url={"/images/main.png"}
                section={"Hicran Kütük"}
                text={"Eğitim Danışmanıyı"}
            />

            <AboutMe
                heading="Ben Hicran Kütük, Mudita Akademi’nin Eğitim Danışmanıyım"
                text="Ben Mudita Akademi’de Eğitim Danışmanı olarak sizlere en iyi şekilde rehberlik ediyorum ve akademi içerisinde alacağınız hizmetlerin daha verimli, düzenli ve ihtiyaçlarınıza uygun olmasını sağlıyorum. Eğitimler, seanslar ve programlarla ilgili detaylı bilgi almak ya da kayıt işlemlerinizi gerçekleştirmek için bana iletişim numaralarından kolaylıkla ulaşabilirsiniz. Mudita Akademi’de sizi en doğru şekilde yönlendirmek için her zaman yanınızdayım."
                image="hicran.jpeg"
            />
        </div>
    );
}
