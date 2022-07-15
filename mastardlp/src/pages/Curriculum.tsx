import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Container,
    Box,
    Avatar,
    Wrap,
} from '@chakra-ui/react';

export function Curriculum() {
    return (
        <Container maxW={'7xl'} p="12">

            <Heading color="gray.700" fontSize="3xl" fontFamily="body">
                コースを探す
            </Heading>

            <Stack p="4" m="4">
                <Stack direction="row" alignItems="center">
                    <Text fontWeight="semibold">知能情報</Text>
                </Stack>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    justifyContent="space-between">
                    <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
                        知能の原理を究明し、知能処理を実現するモデル、アルゴリズム、プログラムに関する技術を深めることができます。
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }}>
                        <Button
                            rounded={'full'}
                            bg={'yellow.400'}
                            color={'black'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            お問合せフォームへ
                        </Button>
                    </Stack>
                </Stack>
            </Stack>

            <Wrap p="6">
                {/* ここからカリキュラムのボックス1 */}
                <Box h="480px" w="300px" bg="#c9ffe8" boxShadow="xl" rounded="xl" p="10" overflow="hidden">
                    <Box h="210px" mt="-6" mx="-6" rounded="xl" pos="relative">
                        <Image
                            // src={img.src}
                            fallbackSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwyqz9CAQtweBZh-kkQekbVQBqq5kE74Xmaw&usqp=CAU/280x210"
                        />
                    </Box>

                    <Stack>
                        <Box 
                        h="48px" 
                        overflow="hidden"
                        textAlign={'center'}
                        justifyContent={'center'}
                        >
                            <Heading color="gray.700" fontSize="lg" fontFamily="body">
                                自然言語処理
                            </Heading>
                        </Box>
                        <Box h="100px" overflow="auto">
                            <Text color="gray.500" fontSize="sm">
                                自然言語処理やLinked Open Data、行動センシング技術などのAIの要素技術を使って、人々のコラボレーションを支援する技術を研究・開発しています。
                                自然言語処理やLinked Open Data、行動センシング技術などのAIの要素技術を使って、人々のコラボレーションを支援する技術を研究・開発しています。
                            </Text>
                        </Box>
                    </Stack>
                    <Stack mt="6" direction="row" spacing="4" align="center">
                        <Avatar
                            src="http://www.srmt.nitech.ac.jp/img/member/siramatu2016.png"
                        />
                        <Stack direction="column" spacing="0" fontSize="sm">
                            <Text fontWeight="600">白松 俊</Text>
                            <Text color="gray.500">名古屋工業大学　教授</Text>
                        </Stack>
                    </Stack>
                </Box>

                {/* ここからカリキュラムのボックス2 */}
                <Box h="480px" w="300px" bg="#F7FFC9" boxShadow="xl" rounded="xl" p="10" overflow="hidden">
                    <Box h="210px" mt="-6" mx="-6" rounded="xl" pos="relative">
                        <Image
                            // src={img.src}
                            fallbackSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwyqz9CAQtweBZh-kkQekbVQBqq5kE74Xmaw&usqp=CAU/280x210"
                        />
                    </Box>

                    <Stack>
                        <Box 
                        h="48px" 
                        overflow="hidden"
                        textAlign={'center'}
                        justifyContent={'center'}
                        >
                            <Heading color="gray.700" fontSize="lg" fontFamily="body">
                                自然言語処理，談話解析，議論支援，情報可視化
                            </Heading>
                        </Box>
                        <Box h="100px" overflow="auto">
                            <Text color="gray.500" fontSize="sm">
                                行動センシング技術などのAIの要素技術を使って、人々のコラボレーションを支援する技術を研究・開発しています。
                            </Text>
                        </Box>
                    </Stack>
                    <Stack mt="6" direction="row" spacing="4" align="center">
                        <Avatar
                            src="http://www.srmt.nitech.ac.jp/img/member/siramatu2016.png"
                        />
                        <Stack direction="column" spacing="0" fontSize="sm">
                            <Text fontWeight="600">白松 俊</Text>
                            <Text color="gray.500">名古屋工業大学　教授</Text>
                        </Stack>
                    </Stack>
                </Box>
            </Wrap>



            <Box border='2px' borderColor='blue.400'>
                <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                <br />{' '}
                                <Text color={'blue.400'} as={'span'}>
                                    mastardで学ぶ・採用する
                                </Text>{' '}
                            </Heading>
                            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                                私たちmastardはまだ始まったばかり。詳しく知りたい方は、ぜひお問合わせフォームへ。
                            </Text>
                            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                                <Button
                                    rounded={'full'}
                                    bg={'yellow.400'}
                                    color={'black'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    お問合せフォームへ
                                </Button>
                            </Stack>
                        </Stack>
                    </Flex>
                    <Flex flex={1}>
                        <Image
                            alt={'Login Image'}
                            objectFit={'cover'}
                            src={
                                'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                            }
                        />
                    </Flex>
                </Stack>
            </Box>
        </Container>
    );
}

export default Curriculum;