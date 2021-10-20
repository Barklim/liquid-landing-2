import "./App.css";
import HomePage from "./HomePage";
import { ChakraProvider } from "@chakra-ui/react";
import { YMInitializer } from "react-yandex-metrika";

function App({ pageProps }) {
  return (
    <div className="App">
      <YMInitializer accounts={[85977485]} />
      <ChakraProvider>
        <HomePage />
      </ChakraProvider>
    </div>
  );
}

export default App;
