import * as React from "react";
import "./styles/styles.scss"
import { ChakraProvider } from "@chakra-ui/react"
import AppRouter from "./Route/AppRouter";
import { Provider } from "react-redux";
import Store from "./redux/store/ConfigureStore"

class App extends React.Component {
  render() {
    return (
      <ChakraProvider>
        <div className="App">
<<<<<<< Updated upstream
          <Provider store={store}>
=======
          <Provider store={Store}>
>>>>>>> Stashed changes
            <AppRouter />
          </Provider>
        </div>
      </ChakraProvider>
    )
  }
}

export default App;