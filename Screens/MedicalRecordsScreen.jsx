import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import BottomNav from '../Components/BottomNav'; // Import the component
// Note: Icon components (like ChevronLeft, HeartPulse, etc.) are omitted here
// as they require external libraries (e.g., 'react-native-vector-icons').
// Simple placeholders are used for visual structure.

const { width } = Dimensions.get('window');

// Data for reports - Simulating icons with color/name association
const reportsData = [
  { date: '08/15/2023', title: 'Complete Blood Count', details: 'PDF - 2.1 MB', iconColor: '#E63946', iconText: '🩸' },
  { date: '07/22/2023', title: 'Chest X-Ray', details: 'IMG - 4.5 MB', iconColor: '#457B9D', iconText: '🩻' },
  { date: '06/05/2023', title: 'Lipid Panel Results', details: 'PDF - 1.8 MB', iconColor: '#3D9970', iconText: '🧪' },
  { date: '05/18/2023', title: 'Brain MRI Scan', details: 'DICOM - 15.2 MB', iconColor: '#8E44AD', iconText: '🧠' },
];

// Data for key information
const infoData = [
  { label: 'Hypertension', detail: 'Diagnosed on Jan 15, 2023', iconBg: '#FF5733', iconText: '❤️' },
  { label: 'Lisinopril 10mg', detail: 'Prescribed on Jan 15, 2023', iconBg: '#3498DB', iconText: '💊' },
];

// Reusable Report Card Component
const ReportCard = ({ date, title, details, iconColor, iconText }) => {
  return (
    <TouchableOpacity style={styles.reportCardContainer}>
      {/* Simulated Image/Icon Area */}
      <View style={[styles.reportImageArea, { backgroundColor: iconColor }]}>
        <Text style={styles.reportIconText}>{iconText}</Text>
        <Text style={styles.reportDateOverlay}>{date}</Text>
      </View>
      
      {/* Report Details */}
      <View style={styles.reportDetails}>
        <Text style={styles.reportName} numberOfLines={1}>{title}</Text>
        <Text style={styles.reportType}>{details}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Reusable Key Information Component
const InfoItem = ({ iconBg, iconText, label, detail }) => {
  return (
    <View style={styles.infoCard}>
      <View style={[styles.infoIconBg, { backgroundColor: iconBg }]}>
        <Text style={styles.infoIconText}>{iconText}</Text>
      </View>
      <View style={styles.infoTextContainer}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoDetail}>{detail}</Text>
      </View>
    </View>
  );
};

const MedicalRecordsScreen = ({ navigation }) => {
  // Mock navigation function for a runnable example
  const mockNavigate = (screen) => console.log(`Navigating to ${screen}`);
  const nav = navigation || { navigate: mockNavigate };

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Fixed Header */}
     
      
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        
        {/* Uploaded Reports Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Uploaded Reports</Text>
          <TouchableOpacity>
            <Text style={styles.filterIcon}>≡</Text>
          </TouchableOpacity>
        </View>
        
        {/* Reports Grid */}
        <View style={styles.reportsGrid}>
          {reportsData.map((report, index) => (
            <ReportCard key={index} {...report} />
          ))}
        </View>
        
        {/* Key Information Section */}
        <Text style={styles.sectionTitle}>Key Information</Text>
        
        {/* Information Cards */}
        <View style={styles.infoContainer}>
          {infoData.map((info, index) => (
            <InfoItem key={index} {...info} />
          ))}
        </View>
        
      </ScrollView>
      
      {/* Bottom Navigation */}
           <BottomNav navigation={navigation} activeScreen="MedicalRecords" />

    </SafeAreaView>
  );
};

const NavItem = ({ name, icon, isActive, navigation, target }) => (
  <TouchableOpacity 
    style={styles.navItem}
    onPress={() => navigation.navigate(target)}
  >
    <Text style={[styles.navIcon, isActive && styles.activeNavIcon]}>{icon}</Text>
    <Text style={[styles.navText, isActive && styles.activeNavText]}>{name}</Text>
  </TouchableOpacity>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    backgroundColor: '#fff',
  },
  headerIcon: {
    padding: 5,
  },
  iconPlaceholder: {
    fontSize: 24,
    color: '#333',
    fontWeight: '300',
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingBottom: 100, // Space for bottom nav
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  filterIcon: {
    fontSize: 24,
    color: '#4A90E2',
    padding: 5,
  },
  reportsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  // Report Card Styling
  reportCardContainer: {
    width: width * 0.5 - 30, // Approx 48% of screen width minus padding
    marginBottom: 15,
    borderRadius: 12,
    backgroundColor: '#F7F7F7',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  reportImageArea: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 12,
  },
  reportIconText: {
    fontSize: 48,
    opacity: 0.8,
  },
  reportDateOverlay: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
  },
  reportDetails: {
    padding: 10,
    backgroundColor: '#fff',
  },
  reportName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  reportType: {
    fontSize: 12,
    color: '#666',
  },

  // Key Information Styling
  infoContainer: {
    marginTop: 10,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  infoIconBg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  infoIconText: {
    fontSize: 18,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  infoDetail: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },

  // Bottom Navigation Styling
  bottomNav: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
    backgroundColor: '#fff',
    paddingBottom: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  navIcon: {
    fontSize: 24,
    color: '#666',
  },
  activeNavIcon: {
    color: '#4A90E2',
  },
  navText: {
    fontSize: 11,
    color: '#666',
    marginTop: 2,
  },
  activeNavText: {
    color: '#4A90E2',
    fontWeight: '600',
  },
});

export default MedicalRecordsScreen;