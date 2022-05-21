import { Footer, Navbar } from '../components';
import { Box } from '@chakra-ui/react';

import {
  Routes,
  Route
} from "react-router-dom";
import Exchange from './Exchange';
import Home from './Home';



function App() {
  return (
    <>
      <Box minH={"100vh"} maxW={"100vw"}>
        <Navbar />
        <Routes>
          <Route path="/exchange/:id" element={ <Exchange /> } />
          <Route path="/" element={ <Home /> } />
        </Routes>
        <Footer />
      </Box>
    </>
  );
}

export default App;
