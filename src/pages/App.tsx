import { Footer, Navbar } from '../components';
import { Box } from '@chakra-ui/react';

import {
  Routes,
  Route
} from "react-router-dom";
import Exchange from './Exchange';
import Home from './Home';
import Error from './Error';



function App() {
  return (
    <>
      <Box minH={"100vh"} maxW={"100vw"}>
        <Navbar />
        <Routes>
          <Route path="/exchange/:id" element={ <Exchange /> } />
          <Route path="/" element={ <Home /> } />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Box>
    </>
  );
}

export default App;
