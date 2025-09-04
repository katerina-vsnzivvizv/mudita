import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
    theme: {
        tokens: {
            fonts: {
            //    heading: { value: `'Poppins', sans-serif` },
            //    body: { value: `'Poppins', sans-serif` },
             //   heading: { value: `'Lobster', cursive` },
             //   body: { value: `'Lobster', cursive` },
                heading: { value: `'Inter', sans-serif` },
                body: { value: `'Inter', sans-serif` },
            },
        },
    },
})
