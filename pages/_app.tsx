import "../styles/globals.css"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
	config: {
		useSystemColorMode: true,
		initialColorMode: "dark",
	},
	components: {
		Button: {
			// 3. We can add a new visual variant
			variants: {
				thinBorder: {
					borderWidth: "1px",
				},
				clear: {
					maxHeight: "1.5rem",
					borderRadius: "0",
				},
			},
		},
	},
})

const MyApp = ({ Component, pageProps }) => {
	/*const [colorScheme, setColorScheme] = useState<ColorScheme>("dark")
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))*/
	return (
		<ChakraProvider theme={theme}>
			{/* <ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={toggleColorScheme}
			>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{ colorScheme }}
				> */}
			<Component {...pageProps} />
			{/* </MantineProvider>
			</ColorSchemeProvider> */}
		</ChakraProvider>
	)
}

export default MyApp
