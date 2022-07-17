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

export const InquiryButton: FC = () => {
    return (
        <div>
            <Button
                alignItems={'center'}
                justifyContent={'center'}
                rounded={'full'}
                bg={'yellow.400'}
                color={'black'}
                _hover={{
                    bg: 'blue.500',
                }}>
                <a target="_blank" href='https://forms.gle/V2ojtx2QBHnRzkS36'>お問合せフォーム</a>
            </Button>
        </div>
    );
};