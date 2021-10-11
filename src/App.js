import "./App.css";
import HomePage from "./HomePage";
import { ChakraProvider } from "@chakra-ui/react";

function App({ pageProps }) {
  return (
    <div className="App">
      <ChakraProvider>
        <HomePage />
      </ChakraProvider>
    </div>
  );
}

export default App;
