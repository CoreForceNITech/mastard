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
import { Link } from "react-router-dom";
import logo from '../images/manabale_logo.png';
import { Recruit } from "../components/Recruit";
import { Header } from '../components/Header';

export function Start() {
    return (
        <Container maxW={'10xl'} p="12">
            <div className="recruit">
                <Header />
            </div>
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                            <br />{' '}
                            <Text color={'black'} as={'span'}>
                                最先端知識のインプットと専門人材の採用をお手軽な値段で両立
                            </Text>{' '}
                        </Heading>
                        <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                            理系の学問を学ぶ大学院生とのマンツーマン講義で、最先端の知識を簡単アップデート
                        </Text>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                            <Button
                                rounded={'full'}
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                デモに登録する
                            </Button>
                        </Stack>
                    </Stack>
                </Flex>
                <Flex flex={1}>
                    <Image
                        alt={'Manabale Image'}
                        objectFit={'cover'}
                        src={
                            logo
                        }
                    />
                </Flex>
            </Stack>

            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                            <br />{' '}
                            <Text color={'black'} as={'span'}>
                                mastardだからできること
                            </Text>{' '}
                        </Heading>
                        <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                            大学院生から学ぶこと　良さは一つだけじゃありません。<br />
                            mastardでしかできない、手軽でインパクトの大きい採用体験をご紹介！
                        </Text>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                            <Button
                                rounded={'full'}
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                料金プランを見る
                            </Button>
                        </Stack>
                    </Stack>
                </Flex>
            </Stack>

            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                            <br />{' '}
                            <Text color={'blue.400'} as={'span'}>
                                サブスクリプションでも柔軟なサポートを
                            </Text>{' '}
                        </Heading>
                        <Text fontSize={{ base: 'md', lg: 'lg' }} color={'blue.400'}>
                            私たちは、柔軟なサービスとサポートの提供を心がけております。ぜひお試しください！
                        </Text>
                    </Stack>
                </Flex>
            </Stack>

            <div className="recruit">
                <Recruit />
            </div>
            <Link to={`/Business/`}>法人向けページ</Link>
            <Link to={`/Coach/`}>大学院生向けページ</Link>
            <Link to={`/Curriculum/`}>カリキュラム・プラン</Link>
            <Link to={`/AboutCompany/`}>会社概要</Link>
        </Container>
    );
}

export default Start;
