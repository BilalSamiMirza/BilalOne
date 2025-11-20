// import AsyncStorage from '@react-native-async-storage/async-storage';
// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   ScrollView,
//   Image,
// } from 'react-native';

// // --- Icon Placeholder Components ---
// // In a real app, you would replace these with imports from 'react-native-vector-icons'
// const IconPill = ({ color, children }) => (
//   <View style={[styles.iconPill, { backgroundColor: color }]}>
//     {children}
//   </View>
// );

// const BackIcon = () => <Text style={{ fontSize: 24, color: '#000' }}>{'<'}</Text>;
// const EditIcon = () => <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold' }}>{'✏️'}</Text>;
// const ArrowIcon = () => <Text style={{ fontSize: 16, color: '#777' }}>{'>'}</Text>;
// const PlaceholderIcon = ({ icon, size = 20, color = '#fff' }) => (
//   <Text style={{ fontSize: size, color }}>{icon}</Text>
// );
// // --- End Icon Placeholder Components ---


// const ProfileScreen = ({ navigation }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   // Load user data when screen opens (Functionality UNCHANGED)
//   useEffect(() => {
//     loadUserDetails();
//   }, []);

//   const loadUserDetails = async () => {
//     try {
//       const savedName = await AsyncStorage.getItem('userName');
//       const savedEmail = await AsyncStorage.getItem('userEmail');

//       setName(savedName || 'Sophia Carter');
//       setEmail(savedEmail || 'sophia.carter@email.com');

//       console.log('User Name:', savedName);
//       console.log('User Email:', savedEmail);
//     } catch (error) {
//       console.error('Error retrieving user details:', error);
//     }
//   };

//   // NEW: Logout Functionality
//   const handleLogout = async () => {
//     try {
//       // Clear user data
//       await AsyncStorage.removeItem('userName');
//       await AsyncStorage.removeItem('userEmail');
//       console.log('User logged out successfully.');
//       // Navigate to a login screen (placeholder route name)
//       navigation.navigate('Login'); 
//     } catch (error) {
//       console.error('Error during logout:', error);
//     }
//   };

//   // Reusable component for the info rows
//   const InfoRow = ({ iconColor, iconSymbol, label, value }) => (
//     <View style={styles.infoItem}>
//       <IconPill color={iconColor}>
//         <PlaceholderIcon icon={iconSymbol} />
//       </IconPill>
//       <View style={styles.infoTextContainer}>
//         <Text style={styles.infoLabel}>{label}</Text>
//         <Text style={styles.infoValue}>{value}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
//         {/* Top Gradient Header Area */}
//         <View style={styles.topHeaderArea}>
//           {/* Back button and Title */}
//           <View style={styles.headerBar}>
//             <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//               <BackIcon />
//             </TouchableOpacity>
//             <Text style={styles.pageTitle}>Profile & Settings</Text>
//             <View style={{ width: 30 }} />{/* Spacer */}
//           </View>

//           {/* Profile Picture and Edit Button */}
//           <View style={styles.profileAvatarContainer}>
//             <Image
//               source={{ uri: 'https://placehold.co/100x100/A0E7E5/FFFFFF?text=SC' }}
//               style={styles.profileAvatar}
//             />
//             {/* Edit Icon Button */}
//             <TouchableOpacity style={styles.editButton}>
//               <EditIcon />
//             </TouchableOpacity>
//           </View>

//           {/* Name and Patient ID (Email in your logic) */}
//           <Text style={styles.profileName}>{name}</Text>
//           <Text style={styles.patientId}>
//             {/* Displaying email as ID as per original code logic, but styled like an ID */}
//             {`Patient ID: ${email.split('@')[0].substring(0, 6)}`}
//           </Text>
//         </View>

//         {/* --- Personal Information Section --- */}
//         <View style={styles.contentSection}>
//           <Text style={styles.sectionTitle}>Personal Information</Text>

//           <View style={styles.infoCard}>
//             {/* Email (using the state 'email' value) */}
//             <InfoRow
//               iconColor="#A0E7E5"
//               iconSymbol="📧" // Placeholder for Mail icon
//               label="Email"
//               value={email}
//             />

//             {/* Phone Number (Hardcoded value maintained) */}
//             <InfoRow
//               iconColor="#A8CFFF"
//               iconSymbol="📞" // Placeholder for Phone icon
//               label="Phone Number"
//               value="(555) 123-4567"
//             />

//             {/* Address (Hardcoded value maintained) */}
//             <InfoRow
//               iconColor="#FBC99E"
//               iconSymbol="📍" // Placeholder for Location icon
//               label="Address"
//               value="123 Main St, Anytown, USA"
//             />
//           </View>
//         </View>

//         {/* --- App Preferences Section --- */}
//         <View style={styles.contentSection}>
//           <Text style={styles.sectionTitle}>App Preferences</Text>

//           <View style={styles.preferencesCard}>
//             {/* Help & Support (Tappable, connecting to navigation logic) */}
//             <TouchableOpacity
//               style={styles.preferenceItem}
//               onPress={() => navigation.navigate('HelpSupport')}
//             >
//               <View style={styles.preferenceLeft}>
//                 <IconPill color="#E0BBE4">
//                   <PlaceholderIcon icon="❓" /> {/* Placeholder for Help icon */}
//                 </IconPill>
//                 <Text style={styles.preferenceText}>Help & Support</Text>
//               </View>
//               <ArrowIcon />
//             </TouchableOpacity>

//             {/* Language */}
//             <View style={[styles.preferenceItem, { borderBottomWidth: 0 }]}>
//               <View style={styles.preferenceLeft}>
//                 <IconPill color="#FFABAB">
//                   <PlaceholderIcon icon="🗣️" /> {/* Placeholder for Language icon */}
//                 </IconPill>
//                 <Text style={styles.preferenceText}>Language</Text>
//               </View>
//               <View style={styles.preferenceRight}>
//                 <Text style={styles.preferenceValue}>English</Text>
//                 <ArrowIcon />
//               </View>
//             </View>
//           </View>
//         </View>
        
//         {/* --- Logout Button --- */}
//         <View style={styles.contentSection}>
//           <TouchableOpacity
//             style={styles.logoutButton}
//             onPress={handleLogout}
//           >
//             <Text style={styles.logoutButtonText}>Logout</Text>
//           </TouchableOpacity>
//         </View>

//       </ScrollView>

//       {/* Bottom Navigation (Functionality UNCHANGED) */}
//       <View style={styles.bottomNav}>
//         <TouchableOpacity
//           style={styles.navItem}
//           onPress={() => navigation.navigate('Dashboard')}
//         >
//           <PlaceholderIcon icon="🏠" size={20} color="#666" />
//           <Text style={styles.navText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.navItem}
//           onPress={() => navigation.navigate('Appointments')}
//         >
//           <PlaceholderIcon icon="📅" size={20} color="#666" />
//           <Text style={styles.navText}>Appointments</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.navItem}
//           onPress={() => navigation.navigate('MedicalRecords')}
//         >
//           <PlaceholderIcon icon="📄" size={20} color="#666" />
//           <Text style={styles.navText}>Records</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.navItem}
//           onPress={() => navigation.navigate('Profile')}
//         >
//           <PlaceholderIcon icon="👤" size={20} color="#4A90E2" />
//           <Text style={[styles.navText, styles.activeNavText]}>Profile</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   scrollView: {
//     flex: 1,
//   },
//   scrollContent: {
//     paddingBottom: 20,
//   },
//   // --- Top Header Area Styling ---
//   topHeaderArea: {
//     // Simulating the gradient background with a solid color and bottom rounded shape
//     backgroundColor: '#E6F7FF', // Light Blue/Green Background
//     paddingHorizontal: 20,
//     paddingBottom: 70, // Push content down past the rounded card edge
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30,
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   headerBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//     paddingTop: 10,
//     marginBottom: 20,
//   },
//   backButton: {
//     padding: 5,
//   },
//   pageTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#000',
//   },
//   profileAvatarContainer: {
//     position: 'relative',
//     marginBottom: 15,
//   },
//   profileAvatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     borderWidth: 3,
//     borderColor: '#fff',
//   },
//   editButton: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     backgroundColor: '#4A90E2', // Blue circle for edit
//     borderRadius: 15,
//     width: 30,
//     height: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   profileName: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#000',
//   },
//   patientId: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 5,
//   },

//   // --- Content Section Styling (Below Header) ---
//   contentSection: {
//     paddingHorizontal: 20,
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 10,
//   },
//   // Reusable card style
//   cardBase: {
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   infoCard: {
//     ...this.cardBase,
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//   },
//   preferencesCard: {
//     ...this.cardBase,
//     paddingVertical: 5,
//   },

//   // --- Info Item Styling ---
//   infoItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   infoTextContainer: {
//     marginLeft: 15,
//     flex: 1,
//   },
//   infoLabel: {
//     fontSize: 14,
//     color: '#888',
//     marginBottom: 2,
//   },
//   infoValue: {
//     fontSize: 16,
//     color: '#333',
//     fontWeight: '500',
//   },

//   // --- Icon Pill (Colored Background for Icons) ---
//   iconPill: {
//     width: 40,
//     height: 40,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   // --- Preference Item Styling ---
//   preferenceItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 10,
//     paddingHorizontal: 5,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   preferenceLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   preferenceRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   preferenceText: {
//     fontSize: 16,
//     color: '#333',
//     marginLeft: 15,
//   },
//   preferenceValue: {
//     fontSize: 14,
//     color: '#888',
//     marginRight: 10,
//   },

//   // NEW: Logout Button Styles
//   logoutButton: {
//     backgroundColor: '#FF6F6F', // Soft Red for Logout action
//     paddingVertical: 15,
//     borderRadius: 15,
//     alignItems: 'center',
//     marginTop: 10,
//     shadowColor: '#FF6F6F',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 8,
//   },
//   logoutButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },


//   // --- Bottom Navigation Styling (Kept similar to original but with icons) ---
//   bottomNav: {
//     flexDirection: 'row',
//     borderTopWidth: 1,
//     borderTopColor: '#e9ecef',
//     paddingVertical: 5,
//     backgroundColor: '#fff',
//   },
//   navItem: {
//     flex: 1,
//     alignItems: 'center',
//     paddingVertical: 8,
//   },
//   navText: {
//     fontSize: 10,
//     color: '#666',
//     marginTop: 4,
//   },
//   activeNavText: {
//     color: '#4A90E2',
//     fontWeight: '600',
//   },
// });

// export default ProfileScreen;
















// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   ScrollView,
//   Alert,
//   Image
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Icon from 'react-native-vector-icons/Ionicons';
// import BottomNav from '../Components/BottomNav'; // Import the component

// const ProfileScreen = ({ navigation }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const BASE_URL = "http://192.168.100.138:7000";

//   // Check if user is logged in
//   useEffect(() => {
//     checkUserStatus();
//   }, []);

//   const checkUserStatus = async () => {
//     try {
//       const userEmail = await AsyncStorage.getItem('userEmail');
//       const userName = await AsyncStorage.getItem('userName');
      
//       if (userEmail && userName) {
//         setUser({
//           email: userEmail,
//           name: userName
//         });
//       }
//     } catch (error) {
//       console.log("Error checking user status:", error);
//     }
//   };

//   const handleLogout = async () => {
//     Alert.alert(
//       "Logout",
//       "Are you sure you want to logout?",
//       [
//         {
//           text: "Cancel",
//           style: "cancel"
//         },
//         {
//           text: "Logout",
//           style: "destructive",
//           onPress: async () => {
//             try {
//               setLoading(true);
              
//               // Clear AsyncStorage
//               await AsyncStorage.multiRemove(['userEmail', 'userName', 'userToken']);
              
//               // Reset user state
//               setUser(null);
              
//               // Navigate to Login screen
//               navigation.reset({
//                 index: 0,
//                 routes: [{ name: 'Login' }],
//               });
              
//               Alert.alert("Success", "Logged out successfully");
//             } catch (error) {
//               console.log("Logout error:", error);
//               Alert.alert("Error", "Failed to logout");
//             } finally {
//               setLoading(false);
//             }
//           }
//         }
//       ]
//     );
//   };

//   const handleLogin = () => {
//     navigation.navigate('Login');
//   };

//   const handleSignup = () => {
//     navigation.navigate('Signup');
//   };

//   const handleEditProfile = () => {
//     // Navigate to Edit Profile screen
//     navigation.navigate('EditProfile');
//   };

//   if (!user) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <ScrollView contentContainerStyle={styles.scrollContent}>
//           {/* Header */}
//           <View style={styles.header}>
//             <Text style={styles.pageTitle}>Profile</Text>
//           </View>

//           {/* Not Logged In State */}
//           <View style={styles.notLoggedInContainer}>
//             <View style={styles.profilePicture}>
//               <Icon name="person-outline" size={50} color="#666" />
//             </View>
            
//             <Text style={styles.notLoggedInTitle}>Not Logged In</Text>
//             <Text style={styles.notLoggedInText}>
//               Please login or create an account to access your profile
//             </Text>

//             <TouchableOpacity 
//               style={styles.loginButton}
//               onPress={handleLogin}
//             >
//               <Text style={styles.loginButtonText}>Login</Text>
//             </TouchableOpacity>

//             <TouchableOpacity 
//               style={styles.signupButton}
//               onPress={handleSignup}
//             >
//               <Text style={styles.signupButtonText}>Create Account</Text>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>

//         {/* Bottom Navigation */}
//         <BottomNav navigation={navigation} activeScreen="Profile" />
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
        
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.pageTitle}>Profile</Text>
//         </View>

//         {/* Profile Section */}
//         <View style={styles.profileSection}>
//           <View style={styles.profilePicture}>
//             <Text style={styles.profileInitials}>
//               {user.name ? user.name.split(' ').map(n => n[0]).join('') : 'U'}
//             </Text>
//           </View>
          
//           <Text style={styles.userName}>{user.name}</Text>
//           <Text style={styles.userEmail}>{user.email}</Text>
//         </View>

//         {/* Profile Options */}
//         <View style={styles.optionsSection}>
//           <TouchableOpacity 
//             style={styles.optionItem}
//             onPress={handleSignup}
//           >
//             <Icon name="person-outline" size={24} color="#333" />
//             <Text style={styles.optionText}>Edit Profile</Text>
//             <Icon name="chevron-forward" size={20} color="#999" />
//           </TouchableOpacity>

//           <TouchableOpacity 
//             style={styles.optionItem} 
//             onPress={() => navigation.navigate("Notification")}
//           >
//             <Icon name="notifications-outline" size={24} color="#333" />
//             <Text style={styles.optionText}>Notifications</Text>
//             <Icon name="chevron-forward" size={20} color="#999" />
//           </TouchableOpacity>

//           <TouchableOpacity 
//             style={styles.optionItem} 
//             onPress={() => navigation.navigate("Privacy")}
//           >
//             <Icon name="shield-checkmark-outline" size={24} color="#333" />
//             <Text style={styles.optionText}>Privacy & Security</Text>
//             <Icon name="chevron-forward" size={20} color="#999" />
//           </TouchableOpacity>

//           <TouchableOpacity 
//             style={styles.optionItem} 
//             onPress={() => navigation.navigate("HelpSupportScreen")}
//           >
//             <Icon name="help-circle-outline" size={24} color="#333" />
//             <Text style={styles.optionText}>Help & Support</Text>
//             <Icon name="chevron-forward" size={20} color="#999" />
//           </TouchableOpacity>
//         </View>

//         {/* Logout Button */}
//         <View style={styles.contentSection}>
//           <TouchableOpacity
//             style={styles.logoutButton}
//             onPress={handleLogout}
//             disabled={loading}
//           >
//             {loading ? (
//               <Text style={styles.logoutButtonText}>Logging out...</Text>
//             ) : (
//               <>
//                 <Icon name="log-out-outline" size={20} color="#fff" />
//                 <Text style={styles.logoutButtonText}>Logout</Text>
//               </>
//             )}
//           </TouchableOpacity>
//         </View>

//       </ScrollView>

//       {/* Bottom Navigation */}
//       <BottomNav navigation={navigation} activeScreen="Profile" />

//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   scrollContent: {
//     flexGrow: 1,
//     paddingBottom: 100,
//   },
//   header: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 15,
//   },
//   pageTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   // Not Logged In Styles
//   notLoggedInContainer: {
//     alignItems: 'center',
//     paddingHorizontal: 40,
//     paddingVertical: 60,
//   },
//   notLoggedInTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   notLoggedInText: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 30,
//     lineHeight: 22,
//   },
//   loginButton: {
//     backgroundColor: '#4A90E2',
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 25,
//     width: '100%',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   signupButton: {
//     backgroundColor: 'transparent',
//     borderWidth: 1.5,
//     borderColor: '#4A90E2',
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 25,
//     width: '100%',
//     alignItems: 'center',
//   },
//   signupButtonText: {
//     color: '#4A90E2',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   // Profile Section Styles
//   profileSection: {
//     alignItems: 'center',
//     paddingVertical: 30,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   profilePicture: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: '#4A90E2',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   profileInitials: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   userName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#000',
//     marginBottom: 5,
//   },
//   userEmail: {
//     fontSize: 16,
//     color: '#666',
//   },
//   // Options Section
//   optionsSection: {
//     paddingHorizontal: 20,
//     paddingVertical: 20,
//   },
//   optionItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   optionText: {
//     flex: 1,
//     fontSize: 16,
//     color: '#333',
//     marginLeft: 15,
//   },
//   // Logout Section
//   contentSection: {
//     paddingHorizontal: 20,
//     paddingVertical: 30,
//   },
//   logoutButton: {
//     backgroundColor: '#dc3545',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 15,
//     borderRadius: 10,
//     gap: 10,
//   },
//   logoutButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// export default ProfileScreen;















import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNav from '../Components/BottomNav';

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = 'https://bilalone-backend.onrender.com';

  // Auto-refresh when screen comes into focus
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      checkUserStatus();
    });

    // Initial load
    checkUserStatus();

    return unsubscribe;
  }, [navigation]);

  const checkUserStatus = async () => {
    try {
      const userEmail = await AsyncStorage.getItem('userEmail');
      const userName = await AsyncStorage.getItem('userName');
      
      if (userEmail && userName) {
        setUser({
          email: userEmail,
          name: userName
        });
      }
    } catch (error) {
      console.log("Error checking user status:", error);
    }
  };

  const handleLogout = async () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: async () => {
            try {
              setLoading(true);
              await AsyncStorage.multiRemove(['userEmail', 'userName', 'userToken']);
              setUser(null);
              navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              });
              Alert.alert("Success", "Logged out successfully");
            } catch (error) {
              console.log("Logout error:", error);
              Alert.alert("Error", "Failed to logout");
            } finally {
              setLoading(false);
            }
          }
        }
      ]
    );
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  if (!user) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          <View style={styles.topHeaderArea}>
            <View style={styles.headerBar}>
              <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={24} color="#000" />
              </TouchableOpacity>
              <Text style={styles.pageTitle}>Profile & Settings</Text>
              <View style={{ width: 24 }} />
            </View>

            <View style={styles.profileAvatarContainer}>
              <View style={styles.profileAvatar}>
                <Icon name="person-outline" size={40} color="#666" />
              </View>
            </View>
            
            <Text style={styles.profileName}>Not Logged In</Text>
            <Text style={styles.patientId}>Please login to continue</Text>
          </View>

          <View style={styles.contentSection}>
            <View style={styles.notLoggedInContainer}>
              <Text style={styles.notLoggedInText}>
                Please login or create an account to access your profile
              </Text>

              <TouchableOpacity 
                style={styles.loginButton}
                onPress={handleLogin}
              >
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.signupButton}
                onPress={handleSignup}
              >
                <Text style={styles.signupButtonText}>Create Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <BottomNav navigation={navigation} activeScreen="Profile" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        
        {/* Top Header Area with Gradient Background */}
        <View style={styles.topHeaderArea}>
          <View style={styles.headerBar}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.pageTitle}>Profile & Settings</Text>
            <View style={{ width: 24 }} />
          </View>

          <View style={styles.profileAvatarContainer}>
            <View style={styles.profileAvatar}>
              <Text style={styles.profileInitials}>
                {user.name ? user.name.split(' ').map(n => n[0]).join('') : 'U'}
              </Text>
            </View>
            <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
              <Icon name="camera-outline" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.profileName}>{user.name}</Text>
          <Text style={styles.patientId}>Patient ID: 123456</Text>
        </View>

        {/* Personal Information Section */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          
          <View style={styles.infoCard}>
            <View style={styles.infoItem}>
              <View style={[styles.iconPill, { backgroundColor: '#E3F2FD' }]}>
                <Icon name="mail-outline" size={20} color="#1976D2" />
              </View>
              <View style={styles.infoTextContainer}>
                <Text style={styles.infoLabel}>Email</Text>
                <Text style={styles.infoValue}>{user.email}</Text>
              </View>
            </View>

            <View style={styles.infoItem}>
              <View style={[styles.iconPill, { backgroundColor: '#E8F5E8' }]}>
                <Icon name="call-outline" size={20} color="#388E3C" />
              </View>
              <View style={styles.infoTextContainer}>
                <Text style={styles.infoLabel}>Phone Number</Text>
                <Text style={styles.infoValue}>(555) 123–4567</Text>
              </View>
            </View>

            <View style={[styles.infoItem, { borderBottomWidth: 0 }]}>
              <View style={[styles.iconPill, { backgroundColor: '#FFF3E0' }]}>
                <Icon name="location-outline" size={20} color="#F57C00" />
              </View>
              <View style={styles.infoTextContainer}>
                <Text style={styles.infoLabel}>Address</Text>
                <Text style={styles.infoValue}>123 Main St, Anytown, USA</Text>
              </View>
            </View>
          </View>
        </View>

        {/* App Preferences Section */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>App Preferences</Text>
          
          <View style={styles.preferencesCard}>
            <TouchableOpacity 
              style={styles.preferenceItem}
              onPress={() => navigation.navigate("HelpSupportScreen")}
            >
              <View style={styles.preferenceLeft}>
                <View style={[styles.iconPill, { backgroundColor: '#F3E5F5' }]}>
                  <Icon name="help-circle-outline" size={20} color="#7B1FA2" />
                </View>
                <Text style={styles.preferenceText}>Help & Support</Text>
              </View>
              <View style={styles.preferenceRight}>
                <Icon name="chevron-forward" size={20} color="#999" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.preferenceItem}>
              <View style={styles.preferenceLeft}>
                <View style={[styles.iconPill, { backgroundColor: '#E0F2F1' }]}>
                  <Icon name="language-outline" size={20} color="#00796B" />
                </View>
                <Text style={styles.preferenceText}>Language</Text>
              </View>
              <View style={styles.preferenceRight}>
                <Text style={styles.preferenceValue}>English</Text>
                <Icon name="chevron-forward" size={20} color="#999" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.preferenceItem}
              onPress={() => navigation.navigate("Notification")}
            >
              <View style={styles.preferenceLeft}>
                <View style={[styles.iconPill, { backgroundColor: '#FFF3E0' }]}>
                  <Icon name="notifications-outline" size={20} color="#FF9500" />
                </View>
                <Text style={styles.preferenceText}>Notifications</Text>
              </View>
              <View style={styles.preferenceRight}>
                <Icon name="chevron-forward" size={20} color="#999" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.preferenceItem}
              onPress={handleEditProfile}
            >
              <View style={styles.preferenceLeft}>
                <View style={[styles.iconPill, { backgroundColor: '#E8F5E9' }]}>
                  <Icon name="create-outline" size={20} color="#4CAF50" />
                </View>
                <Text style={styles.preferenceText}>Edit Profile</Text>
              </View>
              <View style={styles.preferenceRight}>
                <Icon name="chevron-forward" size={20} color="#999" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.preferenceItem, { borderBottomWidth: 0 }]}
              onPress={() => navigation.navigate("Privacy")}
            >
              <View style={styles.preferenceLeft}>
                <View style={[styles.iconPill, { backgroundColor: '#E3F2FD' }]}>
                  <Icon name="shield-checkmark-outline" size={20} color="#0099FF" />
                </View>
                <Text style={styles.preferenceText}>Privacy & Security</Text>
              </View>
              <View style={styles.preferenceRight}>
                <Icon name="chevron-forward" size={20} color="#999" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Logout Button */}
        <View style={styles.contentSection}>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleLogout}
            disabled={loading}
          >
            {loading ? (
              <Text style={styles.logoutButtonText}>Logging out...</Text>
            ) : (
              <Text style={styles.logoutButtonText}>Logout</Text>
            )}
          </TouchableOpacity>
        </View>

      </ScrollView>

      <BottomNav navigation={navigation} activeScreen="Profile" />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  // --- Top Header Area Styling ---
  topHeaderArea: {
    backgroundColor: '#E6F7FF',
    paddingHorizontal: 20,
    paddingBottom: 70,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: 10,
    marginBottom: 20,
  },
  backButton: {
    padding: 5,
  },
  pageTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  profileAvatarContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  profileAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitials: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#4A90E2',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
  patientId: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },

  // --- Content Section Styling (Below Header) ---
  contentSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  preferencesCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
    paddingVertical: 5,
  },

  // --- Info Item Styling ---
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },

  // --- Icon Pill (Colored Background for Icons) ---
  iconPill: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // --- Preference Item Styling ---
  preferenceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  preferenceLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  preferenceRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  preferenceText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  preferenceValue: {
    fontSize: 14,
    color: '#888',
    marginRight: 10,
  },

  // Logout Button Styles
  logoutButton: {
    backgroundColor: '#FF6F6F',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#FF6F6F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  // Not Logged In Styles
  notLoggedInContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  notLoggedInText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  loginButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signupButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#4A90E2',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#4A90E2',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;