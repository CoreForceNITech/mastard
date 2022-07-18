import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Container,
    Box,
} from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Recruit } from "../components/Recruit";
import { Footer } from '../components/Footer';
import { DemoRegisterButton } from "../components/DemoRegisterButton";

export function Coach() {
    return (
        <Container maxW={'7xl'} p="12">
            <div className="recruit">
                <Header />
            </div>

            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'2xl'}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                            <br />{' '}
                            <Text color={'black'} as={'span'}>
                                社会人に最先端の知識を説明してお金を稼ぎませんか?
                            </Text>{' '}
                        </Heading>
                        <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                            社会人へのマンツーマン講義で、お金を稼ぎませんか?
                        </Text>
                        <Stack align={'center'} justify={'center'} direction={{ base: 'column', md: 'row' }} spacing={4}>
                            <div>
                                <DemoRegisterButton />
                            </div>
                        </Stack>
                    </Stack>
                </Flex>
            </Stack>

            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'2xl'}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                            <br />{' '}
                            <Text color={'black'} as={'span'}>
                                mastardだからできること
                            </Text>{' '}
                        </Heading>
                        <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                            社会人へのマンツーマン講義だからこそ、ただお金を稼ぐだけで終わらない体験価値がある。
                        </Text>
                        <Stack align={'center'} justify={'center'} direction={{ base: 'column', md: 'row' }} spacing={4}>
                            <div>
                                <DemoRegisterButton />
                            </div>
                        </Stack>
                    </Stack>
                </Flex>
            </Stack>
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'2xl'}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                            <br />{' '}
                            <Text color={'black'} as={'span'}>
                                mastardの講師からのコメント
                            </Text>{' '}
                        </Heading>
                        <Stack align={'center'} justify={'center'} direction={{ base: 'column', md: 'row' }} spacing={4}>
                            <div>
                                <DemoRegisterButton />
                            </div>
                        </Stack>
                    </Stack>
                </Flex>
            </Stack>
            <div className="recruit">
                <Recruit />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </Container>
    );
}

export default Coach;