import { FC, ReactNode } from 'react';
import { Link } from '@chakra-ui/react';

type NavLinkProps = {
  route: string;
  children: ReactNode;
};

const NavLink: FC<NavLinkProps> = ({ children, route }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
    }}
    href={route}
    color={'white'}
  >
    {children}
  </Link>
);

export default NavLink;
