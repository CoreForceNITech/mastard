import { FC } from 'react';
import {
    Stack,
    Text,
} from '@chakra-ui/react';
import { InquiryButton } from '../components/InquiryButton';

export const Subjects: FC = () => {
    return (
        <div>
            <Stack p="4" m="4">
                {/* 科目 */}
                <Stack direction="row" alignItems="center">
                    <Text fontWeight="semibold">知能情報</Text>
                </Stack>
                {/* 科目説明 */}
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    justifyContent="space-between">
                    <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
                        知能の原理を究明し、知能処理を実現するモデル、アルゴリズム、プログラムに関する技術を深めることができます。
                    </Text>
                    {/* 問い合わせボタン */}
                    <div>
                        <InquiryButton />
                    </div>
                </Stack>
            </Stack>
        </div>
    );
};