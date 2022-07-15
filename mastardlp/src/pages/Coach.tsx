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

export function Coach() {
    return (
        <Container maxW={'7xl'} p="12">
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
                        alt={'Login Image'}
                        objectFit={'cover'}
                        src={
                            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                        }
                    />
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