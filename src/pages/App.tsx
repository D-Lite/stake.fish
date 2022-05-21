import { Navbar } from '../components/index';
import { Box } from '@chakra-ui/react';

import {
  Routes,
  Route
} from "react-router-dom";

import Home from './Home';
import Exchange from './Exchange';

function App() {
  return (
    <>
      <Box minH={"100vh"} maxW={"100vw"}>
        <Navbar />
        <Routes>
          <Route path="/exchange/:id" element={ <Exchange /> } />
          <Route path="/" element={ <Home /> } />
        </Routes>
      </Box>
    </>
  );
}

export default App;
