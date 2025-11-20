// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   ImageBackground,
//   StatusBar
// } from 'react-native';

// const WelcomeScreen = ({ navigation }) => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" />
//       <View style={styles.content}>
//         <Text style={styles.title}>Your Health,</Text>
//         <Text style={styles.subtitle}>Simplified</Text>
//         <Text style={styles.description}>
//           Manage appointments and track your{'\n'}well-being with ease.
//         </Text>
        
//         <TouchableOpacity 
//           style={styles.primaryButton}
//           onPress={() => navigation.navigate('Signup')}
//         >
//           <Text style={styles.primaryButtonText}>Create Your Account</Text>
//         </TouchableOpacity>
        
//         <TouchableOpacity 
//           style={styles.secondaryButton}
//           onPress={() => navigation.navigate('Login')}
//         >
//           <Text style={styles.secondaryButtonText}>Already have an account? Sign In</Text>
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
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 40,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#000',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#4A90E2',
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   description: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 50,
//     lineHeight: 22,
//   },
//   primaryButton: {
//     backgroundColor: '#4A90E2',
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 25,
//     width: '100%',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   primaryButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   secondaryButton: {
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     width: '100%',
//     alignItems: 'center',
//   },
//   secondaryButtonText: {
//     color: '#4A90E2',
//     fontSize: 16,
//     fontWeight: '500',
//   },
// });

// export default WelcomeScreen;









import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';

export default function SplashScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#c7edfcff', '#FFFFFF', '#6a957b9d', '#FFFFFF']}
      locations={[0, 0.25, 1, 0.49]}
      style={styles.container}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.logoContainer}>
        <View style={styles.outerCircle} />
        <View style={styles.innerCircle} />
      </View>
          <View style={styles.content}>
            {/* Main Heading */}
            <Text style={styles.mainTitle}>Your Health,</Text>
            <Text style={styles.mainTitle}>Simplified</Text>
            
            {/* Subtitle */}
            <Text style={styles.subtitle}>
              Manage appointments and track your
            </Text>
            <Text style={styles.subtitle}>
              well-being with ease.
            </Text>
            
            {/* Spacer */}
            <View style={styles.spacer} />
            
            {/* Primary Button */}
            <TouchableOpacity 
              style={styles.primaryButton}
              onPress={() => navigation.navigate('Signup')}
            >
              <Text style={styles.primaryButtonText}>Create Your Account</Text>
            </TouchableOpacity>
            
            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.signInText}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
  content: {
    alignItems: 'center',
    width: '100%',
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    lineHeight: 42,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 16,
  },
  spacer: {
    height: 60,
  },
  primaryButton: {
    backgroundColor: '#2A7B9B',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
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
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#666',
    fontSize: 16,
  },
  signInText: {
    color: '#2A7B9B',
    fontSize: 16,
    fontWeight: '600',
  },
  // --- Logo/Graphic Styles ---
  logoContainer: {
    position: 'absolute',
    top: '10%', // Positioned high up
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },
  outerCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff', // White background
    // Subtle shadow effect for depth
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#36855bff', // Dark teal color for the inner dot
    marginTop: 35, // Adjust to center over the outer circle (100/2 - 30/2 = 35)
    marginLeft: 0,
  },
});