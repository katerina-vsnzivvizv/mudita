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

                <InfoCard title='Eda Çetinbaş' description='Kurucu'
                          imageUrl='/images/about/eda.jpeg' info='Sahibi'
                          about=''
                          href='hakkimizda/eda-kara'/>

                <InfoCard title='Nüket Kara' description='Bioenerjist / Huana'
                          imageUrl='/images/about/img.png' info='Hoca'
                          about=''
                          href='hakkimizda/nuket-kara'
                />

                <InfoCard title='Hicran' description='Manager'
                          imageUrl='/images/about/img.png' info='Hoca'
                          about=''
                          href='hakkimizda/hicran'
                />

            </Grid>
        </div>

    )
}
