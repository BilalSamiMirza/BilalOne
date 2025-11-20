// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   ScrollView,
//   StatusBar
// } from 'react-native';
// // import { Banner } from 'react-native-paper';

// const DashboardScreen = ({ navigation }) => {
//   return (
    
//     <SafeAreaView style={styles.container}>
        
//       <StatusBar barStyle="dark-content" />
//       <ScrollView style={styles.scrollView}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.greeting}>Hello, Sarah</Text>
//         </View>
        
//         {/* Upcoming Appointment */}
//         <View style={styles.appointmentCard}>
//           <Text style={styles.appointmentTitle}>Upcoming Appointment</Text>
//           <Text style={styles.doctorName}>Dr. Evelyn Reed</Text>
//           <Text style={styles.doctorSpecialty}>Cardiologist</Text>
//           <View style={styles.appointmentTime}>
//             <Text style={styles.timeText}>Mon, 23 Oct • 10:30 AM</Text>
//           </View>
//           <View style={styles.appointmentActions}>
//             <TouchableOpacity style={styles.secondaryButton}>
//               <Text style={styles.secondaryButtonText}>Reschedule</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.primaryButton}>
//               <Text style={styles.primaryButtonText}>View Details</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
        
//         {/* Quick Actions */}
//         <View style={styles.quickActions}>
//           <TouchableOpacity 
//             style={styles.actionButton}
//             onPress={() => navigation.navigate('ScheduleAppointment')}
//           >
//             <Text style={styles.actionButtonText}>Book Visit</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.actionButton}>
//             <Text style={styles.actionButtonText}>Find Doctor</Text>
//           </TouchableOpacity>
//           <TouchableOpacity 
//             style={styles.actionButton}
//             onPress={() => navigation.navigate('MedicalRecords')}
//           >
//             <Text style={styles.actionButtonText}>My Records</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.actionButton}>
//             <Text style={styles.actionButtonText}>Messages</Text>
//           </TouchableOpacity>
//         </View>
        
//         {/* Health Statistics */}
//         <Text style={styles.sectionTitle}>Health Statistics</Text>
//         <View style={styles.statsGrid}>
//           <View style={styles.statCard}>
//             <Text style={styles.statValue}>72 BPM</Text>
//             <Text style={styles.statLabel}>Heart Rate</Text>
//             <Text style={styles.statTrend}>Last 24h + 2%</Text>
//           </View>
//           <View style={styles.statCard}>
//             <Text style={styles.statValue}>120/80</Text>
//             <Text style={styles.statLabel}>Blood Pressure</Text>
//             <Text style={styles.statTrend}>Last 24h + 1%</Text>
//           </View>
//           <View style={styles.statCard}>
//             <Text style={styles.statValue}>8,450</Text>
//             <Text style={styles.statLabel}>Steps</Text>
//             <Text style={styles.statTrend}>Today + 5%</Text>
//           </View>
//           <View style={styles.statCard}>
//             <Text style={styles.statValue}>7h 30m</Text>
//             <Text style={styles.statLabel}>Sleep</Text>
//             <Text style={styles.statTrend}>Last Night + 1%</Text>
//           </View>
//         </View>
        
//         {/* Next Medication */}
//         <View style={styles.medicationCard}>
//           <Text style={styles.medicationTitle}>Next Medication:</Text>
//           <Text style={styles.medicationName}>Metformin</Text>
//           <Text style={styles.medicationDosage}>500mg - Take at 8:00 PM</Text>
//         </View>
//       </ScrollView>
      
//       {/* Bottom Navigation */}
//       <View style={styles.bottomNav}>
//         <TouchableOpacity 
//           style={styles.navItem}
//           onPress={() => navigation.navigate('Dashboard')}
//         >
//           <Text style={styles.navText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity 
//           style={styles.navItem}
//           onPress={() => navigation.navigate('Appointments')}
//         >
//           <Text style={styles.navText}>Appointments</Text>
//         </TouchableOpacity>
//         <TouchableOpacity 
//           style={styles.navItem}
//           onPress={() => navigation.navigate('MedicalRecords')}
//         >
//           <Text style={styles.navText}>Records</Text>
//         </TouchableOpacity>
//         <TouchableOpacity 
//           style={styles.navItem}
//           onPress={() => navigation.navigate('Profile')}
//         >
//           <Text style={styles.navText}>Profile</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffffff',
//     marginTop: 50,
//   },
//   scrollView: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   header: {
//     paddingTop: 20,
//     paddingBottom: 15,
//   },
//   greeting: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   appointmentCard: {
//     backgroundColor: '#f8f9fa',
//     borderRadius: 12,
//     padding: 20,
//     marginBottom: 20,
//   },
//   appointmentTitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 5,
//   },
//   doctorName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#000',
//     marginBottom: 2,
//   },
//   doctorSpecialty: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 10,
//   },
//   appointmentTime: {
//     backgroundColor: '#e9ecef',
//     padding: 10,
//     borderRadius: 8,
//     marginBottom: 15,
//   },
//   timeText: {
//     fontSize: 14,
//     color: '#333',
//     textAlign: 'center',
//   },
//   appointmentActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   primaryButton: {
//     backgroundColor: '#4A90E2',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//     flex: 1,
//     marginLeft: 10,
//     alignItems: 'center',
//   },
//   primaryButtonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   secondaryButton: {
//     backgroundColor: 'transparent',
//     borderWidth: 1,
//     borderColor: '#4A90E2',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//     flex: 1,
//     marginRight: 10,
//     alignItems: 'center',
//   },
//   secondaryButtonText: {
//     color: '#4A90E2',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   quickActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 25,
//   },
//   actionButton: {
//     backgroundColor: '#4A90E2',
//     paddingVertical: 12,
//     paddingHorizontal: 8,
//     borderRadius: 10,
//     flex: 1,
//     marginHorizontal: 5,
//     alignItems: 'center',
//   },
//   actionButtonText: {
//     color: '#fff',
//     fontSize: 12,
//     fontWeight: '600',
//     textAlign: 'center',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#000',
//     marginBottom: 15,
//   },
//   statsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginBottom: 25,
//   },
//   statCard: {
//     backgroundColor: '#f8f9fa',
//     borderRadius: 10,
//     padding: 15,
//     width: '48%',
//     marginBottom: 10,
//     alignItems: 'center',
//   },
//   statValue: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#000',
//     marginBottom: 5,
//   },
//   statLabel: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 5,
//   },
//   statTrend: {
//     fontSize: 12,
//     color: '#28a745',
//   },
//   medicationCard: {
//     backgroundColor: '#f8f9fa',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 20,
//   },
//   medicationTitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 5,
//   },
//   medicationName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000',
//     marginBottom: 5,
//   },
//   medicationDosage: {
//     fontSize: 14,
//     color: '#333',
//   },
//   bottomNav: {
//     flexDirection: 'row',
//     borderTopWidth: 1,
//     borderTopColor: '#e9ecef',
//     paddingVertical: 10,
//   },
//   navItem: {
//     flex: 1,
//     alignItems: 'center',
//     paddingVertical: 8,
//   },
//   navText: {
//     fontSize: 12,
//     color: '#4A90E2',
//     fontWeight: '500',
//   },
// });

// export default DashboardScreen;























// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   Image, // Added Image component for profile placeholders
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// // --- Placeholder Component for the Appointment Card Header ---
// const DoctorProfileHeader = () => (
//   <View style={appStyles.doctorHeader}>
//     {/* Profile Picture Placeholder (using a stylized View) */}
//     <View style={appStyles.profilePicture}>
//       <Text style={{ fontSize: 24 }}>👩</Text> 
//     </View>
//     <View>
//       <Text style={appStyles.doctorName}>Dr. Evelyn Reed</Text>
//       <Text style={appStyles.doctorSpecialty}>Cardiologist</Text>
//     </View>
//   </View>
// );

// // --- The Main Component ---
// const DashboardScreen = ({ navigation }) => {
//   // Navigation calls are kept, assuming they link to other screens in the app
//   const navigateTo = (screen) => {
//     console.log(`Navigating to ${screen}`);
//     // navigation.navigate(screen); // Uncomment this in a real project
//   };

//   return (
//     <SafeAreaView style={appStyles.safeArea}>
//       <StatusBar barStyle="dark-content" backgroundColor={appColors.background} />
      
//       {/* Top Header Bar */}
//     <View style={appStyles.topNavBar}>
//   <View style={appStyles.navLeft}>
//     <Image 
//       source={{ uri: "https://tse3.mm.bing.net/th/id/OIP.zELtsuiB8FZVSjVwzM6YOQHaHa?pid=Api&h=220&P=0" }} 
//       style={appStyles.navProfileImage}
//     />
//     <View>
//       <Text style={appStyles.navWelcome}>Welcome Back </Text>
//       <Text style={appStyles.navUserName}>Hello</Text>
//     </View>
//   </View>

//   <TouchableOpacity onPress={() => navigateTo('Notifications')}>
//     <Text style={appStyles.navBell}>🔔</Text>
//   </TouchableOpacity>
// </View>

      
//       <ScrollView
//       style={appStyles.scrollView}
//       showsVerticalScrollIndicator={false}
//       contentContainerStyle={{ paddingBottom: 20 }}
//     >

//       {/* ================= 1. Upcoming Appointment Card ================= */}
//       <View style={appStyles.appointmentCard}>
//         <Text style={appStyles.appointmentTitle}>Upcoming Appointment</Text>

//         <DoctorProfileHeader />

//         <View style={appStyles.appointmentTime}>
//           <Icon name="calendar-sharp" size={22} color="#0A84FF" />
//           <Text style={appStyles.timeText}>Mon, 23 Oct • 10:30 AM</Text>
//         </View>

//         <View style={appStyles.appointmentActions}>
//           <TouchableOpacity
//             style={appStyles.secondaryButton}
//             onPress={() => console.log("Reschedule")}
//           >
//             <Text style={appStyles.secondaryButtonText}>Reschedule</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={appStyles.primaryButton}
//             onPress={() => navigateTo("AppointmentDetails")}
//           >
//             <Text style={appStyles.primaryButtonText}>View Details</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* ================= 2. Quick Actions (2x2 Grid) ================= */}
//       <View style={appStyles.quickActionsGrid}>

//         {/* Row 1 */}
//         <TouchableOpacity
//           style={appStyles.actionCard}
//           onPress={() => navigation.navigate("ScheduleAppointment")}
//         >
//           <Icon name="calendar-outline" size={38} color="#0A84FF" />
//           <Text style={appStyles.actionButtonText}>Book Visit</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={appStyles.actionCard}
//           onPress={() => navigation.navigate("FindDoctor")}
//         >
//           <Icon name="search-outline" size={38} color="#FFB300" />
//           <Text style={appStyles.actionButtonText}>Find Doctor</Text>
//         </TouchableOpacity>

//         {/* Row 2 */}
//         <TouchableOpacity
//           style={appStyles.actionCard}
//           onPress={() => navigation.navigate("MedicalRecords")}
//         >
//           <Icon name="document-text-outline" size={38} color="#34C759" />
//           <Text style={appStyles.actionButtonText}>My Records</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={appStyles.actionCard}
//           onPress={() => navigateTo("Messages")}
//         >
//           <Icon name="chatbubbles-outline" size={38} color="#AF52DE" />
//           <Text style={appStyles.actionButtonText}>Messages</Text>
//         </TouchableOpacity>

//       </View>

//       {/* ================= 3. Health Statistics ================= */}
//       <Text style={appStyles.sectionTitle}>Health Statistics</Text>

//       <View style={appStyles.statsContainer}>
//         {/* Stat Card 1 */}
//         <View style={appStyles.statCard}>
//           <Text style={appStyles.statValue}>72 BPM</Text>
//           <Text style={appStyles.statLabel}>Heart Rate</Text>
//           <View style={appStyles.statTrendContainer}>
//             <Text style={appStyles.statTrendGreen}>Last 24h ↑ 2%</Text>
//           </View>
//         </View>

//         {/* Stat Card 2 */}
//         <View style={appStyles.statCard}>
//           <Text style={appStyles.statValue}>120/80</Text>
//           <Text style={appStyles.statLabel}>Blood Pressure</Text>
//           <View style={appStyles.statTrendContainer}>
//             <Text style={appStyles.statTrendRed}>Last 24h ↓ 1%</Text>
//           </View>
//         </View>

//         {/* Stat Card 3 */}
//         <View style={appStyles.statCard}>
//           <Text style={appStyles.statValue}>8,450</Text>
//           <Text style={appStyles.statLabel}>Steps</Text>
//           <View style={appStyles.statTrendContainer}>
//             <Text style={appStyles.statTrendGreen}>Today ↑ 5%</Text>
//           </View>
//         </View>

//         {/* Stat Card 4 */}
//         <View style={appStyles.statCard}>
//           <Text style={appStyles.statValue}>7h 30m</Text>
//           <Text style={appStyles.statLabel}>Sleep</Text>
//           <View style={appStyles.statTrendContainer}>
//             <Text style={appStyles.statTrendGreen}>Last Night ↑ 3%</Text>
//           </View>
//         </View>
//       </View>

//       {/* ================= 4. Next Medication Card ================= */}
//       <View style={appStyles.medicationCard}>
//         <View>
//           <Text style={appStyles.medicationTitle}>Next Medication</Text>
//           <Text style={appStyles.medicationName}>Metformin</Text>
//           <Text style={appStyles.medicationDosage}>500mg • Take at 8:00 PM</Text>
//         </View>

//         <TouchableOpacity
//           style={appStyles.medicationButton}
//           onPress={() => console.log("Mark as taken")}
//         >
//           <Icon name="checkmark-done-outline" size={22} color="#fff" />
//           <Text style={appStyles.medicationButtonText}>Mark as...</Text>
//         </TouchableOpacity>
//       </View>

//     </ScrollView>
      
//       {/* Bottom Navigation Bar */}
//       <View style={appStyles.bottomNav}>
//         {/* Home - Active */}
//         <TouchableOpacity style={appStyles.navItem} onPress={() => navigation.navigate('Dashboard')}>
//           <Text style={appStyles.navIconActive}>🏠</Text>
//           <Text style={appStyles.navTextActive}>Home</Text>
//         </TouchableOpacity>
        
//         {/* Appointments */}
//         <TouchableOpacity style={appStyles.navItem} onPress={() => navigation.navigate('Appointments')}>
//           <Text style={appStyles.navIcon}>🗓️</Text>
//           <Text style={appStyles.navText}>Appointments</Text>
//         </TouchableOpacity>
        
//         {/* Records */}
//         <TouchableOpacity style={appStyles.navItem} onPress={() => navigation.navigate('MedicalRecords')}>
//           <Text style={appStyles.navIcon}>🗂️</Text>
//           <Text style={appStyles.navText}>Records</Text>
//         </TouchableOpacity>
        
//         {/* Profile */}
//         <TouchableOpacity style={appStyles.navItem} onPress={() => navigation.navigate('Profile')}>
//           <Text style={appStyles.navIcon}>👤</Text>
//           <Text style={appStyles.navText}>Profile</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };


// // --- Style Definitions ---

// const appColors = {
//   primary: '#007AFF', // Standard iOS/App Blue
//   primaryLight: '#E6F2FF', // Very light blue for accents
//   secondary: '#FF3B30', // Red for danger/negative trends
//   success: '#10A301', // Green for positive trends
//   background: '#F8F9FA', // Soft gray background
//   card: '#FFFFFF',
//   textDark: '#101828',
//   textGray: '#667085',
// };

// const appStyles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: appColors.background,
//   },
//   scrollView: {
//     flex: 1,
//     paddingHorizontal: 16,
//   },
  
//   // --- Header Styles ---
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 39,
//     backgroundColor: appColors.card,
//     borderBottomWidth: 1,
//     borderBottomColor: '#EBEBEB',
//   },
//   headerLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   smallProfilePic: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: appColors.primaryLight,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   greeting: {
//     fontSize: 23,
//     fontWeight: '700',
//     color: appColors.textDark,
//   },
//   notificationBell: {
//     padding: 5,
//   },

//   // --- Appointment Card Styles ---
//   appointmentCard: {
//     backgroundColor: appColors.card,
//     borderRadius: 15,
//     padding: 20,
//     marginTop: 20,
//     marginBottom: 20,
//     // Shadow for iOS
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.05,
//     shadowRadius: 10,
//     // Elevation for Android
//     elevation: 5,
//   },
//   appointmentTitle: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: appColors.textGray,
//     marginBottom: 10,
//   },
//   doctorHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   profilePicture: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: appColors.primaryLight,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 15,
//     borderWidth: 2,
//     borderColor: appColors.primary,
//   },
//   doctorName: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: appColors.textDark,
//   },
//   doctorSpecialty: {
//     fontSize: 14,
//     color: appColors.textGray,
//   },
//   appointmentTime: {
//     backgroundColor: appColors.primaryLight,
//     padding: 12,
//     borderRadius: 10,
//     marginBottom: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   timeTextIcon: {
//     fontSize: 14,
//     marginRight: 8,
//   },
//   timeText: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: appColors.textDark,
//   },
//   appointmentActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   primaryButton: {
//     backgroundColor: appColors.primary,
//     paddingVertical: 12,
//     borderRadius: 25,
//     flex: 1,
//     marginLeft: 10,
//     alignItems: 'center',
//   },
//   primaryButtonText: {
//     color: appColors.card,
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   secondaryButton: {
//     backgroundColor: appColors.card,
//     borderWidth: 1.5,
//     borderColor: appColors.primary,
//     paddingVertical: 12,
//     borderRadius: 25,
//     flex: 1,
//     marginRight: 10,
//     alignItems: 'center',
//   },
//   secondaryButtonText: {
//     color: appColors.primary,
//     fontSize: 14,
//     fontWeight: '600',
//   },
  
//   // --- Quick Actions Styles (2x2 Grid) ---
//   quickActionsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginBottom: 25,
//   },
//   actionCard: {
//     backgroundColor: appColors.card,
//     width: '48%', // Allows two cards per row with spacing
//     height: 120,
//     borderRadius: 15,
//     padding: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 15,
//     // Shadow for iOS
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 5,
//     // Elevation for Android
//     elevation: 3,
//   },
//   actionIcon: {
//     fontSize: 32, // Large icon size
//     marginBottom: 8,
//   },
//   actionButtonText: {
//     color: appColors.textDark,
//     fontSize: 14,
//     fontWeight: '600',
//     textAlign: 'center',
//   },

//   // --- Health Statistics Styles ---
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: appColors.textDark,
//     marginBottom: 15,
//     paddingHorizontal: 4, // Aligns with card content
//   },
//   statsContainer: {
//     // This container holds all the full-width stat cards
//     marginBottom: 25,
//   },
//   statCard: {
//     backgroundColor: appColors.card,
//     borderRadius: 10,
//     padding: 18,
//     marginBottom: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     // Minimal shadow for separation
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.03,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   statValue: {
//     fontSize: 20,
//     fontWeight: '800',
//     color: appColors.textDark,
//     flex: 2,
//   },
//   statLabel: {
//     fontSize: 14,
//     color: appColors.textGray,
//     flex: 2,
//   },
//   statTrendContainer: {
//     flex: 1,
//     alignItems: 'flex-end',
//   },
//   statTrendGreen: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: appColors.success,
//   },
//   statTrendRed: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: appColors.secondary,
//   },
  
//   // --- Medication Card Styles ---
//   medicationCard: {
//     backgroundColor: appColors.card,
//     borderRadius: 15,
//     padding: 20,
//     marginBottom: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     // Shadow for iOS
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.05,
//     shadowRadius: 10,
//     // Elevation for Android
//     elevation: 5,
//   },
//   medicationTitle: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: appColors.textGray,
//     marginBottom: 4,
//   },
//   medicationName: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: appColors.textDark,
//     marginBottom: 2,
//   },
//   medicationDosage: {
//     fontSize: 14,
//     color: appColors.textGray,
//   },
//   medicationButton: {
//     backgroundColor: appColors.primaryLight,
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   medicationButtonIcon: {
//     fontSize: 14,
//     marginRight: 5,
//   },
//   medicationButtonText: {
//     color: appColors.primary,
//     fontSize: 14,
//     fontWeight: '600',
//   },



//   topNavBar: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   paddingHorizontal: 20,
//   paddingVertical: 38,
//   backgroundColor: appColors.card,
//   borderBottomWidth: 1,
//   borderBottomColor: '#E6E6E6',
// },

// navLeft: {
//   flexDirection: 'row',
//   alignItems: 'center',
// },

// navProfileImage: {
//   width: 45,
//   height: 45,
//   borderRadius: 22.5,
//   marginRight: 12,
// },

// navWelcome: {
//   fontSize: 12,
//   color: appColors.textGray,
// },

// navUserName: {
//   fontSize: 18,
//   fontWeight: '700',
//   color: appColors.textDark,
// },

// navBell: {
//   fontSize: 26,
// },


//   // --- Bottom Navigation Styles ---
//   bottomNav: {
//     flexDirection: 'row',
//     borderTopWidth: 1,
//     borderTopColor: '#EBEBEB',
//     backgroundColor: appColors.card,
//     paddingBottom: 5,
//   },
//   navItem: {
//     flex: 1,
//     alignItems: 'center',
//     paddingVertical: 8,
//   },
//   navIcon: {
//     fontSize: 22,
//     color: appColors.textGray,
//     marginBottom: 2,
//   },
//   navText: {
//     fontSize: 11,
//     color: appColors.textGray,
//     fontWeight: '500',
//   },
//   navIconActive: {
//     fontSize: 22,
//     color: appColors.primary,
//     marginBottom: 2,
//   },
//   navTextActive: {
//     fontSize: 11,
//     color: appColors.primary,
//     fontWeight: '600',
//   },
// });

// export default DashboardScreen;




















import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNav from '../Components/BottomNav'; // Import the component
import AsyncStorage from '@react-native-async-storage/async-storage';




// --- The Main Component ---
const DashboardScreen = ({ navigation, }) => {
  const [latestAppointment, setLatestAppointment] = useState(null);
  const [loading, setLoading] = useState(true);

 const BASE_URL = 'https://bilalone-backend.onrender.com';

  // Fetch appointments and get the latest one
    const [userName, setUserName] = useState('');

  // Fetch user data when component mounts
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const name = await AsyncStorage.getItem('userName');
      if (name) {
        setUserName(name);
      }
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  

  const fetchLatestAppointment = async () => {
    try {
      console.log("Fetching appointments from dashboard...");
      const res = await fetch(`${BASE_URL}/appointments/get`);
      const json = await res.json();
      console.log("Appointments response:", json);

      if (json.success && json.data && json.data.length > 0) {
        console.log("Raw appointments data:", json.data);
        
        // Get the latest appointment (assuming they're sorted by most recent first from backend)
        // If not sorted, we can sort by _id or createdAt timestamp
        const latest = json.data[0]; // First one should be the latest
        console.log("Latest appointment:", latest);
        setLatestAppointment(latest);
      } else {
        console.log("No appointments found");
        setLatestAppointment(null);
      }
    } catch (err) {
      console.log("Fetch error:", err);
      setLatestAppointment(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLatestAppointment();
  }, []);

  // Refresh when screen comes into focus
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchLatestAppointment();
    });
    return unsubscribe;
  }, [navigation]);

  // --- Dynamic Doctor Profile Header Component ---
  const DoctorProfileHeader = ({ appointment }) => {
    if (!appointment) return null;
    
    return (
      <View style={appStyles.doctorHeader}>
        {/* Profile Picture Placeholder */}
        <View style={appStyles.profilePicture}>
          <Text style={{ fontSize: 24 }}>👩‍⚕️</Text> 
        </View>
        <View>
          <Text style={appStyles.doctorName}>{appointment.doctor || "Doctor"}</Text>
          <Text style={appStyles.doctorSpecialty}>
            {getSpecialtyFromDoctor(appointment.doctor)}
          </Text>
        </View>
      </View>
    );
  };

  // Helper function to get specialty from doctor name
  const getSpecialtyFromDoctor = (doctorName) => {
    if (!doctorName) return 'Doctor';
    
    const doctorSpecialties = {
      'Dr. Evelyn Reed': 'Cardiologist',
      'Dr. Marcus Chen': 'Dermatologist',
      'Dr. Sophia Patel': 'Neurologist',
      'Dr. Liam Johnson': 'Pediatrician',
      'Dr. Olivia Kim': 'Oncologist',
      'Dr. Noah Davis': 'Orthopedic',
      'Dr. Emma Martinez': 'Gynecologist',
      'Dr. William Brown': 'Cardiologist'
    };
    return doctorSpecialties[doctorName] || 'Doctor';
  };

  // Format appointment date
  const formatAppointmentDate = (appointment) => {
    if (!appointment) return 'Date not set';
    
    const { date, month, year, time } = appointment;
    
    // Handle cases where data might be missing
    const displayDate = date || 'Date';
    const displayMonth = month || '';
    const displayYear = year || '';
    const displayTime = time || 'Time';
    
    return `${displayDate} ${displayMonth} ${displayYear} • ${displayTime}`;
  };

  

  return (
    <SafeAreaView style={appStyles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={appColors.background} />
      
      {/* Top Header Bar */}
       {/* Top Header Bar */}
        <View style={appStyles.topNavBar}>
          <View style={appStyles.navLeft}>
            <View>
              <Text style={appStyles.navWelcome}>Welcome Back</Text>
              <Text style={appStyles.navUserName}>
                {userName ? `Hello, ${userName}` : 'Hello'}
              </Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => console.log("Notifications")}>
            <Text style={appStyles.navBell}>🔔</Text>
          </TouchableOpacity>
        </View>

      
      <ScrollView
        style={appStyles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >

        {/* ================= 1. Upcoming Appointment Card ================= */}
        <View style={appStyles.appointmentCard}>
          <Text style={appStyles.appointmentTitle}>Upcoming Appointment</Text>

          {loading ? (
            <Text style={appStyles.loadingText}>Loading appointment...</Text>
          ) : latestAppointment ? (
            <>
              <DoctorProfileHeader appointment={latestAppointment} />

              <View style={appStyles.appointmentTime}>
                <Icon name="calendar-sharp" size={22} color="#0A84FF" />
                <Text style={appStyles.timeText}>
                  {formatAppointmentDate(latestAppointment)}
                </Text>
              </View>

              <View style={appStyles.appointmentActions}>
                <TouchableOpacity
                  style={appStyles.secondaryButton}
                  onPress={() => navigation.navigate('Appointments')}
                >
                  <Text style={appStyles.secondaryButtonText}>Reschedule</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={appStyles.primaryButton}
                  onPress={() => navigation.navigate('FindDoctor')}
                >
                  <Text style={appStyles.primaryButtonText}>View Details</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <View style={appStyles.noAppointment}>
              <Text style={appStyles.noAppointmentText}>No upcoming appointments</Text>
              <TouchableOpacity
                style={appStyles.scheduleButton}
                onPress={() => navigation.navigate('ScheduleAppointment')}
              >
                <Text style={appStyles.scheduleButtonText}>Schedule Appointment</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* ================= 2. Quick Actions (2x2 Grid) ================= */}
        <View style={appStyles.quickActionsGrid}>

          {/* Row 1 */}
          <TouchableOpacity
            style={appStyles.actionCard}
            onPress={() => navigation.navigate("ScheduleAppointment")}
          >
            <Icon name="calendar-outline" size={38} color="#0A84FF" />
            <Text style={appStyles.actionButtonText}>Book Visit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={appStyles.actionCard}
            onPress={() => navigation.navigate("FindDoctor")}
          >
            <Icon name="search-outline" size={38} color="#FFB300" />
            <Text style={appStyles.actionButtonText}>Find Doctor</Text>
          </TouchableOpacity>

          {/* Row 2 */}
          <TouchableOpacity
            style={appStyles.actionCard}
            onPress={() => navigation.navigate("MedicalRecords")}
          >
            <Icon name="document-text-outline" size={38} color="#34C759" />
            <Text style={appStyles.actionButtonText}>My Records</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={appStyles.actionCard}
           onPress={() => navigation.navigate("Notification")}
          >
            <Icon name="chatbubbles-outline" size={38} color="#AF52DE" />
            <Text style={appStyles.actionButtonText}>Notifications</Text>
          </TouchableOpacity>

        </View>

        {/* ================= 3. Health Statistics ================= */}
        <Text style={appStyles.sectionTitle}>Health Statistics</Text>

        <View style={appStyles.statsContainer}>
          {/* Stat Card 1 */}
          <View style={appStyles.statCard}>
            <Text style={appStyles.statValue}>72 BPM</Text>
            <Text style={appStyles.statLabel}>Heart Rate</Text>
            <View style={appStyles.statTrendContainer}>
              <Text style={appStyles.statTrendGreen}>Last 24h ↑ 2%</Text>
            </View>
          </View>

          {/* Stat Card 2 */}
          <View style={appStyles.statCard}>
            <Text style={appStyles.statValue}>120/80</Text>
            <Text style={appStyles.statLabel}>Blood Pressure</Text>
            <View style={appStyles.statTrendContainer}>
              <Text style={appStyles.statTrendRed}>Last 24h ↓ 1%</Text>
            </View>
          </View>

          {/* Stat Card 3 */}
          <View style={appStyles.statCard}>
            <Text style={appStyles.statValue}>8,450</Text>
            <Text style={appStyles.statLabel}>Steps</Text>
            <View style={appStyles.statTrendContainer}>
              <Text style={appStyles.statTrendGreen}>Today ↑ 5%</Text>
            </View>
          </View>

          {/* Stat Card 4 */}
          <View style={appStyles.statCard}>
            <Text style={appStyles.statValue}>7h 30m</Text>
            <Text style={appStyles.statLabel}>Sleep</Text>
            <View style={appStyles.statTrendContainer}>
              <Text style={appStyles.statTrendGreen}>Last Night ↑ 3%</Text>
            </View>
          </View>
        </View>

        {/* ================= 4. Next Medication Card ================= */}
        <View style={appStyles.medicationCard}>
          <View>
            <Text style={appStyles.medicationTitle}>Next Medication</Text>
            <Text style={appStyles.medicationName}>Metformin</Text>
            <Text style={appStyles.medicationDosage}>500mg • Take at 8:00 PM</Text>
          </View>

          <TouchableOpacity
            style={appStyles.medicationButton}
            onPress={() => console.log("Mark as taken")}
          >
            <Icon name="checkmark-done-outline" size={22} color="#fff" />
            <Text style={appStyles.medicationButtonText}>Mark as...</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
      
      {/* Bottom Navigation Bar */}
            <BottomNav navigation={navigation} activeScreen="Dashboard" />


    </SafeAreaView>
  );
};

// --- Style Definitions ---

const appColors = {
  primary: '#007AFF',
  primaryLight: '#E6F2FF',
  secondary: '#FF3B30',
  success: '#10A301',
  background: '#F8F9FA',
  card: '#FFFFFF',
  textDark: '#101828',
  textGray: '#667085',
};

const appStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: appColors.background,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  
  // Top Navigation Bar
  topNavBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 38,
    backgroundColor: appColors.card,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
  },
  navLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navProfileImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 12,
  },
  navWelcome: {
    fontSize: 14,
    color: appColors.textGray,
  },
  navUserName: {
    fontSize: 25,
    fontWeight: '700',
    color: appColors.textDark,
  },
  navBell: {
    fontSize: 26,
  },

  // Appointment Card Styles
  appointmentCard: {
    backgroundColor: appColors.card,
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  appointmentTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: appColors.textGray,
    marginBottom: 10,
  },
  loadingText: {
    fontSize: 16,
    color: appColors.textGray,
    textAlign: 'center',
    paddingVertical: 20,
  },
  doctorHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: appColors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    borderWidth: 2,
    borderColor: appColors.primary,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: '700',
    color: appColors.textDark,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: appColors.textGray,
  },
  appointmentTime: {
    backgroundColor: appColors.primaryLight,
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 15,
    fontWeight: '600',
    color: appColors.textDark,
    marginLeft: 8,
  },
  appointmentActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  primaryButton: {
    backgroundColor: appColors.primary,
    paddingVertical: 12,
    borderRadius: 25,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: appColors.card,
    fontSize: 14,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: appColors.card,
    borderWidth: 1.5,
    borderColor: appColors.primary,
    paddingVertical: 12,
    borderRadius: 25,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: appColors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  noAppointment: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  noAppointmentText: {
    fontSize: 16,
    color: appColors.textGray,
    marginBottom: 15,
  },
  scheduleButton: {
    backgroundColor: appColors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  scheduleButtonText: {
    color: appColors.card,
    fontSize: 14,
    fontWeight: '600',
  },

  // ... (keep all your other existing styles)
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  actionCard: {
    backgroundColor: appColors.card,
    width: '48%',
    height: 120,
    borderRadius: 15,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  actionButtonText: {
    color: appColors.textDark,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: appColors.textDark,
    marginBottom: 15,
    paddingHorizontal: 4,
  },
  statsContainer: {
    marginBottom: 25,
  },
  statCard: {
    backgroundColor: appColors.card,
    borderRadius: 10,
    padding: 18,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 2,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '800',
    color: appColors.textDark,
    flex: 2,
  },
  statLabel: {
    fontSize: 14,
    color: appColors.textGray,
    flex: 2,
  },
  statTrendContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  statTrendGreen: {
    fontSize: 14,
    fontWeight: '600',
    color: appColors.success,
  },
  statTrendRed: {
    fontSize: 14,
    fontWeight: '600',
    color: appColors.secondary,
  },
  medicationCard: {
    backgroundColor: appColors.card,
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  medicationTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: appColors.textGray,
    marginBottom: 4,
  },
  medicationName: {
    fontSize: 18,
    fontWeight: '700',
    color: appColors.textDark,
    marginBottom: 2,
  },
  medicationDosage: {
    fontSize: 14,
    color: appColors.textGray,
  },
  medicationButton: {
    backgroundColor: appColors.primaryLight,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  medicationButtonText: {
    color: appColors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  bottomNav: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#EBEBEB',
    backgroundColor: appColors.card,
    paddingBottom: 5,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navIcon: {
    fontSize: 22,
    color: appColors.textGray,
    marginBottom: 2,
  },
  navText: {
    fontSize: 11,
    color: appColors.textGray,
    fontWeight: '500',
  },
  navIconActive: {
    fontSize: 22,
    color: appColors.primary,
    marginBottom: 2,
  },
  navTextActive: {
    fontSize: 11,
    color: appColors.primary,
    fontWeight: '600',
  },
});

export default DashboardScreen;