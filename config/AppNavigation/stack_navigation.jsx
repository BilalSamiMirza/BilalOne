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
import { NavigationContainer } from "@react-navigation/native";
import Splash from "../../Screens/Splash";
import Login from "../../Screens/Login";
import Signup from "../../Screens/Signup";
import Dashboard from "../../Screens/DashboardScreen";  
import Appointments from "../../Screens/AppointmentsScreen";
import MedicalRecordScreen from "../../Screens/MedicalRecordsScreen";
import Profile from "../../Screens/ProfileScreen";
import ScheduleAppointment from "../../Screens/ScheduleAppointmentScreen";
import AppointmentsScreen from "../../Screens/AppointmentConfirmedScreen";
import HelpSupportScreen from "../../Screens/HelpSupportScreen";
import findadoctor from "../../Screens/FindDoctorScreen";
import Notification from "../../Screens/NotificationScreen";
import Privacy from "../../Screens/PrivacySecurityScreen";
import EditProfile from "../../Screens/EditProfileScreen";

// import ImageCaptured from "../../Screens/Image_Captured"
// import counter from "../../Screens/CounterScreen" 

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Appointments" component={Appointments} />
      <Stack.Screen name="MedicalRecords" component={MedicalRecordScreen} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ScheduleAppointment" component={ScheduleAppointment} />
      <Stack.Screen name="AppointmentConfirmed" component={AppointmentsScreen} />
      <Stack.Screen name="HelpSupportScreen" component={HelpSupportScreen} />
      <Stack.Screen name="FindDoctor" component={findadoctor} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="EditProfile" component={EditProfile} />


      {/* <Stack.Screen name="ImageCaptured" component={ImageCaptured} /> */}
       {/* <Stack.Screen name="counter" component={counter} /> */}


    </Stack.Navigator>
  );
};

export default StackNavigation;