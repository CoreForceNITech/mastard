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
import { Link } from 'react-router-dom';

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
                <a target="_blank" href='https://forms.gle/vdWcCeCgv6FHFNFX8'>デモに登録する</a>
            </Button>
        </div>
    );
};