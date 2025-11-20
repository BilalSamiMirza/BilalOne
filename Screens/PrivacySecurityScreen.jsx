import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Switch
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNav from '../Components/BottomNav';

const PrivacySecurityScreen = ({ navigation }) => {
  // Static state for toggles
  const [notifications, setNotifications] = React.useState(true);
  const [location, setLocation] = React.useState(false);
  const [dataSharing, setDataSharing] = React.useState(true);
  const [biometric, setBiometric] = React.useState(false);
  const [twoFactor, setTwoFactor] = React.useState(true);

  const privacySections = [
    {
      title: "Privacy Settings",
      icon: "shield-checkmark",
      color: "#4A90E2",
      items: [
        {
          title: "Data Collection",
          description: "How we collect and use your health data",
          type: "link",
          icon: "analytics-outline"
        },
        {
          title: "Medical Data Sharing",
          description: "Control who can access your medical records",
          type: "link",
          icon: "medical-outline"
        },
        {
          title: "Research Participation",
          description: "Opt in/out of anonymous data for medical research",
          type: "link",
          icon: "flask-outline"
        }
      ]
    },
    {
      title: "Security Settings",
      icon: "lock-closed",
      color: "#FF6B6B",
      items: [
        {
          title: "Two-Factor Authentication",
          description: "Add an extra layer of security to your account",
          type: "toggle",
          value: twoFactor,
          onValueChange: setTwoFactor,
          icon: "key-outline"
        },
        {
          title: "Biometric Login",
          description: "Use fingerprint or face ID to login",
          type: "toggle",
          value: biometric,
          onValueChange: setBiometric,
          icon: "finger-print-outline"
        },
        {
          title: "Session Timeout",
          description: "Automatically logout after 15 minutes of inactivity",
          type: "link",
          icon: "time-outline"
        }
      ]
    },
    {
      title: "App Permissions",
      icon: "settings",
      color: "#45B7D1",
      items: [
        {
          title: "Push Notifications",
          description: "Receive appointment reminders and health updates",
          type: "toggle",
          value: notifications,
          onValueChange: setNotifications,
          icon: "notifications-outline"
        },
        {
          title: "Location Services",
          description: "Find nearby hospitals and clinics",
          type: "toggle",
          value: location,
          onValueChange: setLocation,
          icon: "location-outline"
        },
        {
          title: "Camera Access",
          description: "Upload medical documents and prescriptions",
          type: "link",
          icon: "camera-outline"
        }
      ]
    },
    {
      title: "Data & Storage",
      icon: "cloud",
      color: "#3D9970",
      items: [
        {
          title: "Data Backup",
          description: "Automatically backup your medical records",
          type: "toggle",
          value: dataSharing,
          onValueChange: setDataSharing,
          icon: "cloud-upload-outline"
        },
        {
          title: "Clear Cache",
          description: "Free up storage space",
          type: "link",
          icon: "trash-outline"
        },
        {
          title: "Download My Data",
          description: "Export all your health information",
          type: "link",
          icon: "download-outline"
        }
      ]
    }
  ];

  const handleLinkPress = (title) => {
    // In a real app, you would navigate to detailed pages
    console.log(`Navigating to ${title}`);
  };

  const SectionHeader = ({ title, icon, color }) => (
    <View style={styles.sectionHeader}>
      <View style={[styles.sectionIcon, { backgroundColor: color }]}>
        <Icon name={icon} size={20} color="#fff" />
      </View>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );

  const SettingItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.settingItem}
      onPress={() => item.type === 'link' && handleLinkPress(item.title)}
    >
      <View style={styles.settingLeft}>
        <View style={styles.settingIcon}>
          <Icon name={item.icon} size={22} color="#666" />
        </View>
        <View style={styles.settingText}>
          <Text style={styles.settingTitle}>{item.title}</Text>
          <Text style={styles.settingDescription}>{item.description}</Text>
        </View>
      </View>
      
      <View style={styles.settingRight}>
        {item.type === 'toggle' ? (
          <Switch
            value={item.value}
            onValueChange={item.onValueChange}
            trackColor={{ false: '#f0f0f0', true: '#4A90E2' }}
            thumbColor={item.value ? '#fff' : '#f4f3f4'}
          />
        ) : (
          <Icon name="chevron-forward" size={20} color="#ccc" />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        
        <Text style={styles.pageTitle}>Privacy & Security</Text>
        
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Security Status Card */}
        <View style={styles.securityCard}>
          <View style={styles.securityHeader}>
            <Icon name="shield-checkmark" size={32} color="#4A90E2" />
            <Text style={styles.securityTitle}>Security Status</Text>
          </View>
          <Text style={styles.securitySubtitle}>Your account is well protected</Text>
          
          <View style={styles.securityMetrics}>
            <View style={styles.metricItem}>
              <Text style={styles.metricValue}>Strong</Text>
              <Text style={styles.metricLabel}>Password</Text>
            </View>
            <View style={styles.metricDivider} />
            <View style={styles.metricItem}>
              <Text style={styles.metricValue}>Enabled</Text>
              <Text style={styles.metricLabel}>2FA</Text>
            </View>
            <View style={styles.metricDivider} />
            <View style={styles.metricItem}>
              <Text style={styles.metricValue}>Active</Text>
              <Text style={styles.metricLabel}>Encryption</Text>
            </View>
          </View>
        </View>

        {/* Privacy & Security Sections */}
        {privacySections.map((section, index) => (
          <View key={index} style={styles.section}>
            <SectionHeader 
              title={section.title} 
              icon={section.icon} 
              color={section.color} 
            />
            
            <View style={styles.sectionContent}>
              {section.items.map((item, itemIndex) => (
                <SettingItem key={itemIndex} item={item} />
              ))}
            </View>
          </View>
        ))}

        {/* Legal Links */}
        <View style={styles.legalSection}>
          <Text style={styles.legalTitle}>Legal & Policies</Text>
          
          <TouchableOpacity style={styles.legalLink}>
            <Icon name="document-text-outline" size={20} color="#666" />
            <Text style={styles.legalLinkText}>Privacy Policy</Text>
            <Icon name="open-outline" size={16} color="#999" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.legalLink}>
            <Icon name="document-text-outline" size={20} color="#666" />
            <Text style={styles.legalLinkText}>Terms of Service</Text>
            <Icon name="open-outline" size={16} color="#999" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.legalLink}>
            <Icon name="document-text-outline" size={20} color="#666" />
            <Text style={styles.legalLinkText}>Data Processing Agreement</Text>
            <Icon name="open-outline" size={16} color="#999" />
          </TouchableOpacity>
        </View>

        {/* Contact Support */}
        <View style={styles.supportSection}>
          <Text style={styles.supportTitle}>Need Help?</Text>
          <Text style={styles.supportText}>
            Contact our privacy team for any questions about your data and security.
          </Text>
          <TouchableOpacity style={styles.supportButton}>
            <Icon name="chatbubble-ellipses-outline" size={18} color="#4A90E2" />
            <Text style={styles.supportButtonText}>Contact Support</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNav navigation={navigation} activeScreen="Profile" />
    </SafeAreaView>
  );
};

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
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    padding: 5,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  headerPlaceholder: {
    width: 24,
  },
  scrollView: {
    flex: 1,
    paddingBottom: 20,
  },
  // Security Card
  securityCard: {
    backgroundColor: '#F8F9FF',
    margin: 20,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8EDFF',
  },
  securityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  securityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 12,
  },
  securitySubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  securityMetrics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metricItem: {
    alignItems: 'center',
    flex: 1,
  },
  metricValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 12,
    color: '#666',
  },
  metricDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#E8EDFF',
  },
  // Sections
  section: {
    marginBottom: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fafafa',
  },
  sectionIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionContent: {
    paddingHorizontal: 10,
  },
  // Setting Items
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    width: 40,
    alignItems: 'center',
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
  settingRight: {
    marginLeft: 10,
  },
  // Legal Section
  legalSection: {
    margin: 20,
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
  },
  legalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  legalLink: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  legalLinkText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    marginLeft: 12,
  },
  // Support Section
  supportSection: {
    margin: 20,
    padding: 20,
    backgroundColor: '#F0F8FF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E3F2FD',
  },
  supportTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  supportText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 15,
  },
  supportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4A90E2',
  },
  supportButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4A90E2',
    marginLeft: 8,
  },
});

export default PrivacySecurityScreen;