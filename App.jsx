import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./config/AppNavigation/stack_navigation";
import { Provider } from 'react-redux';
import store from './android/app/src/main/redux/store';
import CounterScreen from './Screens/CounterScreen';

const App = () => {
  return (
    <NavigationContainer>
        <Provider store={store}>
      <StackNavigation />
      {/* <CounterScreen /> */}
    </Provider>
    </NavigationContainer>
  );
};

export default App;