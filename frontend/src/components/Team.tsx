import {Grid, Heading} from '@chakra-ui/react';
import InfoCard from "@/components/InfoCard";


export default function Team() {
    return (

        <div>
            <Heading
                textAlign="center"
                textTransform="uppercase"
                size="5xl"
                gap="2"
                mb={8}
            >
                Kadromuz
            </Heading>


            <Grid
                templateColumns={{
                    base: "1fr",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)"
                }}
                gap={6}
                mx="auto"
                maxW="7xl"
                justifyItems="center"

            >

                <InfoCard title='Eda Çetinbaş' description='Kişisel Gelişim'
                          imageUrl='/images/about/eda.jpeg' info='Kurucu'
                          about=''
                          href='hakkimizda/eda-cetinbas'/>

                <InfoCard title='Nüket Kara' description='Bioenerjist / Huana'
                          imageUrl='/images/about/nuket.jpg' info='Hoca'
                          about=''
                          href='hakkimizda/nuket-kara'
                />

                <InfoCard title='Hicran Kütük' description='Eğitim Danışmanı'
                          imageUrl='/images/about/hicran.jpeg' info='Danışman'
                          about=''
                          href='hakkimizda/hicran-kutuk'
                />

            </Grid>
        </div>

    )
}
