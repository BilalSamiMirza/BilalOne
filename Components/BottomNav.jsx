import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomNav = ({ navigation, activeScreen }) => {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity 
        style={styles.navItem}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <View style={activeScreen === 'Dashboard' ? styles.activeNavIndicator : {}}>
          <Icon 
            name={activeScreen === 'Dashboard' ? "home" : "home-outline"} 
            size={24} 
            color={activeScreen === 'Dashboard' ? '#4A90E2' : '#666'} 
          />
        </View>
        <Text style={[styles.navText, activeScreen === 'Dashboard' && styles.activeNavText]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.navItem}
        onPress={() => navigation.navigate('Appointments')}
      >
        <View style={activeScreen === 'Appointments' ? styles.activeNavIndicator : {}}>
          <Icon 
            name={activeScreen === 'Appointments' ? "calendar" : "calendar-outline"} 
            size={24} 
            color={activeScreen === 'Appointments' ? '#4A90E2' : '#666'} 
          />
        </View>
        <Text style={[styles.navText, activeScreen === 'Appointments' && styles.activeNavText]}>
          Appointments
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.navItem}
        onPress={() => navigation.navigate('MedicalRecords')}
      >
        <View style={activeScreen === 'MedicalRecords' ? styles.activeNavIndicator : {}}>
          <Icon 
            name={activeScreen === 'MedicalRecords' ? "document-text" : "document-text-outline"} 
            size={24} 
            color={activeScreen === 'MedicalRecords' ? '#4A90E2' : '#666'} 
          />
        </View>
        <Text style={[styles.navText, activeScreen === 'MedicalRecords' && styles.activeNavText]}>
          Records
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.navItem}
        onPress={() => navigation.navigate('Profile')}
      >
        <View style={activeScreen === 'Profile' ? styles.activeNavIndicator : {}}>
          <Icon 
            name={activeScreen === 'Profile' ? "person" : "person-outline"} 
            size={24} 
            color={activeScreen === 'Profile' ? '#4A90E2' : '#666'} 
          />
        </View>
        <Text style={[styles.navText, activeScreen === 'Profile' && styles.activeNavText]}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeNavIndicator: {
    backgroundColor: '#E3F2FD',
    padding: 8,
    borderRadius: 20,
  },
  navText: {
    fontSize: 11,
    color: '#666',
    marginTop: 4,
    fontWeight: '500',
  },
  activeNavText: {
    color: '#4A90E2',
    fontWeight: '600',
  },
});

export default BottomNav;