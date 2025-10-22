import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./config/AppNavigation/stack_navigation";

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;