import { FC, ReactNode, useCallback } from 'react';
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import NavLink from './NavLink.component';

import useLogin from 'src/hooks/login.hook';

const Links = [
  { label: 'Campeonatos', route: '/tournaments' },
  { label: 'Times', route: '/teams' },
];

type ActionBarProps = {
  children: ReactNode;
};

const ActionBar: FC<ActionBarProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { logout } = useLogin();

  const handleLogout = useCallback(() => {
    logout();
  }, []);

  return (
    <>
      <Box bg={'#25855A'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <NavLink route={'/'}>UniChamps</NavLink>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map(link => (
                <NavLink key={link.route} route={link.route}>
                  {link.label}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button color={'green'} size={'sm'} mr={4} onClick={handleLogout}>
              Logout
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(link => (
                <NavLink key={link.route} route={link.route}>
                  {link.label}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>{children}</Box>
    </>
  );
};

export default ActionBar;
