import "./App.css";
import HomePage from "./HomePage";
import { ChakraProvider } from "@chakra-ui/react";

console.log("v.0.0.3");

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
