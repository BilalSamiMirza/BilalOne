// import React from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const Signup = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Get Started</Text>
//       <Text style={styles.subtitle}>by creating a free account</Text>

//       <TextInput style={styles.input} placeholder="Full name" placeholderTextColor="#888" />
//       <TextInput style={styles.input} placeholder="Valid email" placeholderTextColor="#888" />
//       <TextInput style={styles.input} placeholder="Phone number" placeholderTextColor="#888" />
//       <TextInput style={styles.input} placeholder="Strong password" secureTextEntry placeholderTextColor="#888" />

//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Next</Text>
//       </TouchableOpacity>

//       <Text style={styles.footer}>
//         Already a member?{" "}
//         <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
//           Login
//         </Text>
//       </Text>
//     </View>

    
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f7f3fa",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "700",
//     color: "#e75cc4ff",
//   },
//   subtitle: {
//     fontSize: 14,
//     color: "#666",
//     marginBottom: 30,
//   },
//   input: {
//     width: "100%",
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     padding: 15,
//     marginVertical: 8,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   button: {
//     width: "100%",
//     backgroundColor:"#e75cc4ff",
//     borderRadius: 10,
//     padding: 15,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   footer: {
//     marginTop: 15,
//     color: "#333",
//   },
//   link: {
//     color: "#e75cc4ff",
//     fontWeight: "bold",
//   },
// });

// export default Signup;









// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const Signup = () => {
//   const navigation = useNavigation();

//   // 🧠 States for input
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // ⚙️ Replace with your laptop's local IPv4 address
//   const API_URL = "http://192.168.1.5:5000/api/signup"; // Change to your IP

//   const handleSignup = async () => {
//     if (!firstName || !lastName || !email || !password) {
//       Alert.alert("Error", "Please fill all fields!");
//       return;
//     }

//     try {
//       const res = await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ firstName, lastName, email, password }),
//       });

//       const data = await res.json();
//       console.log("Signup Response:", data);

//       if (res.status === 200) {
//         Alert.alert("Success", "Account created successfully!");
//         navigation.navigate("Login");
//       } else {
//         Alert.alert("Error", data.message || "Signup failed");
//       }
//     } catch (error) {
//       console.log(error);
//       Alert.alert("Error", "Unable to connect to server");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Get Started</Text>
//       <Text style={styles.subtitle}>by creating a free account</Text>

//       <TextInput style={styles.input} placeholder="First name" value={firstName} onChangeText={setFirstName} placeholderTextColor="#888" />
//       <TextInput style={styles.input} placeholder="Last name" value={lastName} onChangeText={setLastName} placeholderTextColor="#888" />
//       <TextInput style={styles.input} placeholder="Valid email" value={email} onChangeText={setEmail} placeholderTextColor="#888" />
//       <TextInput style={styles.input} placeholder="Strong password" secureTextEntry value={password} onChangeText={setPassword} placeholderTextColor="#888" />

//       <TouchableOpacity style={styles.button} onPress={handleSignup}>
//         <Text style={styles.buttonText}>Next</Text>
//       </TouchableOpacity>

//       <Text style={styles.footer}>
//         Already a member?{" "}
//         <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
//           Login
//         </Text>
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f7f3fa",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "700",
//     color: "#e75cc4ff",
//   },
//   subtitle: {
//     fontSize: 14,
//     color: "#666",
//     marginBottom: 30,
//   },
//   input: {
//     width: "100%",
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     padding: 15,
//     marginVertical: 8,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   button: {
//     width: "100%",
//     backgroundColor: "#e75cc4ff",
//     borderRadius: 10,
//     padding: 15,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   footer: {
//     marginTop: 15,
//     color: "#333",
//   },
//   link: {
//     color: "#e75cc4ff",
//     fontWeight: "bold",
//   },
// });

// export default Signup;
















// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { API_URL } from "../config/AppNavigation/config";

// const Signup = () => {


//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Signup</Text>

//       <TextInput
//         placeholder="First Name"
//         value={firstName}
//         onChangeText={setFirstName}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Last Name"
//         value={lastName}
//         onChangeText={setLastName}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//         style={styles.input}
//       />

//       <TouchableOpacity style={styles.button} onPress={handleSignup}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate("Login")}>
//         <Text style={styles.link}>Already have an account? Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f3ff" },
//   title: { fontSize: 28, fontWeight: "bold", color: "#000", marginBottom: 20 },
//   input: { width: "80%", borderWidth: 1, borderColor: "#000", borderRadius: 10, padding: 10, marginBottom: 15, backgroundColor: "#fff" },
//   button: { backgroundColor: "#6a1b9a", paddingVertical: 12, paddingHorizontal: 60, borderRadius: 10 },
//   buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
//   link: { marginTop: 15, color: "#6a1b9a", fontWeight: "600" },
// });

// export default Signup;





















// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const API_URL = 'http://192.168.43.226:7000'; // Your PC IP and backend port

// export default function SignupScreen({ navigation }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [checked, setChecked] = useState(false);

//   const handleSignup = async () => {
//     Alert.alert('Signup', 'Signup functionality to be implemented');
    
//     if (!name || !email || !password) {
//       Alert.alert('Error', 'Please fill all fields');
//       return;
//     }
//     if (!checked) {
//       Alert.alert('Error', 'Please agree to Terms and Conditions');
//       return;
//     }

//     try {
//       const res = await fetch(`${API_URL}/api/auth/signup`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, email, password }),
//       });
//       const data = await res.json();
//       Alert.alert('Signup', data.message);
//       if (res.ok) {
//         // Navigate to login or home after signup
//         navigation.navigate('Login');
//       }
//     } catch (err) {
//       console.error(err);
//       Alert.alert('Error', 'Cannot connect to server');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Get Started</Text>
//       <Text style={styles.subtitle}>by creating a free account.</Text>

//       <View style={styles.inputContainer}>
//         <Icon name="person-outline" size={20} color="#999" style={styles.icon} />
//         <TextInput
//           placeholder="Full Name"
//           value={name}
//           onChangeText={setName}
//           style={styles.input}
//           placeholderTextColor="#999"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Icon name="mail-outline" size={20} color="#999" style={styles.icon} />
//         <TextInput
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           style={styles.input}
//           placeholderTextColor="#999"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Icon name="lock-closed-outline" size={20} color="#999" style={styles.icon} />
        // <TextInput
        //   placeholder="Password"
        //   value={password}
        //   onChangeText={setPassword}
        //   secureTextEntry
        //   style={styles.input}
        //   placeholderTextColor="#999"
        // />
//       </View>

//       {/* Checkbox */}
//       <View style={styles.checkboxContainer}>
//         <TouchableOpacity
//           style={styles.checkbox}
//           onPress={() => setChecked(!checked)}
//         >
//           {checked && <View style={styles.checked} />}
//         </TouchableOpacity>
//         <Text style={styles.checkboxText}>
//           I agree to the Terms and Conditions
//         </Text>
//       </View>

//       <TouchableOpacity style={styles.button} onPress={handleSignup}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>

//       <Text style={styles.footer}>
//         Already a member?{' '}
//         <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
//           Login
//         </Text>
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#fff' },
//   title: { fontSize: 28, fontWeight: 'bold', marginTop: 20 },
//   subtitle: { fontSize: 16, color: '#666', marginBottom: 20 },
//   inputContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginBottom: 10, paddingHorizontal: 10 },
//   icon: { marginRight: 5 },
//   input: { flex: 1, height: 40 },
//   checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
//   checkbox: { width: 20, height: 20, borderWidth: 1, borderColor: '#000', marginRight: 8, justifyContent: 'center', alignItems: 'center' },
//   checked: { width: 12, height: 12, backgroundColor: '#000' },
//   checkboxText: { color: '#333' },
//   button: { backgroundColor: '#000', padding: 12, borderRadius: 8, width: '100%', alignItems: 'center', marginVertical: 10 },
//   buttonText: { color: '#fff', fontWeight: 'bold' },
//   footer: { marginTop: 10 },
//   link: { color: 'blue' },
// });

    // import React from 'react';
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { ScrollView } from 'react-native';
// const API_URL = 'http://192.168.43.226:7000'; // Your PC IP and backend port

// const SignUpScreen = () => {
//     const navigation = useNavigation();
//   const [firstName, setFirstName] = useState("");
//   // const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");


//   const handleSignup = async () => {
//     if (!firstName || !lastName || !email || !password) {
//       Alert.alert("Error", "Please fill all fields");
//       return;
//     }

//     try {
//       const response = await fetch(`${API_URL}/signup`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ firstName, lastName, email, password }),
//       });
      


//       const data = await response.json();
//       console.log("Signup response:", data);

//       if (response.ok) {
//         Alert.alert("Success", "Signup successful!");
//         navigation.navigate("Login");
//       } else {
//         Alert.alert("Error", data.message || "Signup failed");
//       }
//     } catch (error) {
//       console.log("Signup error:", error);
//       Alert.alert("Error", "Something went wrong");
//     }
//   };














import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'https://bilalone-backend.onrender.com'; // Your PC IP and backend port

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [checked, setChecked] = useState(false);

 const handleSignup = async () => {
  if (!name || !email || !password) {
    Alert.alert('Error', 'Please fill all fields');
    return;
  }

  try {
    const res = await fetch(`${API_URL}/api/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    
    const data = await res.json();
    
    if (res.ok) {
      Alert.alert('Success', data.message);
      navigation.navigate('Login'); // Navigate to Login after successful signup
    } else {
      Alert.alert('Error', data.message);
    }
  } catch (err) {
    console.error(err);
    Alert.alert('Error', 'Cannot connect to server');
  }
};
  

 return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Create Your Account</Text>
        <Text style={styles.subtitle}>Manage your health effortlessly</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
           <TextInput
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholderTextColor="#999"
        />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
          placeholderTextColor="#999"
        />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#999"
        />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            placeholderTextColor="#999"
            secureTextEntry
          />
        </View>
        
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={handleSignup}
        >
          <Text style={styles.primaryButtonText}>Sign Up</Text>
        </TouchableOpacity>
        
        <Text style={styles.termsText}>
          By creating an account, you agree to our{'\n'}
          <Text style={styles.linkText}>Terms of Service</Text> and <Text style={styles.linkText}>Privacy Policy</Text>.
        </Text>
        
        <TouchableOpacity 
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.secondaryButtonText}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  primaryButton: {
    backgroundColor: '#36855b7a',
    paddingVertical: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  termsText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  linkText: {
    color: '#36855bff',
    fontWeight: '500',
  },
  secondaryButton: {
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#36855bff',
    fontSize: 16,
    fontWeight: '500',
  },
});





