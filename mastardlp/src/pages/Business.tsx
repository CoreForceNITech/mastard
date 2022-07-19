import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Container,
    Box,
    useBreakpointValue,
} from '@chakra-ui/react';
import { Recruit } from "../components/Recruit";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { InquiryButton } from "../components/InquiryButton";
import logo from '../images/manabale_logo.png';
import through from '../images/manabale_logo_through.png';
import syuma_lesson from '../images/syuma_lesson.png';
import mastard_white from '../images/mastard_white.png';


export function Business() {
    return (
        <Container maxW={'10xl'} p="12">
            <div className="recruit">
                <Header />
            </div>


            <Box bg={"gray.100"} textAlign={'center'}
                justifyContent={'center'}>
                <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }}>
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                <br />{' '}
                                <Text color={'gray.700'} as={'span'}>
                                社内教育も、大学院生人材の採用も。
                                </Text>{' '}
                            </Heading>
                            <Text fontSize={{ base: 'sm', lg: 'lg' }} color={'gray.500'}>
                                大学院生から学ぶこと 良さは一つだけじゃありません<br />
                                mastardでしかできない、手軽でインパクトの大きい
                                採用体験をご紹介！
                            </Text>
                            <Stack align={'center'} justify={'center'} direction={{ base: 'column', md: 'row' }} spacing={3}>
                                <div>
                                    <InquiryButton />
                                </div>
                            </Stack>
                        </Stack>
                    </Flex>
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Image
                                alt={'Syuma Lesson'}
                                objectFit={'contain'}
                                src={
                                    syuma_lesson
                                }
                            />
                        </Stack>
                    </Flex>
                </Stack>
            </Box>

            <Box textAlign={'center'}
                justifyContent={'center'}>
                <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }}>
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
                                <br />{' '}
                                <Text color={'gray.700'} as={'span'}>
                                    mastardならではの強み
                                </Text>{' '}
                            </Heading>
                            <Text fontSize={{ base: 'sm', lg: 'lg' }} color={'gray.500'}>
                            ・専門力の高い大学院生が、社内の企業研修をサポート。<br />
                            ・カリキュラムは社員の興味に合ったものを選択可能。<br />
                            ・会社の底力アップと、大学院生の採用を少ないコストで両立可能。<br />
                            </Text>
                            <Stack align={'center'} justify={'center'} direction={{ base: 'column', md: 'row' }} spacing={3}>
                                <div>
                                    <InquiryButton />
                                </div>
                            </Stack>
                        </Stack>
                    </Flex>
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Image
                                alt={'Mastard White'}
                                objectFit={'contain'}
                                src={
                                    mastard_white
                                }
                            />
                        </Stack>
                    </Flex>
                </Stack>
            </Box>

            <Box bg={"#EEAC48"} textAlign={'center'}
                justifyContent={'center'}>
                <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }}>
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Image
                                alt={'Manabale Through'}
                                objectFit={'contain'}
                                src={
                                    through
                                }
                            />
                        </Stack>
                    </Flex>

                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Heading fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
                                <br />{' '}
                                <Text color={"gray"} as={'span'}>
                                    mastardならではの強み
                                </Text>
                            </Heading>
                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                <Text color={'white'} as={'span'}>
                                    詳しく知りたいを支える理系学生
                                </Text>
                            </Heading>
                            <Text color={'white'} fontSize={{ base: 'sm', lg: 'lg' }} >
                                大学院生から学ぶこと 良さは一つだけじゃありません<br />
                                mastardでしかできない、手軽でインパクトの大きい
                                採用体験をご紹介！
                            </Text>
                            <Stack align={'center'} justify={'center'} direction={{ base: 'column', md: 'row' }} spacing={3}>
                                <div>
                                    <InquiryButton />
                                </div>
                            </Stack>
                        </Stack>
                    </Flex>
                </Stack>
            </Box>

            <Box p={4} />

            <div className="recruit">
                <Recruit />
            </div>
            <div className="footer">
                <Footer />
            </div>

        </Container>
    );
}

export default Business;