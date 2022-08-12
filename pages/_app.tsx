import "../styles/globals.scss"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
	config: {
		//useSystemColorMode: true,
		initialColorMode: "light",
	},
})

const MyApp = ({ Component, pageProps }) => (
	<ChakraProvider theme={theme}>
		<Component {...pageProps} />
	</ChakraProvider>
)

export default MyApp
