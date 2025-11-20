// import React from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// import { Avatar, Button, Card } from 'react-native-paper';



// const Login = () => {
//   const navigation = useNavigation();
//   // const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome back</Text>
//       <Text style={styles.subtitle}>Sign in to access your account</Text>

//       <TextInput style={styles.input} placeholder="Enter your email" placeholderTextColor="#888" />
//       <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#888" />

//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Next</Text>
//       </TouchableOpacity>

//       <Text style={styles.footer}>
//         New member?{" "}
//         <Text style={styles.link} onPress={() => navigation.navigate("Signup")}>
//           Register now
//         </Text>
//       </Text>
//     </View>
//   //     <Card>
//   //   <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
//   //   <Card.Content>
//   //     <Text variant="titleLarge">Card title</Text>
//   //     <Text variant="bodyMedium">Card content</Text>
//   //   </Card.Content>
//   //   <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
//   //   <Card.Actions>
//   //     <Button>Cancel</Button>
//   //     <Button>Ok</Button>
//   //   </Card.Actions>
//   // </Card>
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

// export default Login;




// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const Login = () => {
//   const navigation = useNavigation();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // ⚙️ Replace with your local IPv4
//   const API_URL = "http://192.168.1.5:5000/api/login"; // Change to your IP

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please fill all fields!");
//       return;
//     }

//     try {
//       const res = await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();
//       console.log("Login Response:", data);

//       if (data.message === "login successfully") {
//         Alert.alert("Success", "Login successful!");
//         navigation.navigate("Home"); // Navigate wherever you want
//       } else {
//         Alert.alert("Error", data.message || "Invalid credentials");
//       }
//     } catch (error) {
//       console.log(error);
//       Alert.alert("Error", "Unable to connect to server");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome back</Text>
//       <Text style={styles.subtitle}>Sign in to access your account</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Enter your email"
//         placeholderTextColor="#888"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         placeholderTextColor="#888"
//         value={password}
//         onChangeText={setPassword}
//       />

//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Next</Text>
//       </TouchableOpacity>

//       <Text style={styles.footer}>
//         New member?{" "}
//         <Text style={styles.link} onPress={() => navigation.navigate("Signup")}>
//           Register now
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

// export default Login;



// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { API_URL } from "../config/AppNavigation/config";

// const Login = () => {
//   const navigation = useNavigation();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please fill all fields");
//       return;
//     }

//     try {
//       const response = await fetch(`${API_URL}/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       console.log("Login response:", data);

//       if (response.ok) {
//         Alert.alert("Success", "Login successful!");
//         navigation.navigate("Home"); // Make sure Home screen exists
//       } else {
//         Alert.alert("Error", data.message || "Invalid credentials");
//       }
//     } catch (error) {
//       console.log("Login error:", error);
//       Alert.alert("Error", "Something went wrong");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>

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

//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
//         <Text style={styles.link}>Don't have an account? Sign up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f3ff" },
//   title: { fontSize: 28, fontWeight: "bold", color: "#6a1b9a", marginBottom: 20 },
//   input: { width: "80%", borderWidth: 1, borderColor: "#ccc", borderRadius: 10, padding: 10, marginBottom: 15, backgroundColor: "#fff" },
//   button: { backgroundColor: "#6a1b9a", paddingVertical: 12, paddingHorizontal: 60, borderRadius: 10 },
//   buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
//   link: { marginTop: 15, color: "#6a1b9a", fontWeight: "600" },
// });

// export default Login;



























// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { loginUser } from '../src/api';

// export default function LoginScreen() {
//   const navigation = useNavigation();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert('Please fill all fields');
//       return;
//     }

//     try {
//       const res = await loginUser(email, password);
//       Alert.alert('Login Info', res.message);

//       if (res.user) {
//         console.log('Logged in user:', res.user);
//         navigation.navigate('Card');
//       }
//     } catch (err) {
//       console.error(err);
//       Alert.alert('Error', 'Failed to login');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome Back</Text>
//       <Text style={styles.subtitle}>Login to your account</Text>

//       {/* Email */}
//       <View style={styles.inputContainer}>
//         <Icon name="mail-outline" size={20} color="#999" style={styles.icon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           placeholderTextColor="#999"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//         />
//       </View>

//       {/* Password */}
//       <View style={styles.inputContainer}>
//         <Icon name="lock-closed-outline" size={20} color="#999" style={styles.icon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           placeholderTextColor="#999"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />
//       </View>

//       {/* Login Button */}
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>

//       {/* Footer */}
//       <Text style={styles.footer}>
//         Don’t have an account?{' '}
//         <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
//           Sign Up
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
//   button: { backgroundColor: '#000', padding: 12, borderRadius: 8, width: '100%', alignItems: 'center', marginVertical: 10 },
//   buttonText: { color: '#fff', fontWeight: 'bold' },
//   footer: { marginTop: 10 },
//   link: { color: 'blue' },
// });






import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'react-native-linear-gradient'

const API_URL = 'https://bilalone-backend.onrender.com';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        console.log('Login successful:', data);
        
        // Store user data in AsyncStorage
        await AsyncStorage.setItem('userName', data.user.name);
        await AsyncStorage.setItem('userEmail', data.user.email);
        
        Alert.alert('Success', data.message);
        navigation.navigate('Dashboard');
      } else {
        // Login failed
        Alert.alert('Login Failed', data.message);
      }
    } catch (err) {
      console.error('Login error:', err);
      Alert.alert('Error', 'Cannot connect to server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
 <LinearGradient
  colors={['#c7edfcff', '#FFFFFF', '#6a957b9d', '#FFFFFF']}
      locations={[0, 0.25, 1, 0.49]}
      style={styles.container}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView 
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.header}>
              <Text style={styles.title}>Welcome Back</Text>
            </View>
            
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  placeholderTextColor="#999"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  placeholderTextColor="#999"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                  autoCapitalize="none"
                />
              </View>
              
              <TouchableOpacity 
                style={[styles.primaryButton, loading && styles.disabledButton]}
                onPress={handleLogin}
                disabled={loading}
              >
                <Text style={styles.primaryButtonText}>
                  {loading ? 'Signing In...' : 'Sign In'}
                </Text>
              </TouchableOpacity>
              
              <View style={styles.footer}>
                <Text style={styles.footerText}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                  <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    // backgroundColor: '#FFFFFF',
    color: '#000',
  },
  primaryButton: {
    backgroundColor: '#36855b7a',
    paddingVertical: 16,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  disabledButton: {
    backgroundColor: '#666',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  footerText: {
    color: '#666',
    fontSize: 16,
  },
  signUpText: {
    color: '#36855bff',
    fontSize: 16,
    fontWeight: '600',
  },
});
























