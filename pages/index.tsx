import {
	Box,
	Icon,
	Center,
	Flex,
	HStack,
	Image,
	Spacer,
	Text,
	VStack,
	Skeleton,
	SkeletonCircle,
} from "@chakra-ui/react"
import { BsSuitHeart } from "react-icons/bs"
import { RiMessage2Fill } from "react-icons/ri"
import { AiOutlineExclamationCircle } from "react-icons/ai"
import { IoMdPaperPlane } from "react-icons/io"
import React, { useEffect } from "react"

const Marble = () => {
	const [loaded, setLoaded] = React.useState(false)
	useEffect(() => {
		setTimeout(() => {
			console.log("loading...")
			if (!loaded) {
				setLoaded(true)
				console.log("loaded")
			}
		}, 2000)
	}, [setLoaded, loaded])
	return (
		<Center h="100vh" bg="black">
			<Box h="650px" bg="white" w="300px">
				<Phone loaded={loaded} />
			</Box>
		</Center>
	)
}

const Phone = ({ loaded }) => {
	const blue = "#007AFF"
	const textColor = "gray.900"
	const gray = "gray"
	return (
		<>
			<Flex py={3} px={4}>
				<Text px="0" color={blue} fontSize="sm">
					Share
				</Text>
				<Spacer />
				<Text px="0" color={blue} fontSize="sm">
					Close
				</Text>
			</Flex>
			<Flex py={2} px={4} mt="1" mb="2">
				<SkeletonCircle isLoaded={loaded} w="35px" h="35px">
					<Image
						src="https://pps.whatsapp.net/v/t61.24694-24/56340206_428180251080709_1639700479321571328_n.jpg?ccb=11-4&oh=01_AVyWGoQ8_WrxqFlYJZIpNjLodkVyG_NqI4iLQ4V99wcY3w&oe=63032811"
						borderRadius={"50%"}
						w="35px"
						h="35px"
						alt="profile"
					></Image>
				</SkeletonCircle>
				<Box ml="3">
					<Flex>
						<Skeleton h={"14px"} isLoaded={loaded}>
							<Text color={textColor} fontSize="12px">
								waldgeist
							</Text>
						</Skeleton>

						<HStack ml="2">
							<Box
								bg={textColor}
								borderRadius={"50%"}
								w="2px"
								h="2px"
							></Box>
						</HStack>
						<Text color={blue} fontSize="12px" ml="2">
							Follow
						</Text>
					</Flex>
					<Flex>
						<Skeleton h="12px" isLoaded={loaded}>
							<Text color={"gray"} fontSize="9px">
								Aug 10, 2022
							</Text>
						</Skeleton>
						<HStack mx="1">
							<Box
								bg={gray}
								borderRadius={"50%"}
								w="2px"
								h="2px"
							></Box>
						</HStack>
						<Skeleton h="12px" isLoaded={loaded}>
							<Text color={gray} fontSize="9px">
								Gärdet
							</Text>
						</Skeleton>
					</Flex>
				</Box>
				<Spacer />
				<Box ml="3">
					<Center>
						<Icon
							as={BsSuitHeart}
							color={textColor}
							fontSize="15px"
						/>
					</Center>
					<Center w="100%">
						<Skeleton h="14px" isLoaded={loaded}>
							<Text
								color={textColor}
								fontSize="11px"
								w="18px"
								textAlign="center"
							>
								1
							</Text>
						</Skeleton>
					</Center>
				</Box>
				<Box ml="3">
					<Center>
						<Icon
							as={RiMessage2Fill}
							color={blue}
							fontSize="15px"
						/>
					</Center>
					<Center w="100%">
						<Skeleton h="14px" isLoaded={loaded}>
							<Text
								color={textColor}
								fontSize="11px"
								w="18px"
								textAlign="center"
							>
								2
							</Text>
						</Skeleton>
					</Center>
				</Box>
			</Flex>
			<Skeleton isLoaded={loaded}>
				<Image
					src="/kitchen.jpg"
					h="421.933px"
					alt="MarbleImage"
				></Image>
			</Skeleton>
			<Flex px={3} py={3}>
				<VStack align="left" w="88%">
					<Skeleton h="20px" isLoaded={loaded} w="88%">
						<Text color={textColor} w="88%">
							Before
						</Text>
					</Skeleton>
					<Flex p="0" m="0">
						<Skeleton h="16px" isLoaded={loaded}>
							<Text color={blue} fontSize={12}>
								#kids
							</Text>
						</Skeleton>
						<HStack mx="1">
							<Box
								bg={textColor}
								borderRadius={"50%"}
								w="2px"
								h="2px"
							></Box>
						</HStack>
						<Skeleton h="16px" isLoaded={loaded}>
							<Text color={textColor} fontSize={12}>
								38 visits
							</Text>
						</Skeleton>
					</Flex>
				</VStack>
				<Spacer />
				<Icon
					as={AiOutlineExclamationCircle}
					color={textColor}
					fontSize="18"
				></Icon>
			</Flex>
			<Flex px={3} w="100%">
				<Box
					w="88%"
					py="1.5"
					px="3"
					borderWidth="1.4px"
					borderColor={"gray.300"}
					borderRadius="xl"
					overflow="hidden"
				>
					<Text color={"gray.300"}>Add comment...</Text>
				</Box>
				<Spacer />
				<HStack>
					<Center>
						<Icon
							as={IoMdPaperPlane}
							color="gray.400"
							fontSize={"25px"}
						></Icon>
					</Center>
				</HStack>
			</Flex>
		</>
	)
}

export default Marble
