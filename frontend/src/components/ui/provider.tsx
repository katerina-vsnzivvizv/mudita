"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { system } from '@/lib/themes/theme'
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
