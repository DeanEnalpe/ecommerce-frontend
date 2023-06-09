import { useState } from 'react';
import {
  AppShell,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import Navbar from '../../templates/NavBar/NavBar';
import HeaderSearch from '../../templates/Header/Header';

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar/>
        
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        
        <HeaderSearch links={[]} />
      
      }
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}