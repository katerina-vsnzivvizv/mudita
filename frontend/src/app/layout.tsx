import {Provider} from "@/components/ui/provider";
import { defaultSystem } from "@chakra-ui/react"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function RootLayout(props: { children: React.ReactNode }) {
    const {children} = props
    return (
        <html suppressHydrationWarning>
        <body>
        <Provider>
            <Navbar />
            {children}
            <Footer/>
        </Provider>
        </body>
        </html>
    )
}