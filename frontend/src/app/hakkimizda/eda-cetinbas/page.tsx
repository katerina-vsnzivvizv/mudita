import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";

export default function AboutPage() {
    return (
        <div>
            <Header
                url={"/images/main.png"}
                section={"Eda Kara"}
                text={"Kurucu"}
            />

            <AboutMe
                heading="Ben Eda Çetinbaş, Mudita Akademi’nin Kurucusuyum"
                text="Ben Mudita Akademi’nin kurucusuyum ve kişisel gelişim alanında çok yönlü bir uzman olarak hizmet veriyorum. Theta Healing uygulayıcısı ve eğitmeni olarak, Anlayarak Hızlı Okuma eğitimiyle bireylerin zihinsel potansiyelini geliştirmelerine katkı sağlıyorum. Yaşam Koçluğu, Bioenerji ve Kuantum Düşünce Tekniği gibi farklı alanlarda aktif olarak çalışıyor ve danışanlarımın içsel dönüşümüne rehberlik ediyorum. Aynı zamanda KDZ. Ereğli Ticaret ve Sanayi Odası Kadın Girişimciler Kurulu üyesi olarak kadınların iş hayatındaki gücünü desteklemeye yönelik projelerde rol alıyorum. Geniş bilgi birikimim ve deneyimimle hem bireysel hem toplumsal farkındalık yaratmayı amaçlıyorum."
                image="eda.jpeg"
            />
        </div>
    );
}
