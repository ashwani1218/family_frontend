import * as React from "react";
import "./styles/styles.scss"
import { ChakraProvider } from "@chakra-ui/react"
import AppRouter from "./Route/AppRouter";
import { Provider } from "react-redux";
import store from "./redux/store/ConfigureStore";
import 'antd/dist/antd.css';

class App extends React.Component {
  render() {
    return (
      <ChakraProvider>
        <div className="App">
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </div>
      </ChakraProvider>
    )
  }
}

export default App;