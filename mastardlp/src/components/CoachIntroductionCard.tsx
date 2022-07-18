import { FC } from 'react';
import {
    Heading,
    Image,
    Stack,
    Text,
    Box,
    Avatar,
} from '@chakra-ui/react';

export const CoachIntroductionCard: FC = () => {
    return (
        <div>
            <Box h="480px" w="300px" bg="#c9ffe8" boxShadow="xl" rounded="xl" p="10" overflow="hidden">
                <Box h="210px" mt="-6" mx="-6" rounded="xl" pos="relative">
                    <Image
                        // src={img.src}
                        fallbackSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwyqz9CAQtweBZh-kkQekbVQBqq5kE74Xmaw&usqp=CAU/280x210"
                    />
                </Box>

                <Stack>
                    <Box 
                    h="48px" 
                    overflow="hidden"
                    textAlign={'center'}
                    justifyContent={'center'}
                    >
                        <Heading color="gray.700" fontSize="lg" fontFamily="body">
                            自然言語処理
                        </Heading>
                    </Box>
                    <Box h="100px" overflow="auto">
                        <Text color="gray.500" fontSize="sm">
                            自然言語処理やLinked Open Data、行動センシング技術などのAIの要素技術を使って、人々のコラボレーションを支援する技術を研究・開発しています。
                            自然言語処理やLinked Open Data、行動センシング技術などのAIの要素技術を使って、人々のコラボレーションを支援する技術を研究・開発しています。
                        </Text>
                    </Box>
                </Stack>
                <Stack mt="6" direction="row" spacing="4" align="center">
                    <Avatar
                        src="http://www.srmt.nitech.ac.jp/img/member/siramatu2016.png"
                    />
                    <Stack direction="column" spacing="0" fontSize="sm">
                        <Text fontWeight="600">白松 俊</Text>
                        <Text color="gray.500">名古屋工業大学　教授</Text>
                    </Stack>
                </Stack>
            </Box>
        </div>
    );
};