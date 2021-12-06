import { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import ActionBar from '../../components/ActionBar/ActionBar.component';

const HomeView: FC = () => {
  return (
    <ActionBar>
      <Heading mt={10}>Home!</Heading>
    </ActionBar>
  );
};

export default HomeView;
