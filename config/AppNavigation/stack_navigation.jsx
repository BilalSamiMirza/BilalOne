// import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Home from "../../Screens/Home";
// import About from "../../Screens/About";
// import Contact from "../../Screens/Contact";

// const Stack = createNativeStackNavigator();

// const StackNavigation = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         headerStyle: { backgroundColor: "#007AFF" },
//         headerTintColor: "#fff",
//         headerTitleAlign: "center",
//       }}
//     >
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="About" component={About} />
//       <Stack.Screen name="Contact" component={Contact} />
//     </Stack.Navigator>
//   );
// };

// export default StackNavigation;



import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../Screens/Login";
import Signup from "../../Screens/Signup";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default StackNavigation;