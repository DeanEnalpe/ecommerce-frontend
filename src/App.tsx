import { useState } from 'react'
import './App.css'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import Navbar from './components/templates/NavBar/NavBar'
import Header from './components/templates/Header/Header';
import Home from './components/pages/Home/Home';

function App() {
  
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
  const toggleColorScheme = (value?: ColorScheme) =>
  setColorScheme(value || (colorScheme == 'dark' ? 'light' : 'dark'));

  return ( 
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
    <Home />
    </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App