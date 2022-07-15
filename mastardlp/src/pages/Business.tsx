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
import { Header } from '../components/Header';

export function Business() {
    return (
        <Container maxW={'7xl'} p="12">
<<<<<<< HEAD
            <div className="recruit">
                <Header />
            </div>
=======
>>>>>>> 068fe37f0c29749233a7fe12156c236dee93faec

<Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: '#F4D428',
                zIndex: -1,
              }}>
              社内教育も、大学院生人材の採用も。
            </Text>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            ・専門力の高い大学院生が、社内の企業研修をサポート。<br />
            ・カリキュラムは社員の興味に合ったものを選択可能。<br />
            ・会社の底力アップと、大学院生の採用を少ないコストで両立可能。<br />
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Create Project
            </Button>
            <Button rounded={'full'}>How It Works</Button>
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

<<<<<<< HEAD
=======
            <div className="recruit">
                <Header />
            </div>
>>>>>>> 068fe37f0c29749233a7fe12156c236dee93faec
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

export default Business;