import { FC } from 'react';
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
import { InquiryButton } from "./InquiryButton";
import logo from '../images/manabale_logo.png';

export const Recruit: FC = () => {
    return (
        <div>
            <Box border='2px' borderColor='blue.400' textAlign={'center'}
                justifyContent={'center'}>
                <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }}>
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'full'} maxW={'lg'}>
                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                <br />{' '}
                                <Text color={'blue.400'} as={'span'}>
                                    mastardで学ぶ・採用する
                                </Text>{' '}
                            </Heading>
                            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                                私たちmastardはまだ始まったばかり。<br />
                                詳しく知りたい方は、ぜひお問合わせフォームへ。
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
                                alt={'Manabale Image'}
                                objectFit={'contain'}
                                src={
                                    logo
                                }
                            />
                        </Stack>
                    </Flex>
                </Stack>
            </Box>
        </div>
    );
};