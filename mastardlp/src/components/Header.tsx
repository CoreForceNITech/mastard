import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    SimpleGrid,
  } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import mastard from "../images/mastard-mini.png"

{/* 画面上部のリンク集→Boldに変更したい */}

const Links = ['法人向け', '大学生・大学院生向け', 'カリキュラム・プラン'];

{/* リンクの状態 */}
const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('blue.100', 'blue.100'),
    }}
    href={'#'}>
    {children}
  </Link>
);


{/* Header */}
export const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
        <Box bg = {useColorModeValue('white.100', 'red.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    {/* <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    /> */}

                    <HStack spacing={8} alignItems={'center'}>
                    <Link href='/'>
                          <Box>
                            <img src={mastard} alt="mastard" width={100} height={80}/>
                          </Box>
                        </Link>
                        <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}>
                        {/* {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))} */}
                        <Link href="/business">法人向けページ</Link>
                        <Link href="/coach">大学院生向けページ</Link>
                        <Link href="/curriculum">カリキュラム・プラン</Link>
                        <Link href="/aboutcompany">会社概要</Link>
                        </HStack>
                    </HStack>
                    
                    {/* Action */}
                    <Flex alignItems={'center'}>
                        <Button
                            variant={'solid'}
                            colorScheme = {'blue'}
                            size = {'sm'}
                            mr = {4}
                        >
                            Action
                        </Button>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>

                                <Avatar
                                size={'sm'}
                                src={
                                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                }
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Link 1</MenuItem>
                                <MenuItem>Link 2</MenuItem>
                                <MenuDivider />
                                <MenuItem>Link 3</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>

                    {/* {isOpen ? (
                        <Box pb={4} display={{ md: 'none' }}>
                            <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                            </Stack>
                        </Box>
                    ) : null} */}

                </Flex>
            </Box>
        </>
    )
}