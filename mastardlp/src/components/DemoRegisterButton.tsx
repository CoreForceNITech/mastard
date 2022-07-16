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

export const DemoRegisterButton: FC = () => {
    return (
        <div>
            <Button
                alignItems={'center'}
                justifyContent={'center'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                    bg: 'blue.500',
                }}>
                デモに登録する
            </Button>
        </div>
    );
};