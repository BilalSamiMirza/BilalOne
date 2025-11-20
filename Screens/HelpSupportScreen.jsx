import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Linking,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import { LinearGradient } from 'react-native-linear-gradient';

const HelpSupportScreen = ({ navigation }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleCallSupport = () => {
    Linking.openURL('tel:+11234567890');
  };

  const handleEmailSupport = () => {
    Linking.openURL('mailto:support@healthapp.com');
  };

  const handleLiveChat = () => {
    Alert.alert('Live Chat', 'Our live chat support will be available soon!');
  };

  const faqData = [
    {
      id: 1,
      question: 'How do I book an appointment?',
      answer: 'To book an appointment, go to the Appointments tab, select your preferred doctor, choose an available time slot, and confirm your booking.'
    },
    {
      id: 2,
      question: 'Can I reschedule my appointment?',
      answer: 'Yes, you can reschedule appointments up to 24 hours before the scheduled time. Go to My Appointments, select the appointment, and choose Reschedule.'
    },
    {
      id: 3,
      question: 'How do I update my personal information?',
      answer: 'Go to your Profile screen and tap on Edit Profile. You can update your name, email, and password from there.'
    },
    {
      id: 4,
      question: 'Is my medical data secure?',
      answer: 'Yes, we use industry-standard encryption to protect all your medical data and personal information.'
    },
    {
      id: 5,
      question: 'What should I do if I forget my password?',
      answer: 'On the login screen, tap "Forgot Password" and follow the instructions to reset your password via email.'
    }
  ];

  return (
   
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Icon name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.pageTitle}>Help & Support</Text>
            <View style={{ width: 24 }} />
          </View>

          <View style={styles.contentContainer}>
            
            {/* Quick Support Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Quick Support</Text>
              
              <View style={styles.supportCards}>
                <TouchableOpacity style={styles.supportCard} onPress={handleCallSupport}>
                  <View style={[styles.iconContainer, { backgroundColor: '#E3F2FD' }]}>
                    <Icon name="call-outline" size={24} color="#1976D2" />
                  </View>
                  <Text style={styles.supportCardTitle}>Call Support</Text>
                  <Text style={styles.supportCardText}>24/7 Customer Care</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.supportCard} onPress={handleEmailSupport}>
                  <View style={[styles.iconContainer, { backgroundColor: '#E8F5E8' }]}>
                    <Icon name="mail-outline" size={24} color="#388E3C" />
                  </View>
                  <Text style={styles.supportCardTitle}>Email Us</Text>
                  <Text style={styles.supportCardText}>Get help via email</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.supportCard} onPress={handleLiveChat}>
                  <View style={[styles.iconContainer, { backgroundColor: '#FFF3E0' }]}>
                    <Icon name="chatbubble-outline" size={24} color="#F57C00" />
                  </View>
                  <Text style={styles.supportCardTitle}>Live Chat</Text>
                  <Text style={styles.supportCardText}>Instant messaging</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* FAQ Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
              
              <View style={styles.faqContainer}>
                {faqData.map((faq) => (
                  <View key={faq.id} style={styles.faqItem}>
                    <TouchableOpacity 
                      style={styles.faqQuestion}
                      onPress={() => toggleSection(faq.id)}
                    >
                      <Text style={styles.faqQuestionText}>{faq.question}</Text>
                      <Icon 
                        name={expandedSection === faq.id ? 'chevron-up' : 'chevron-down'} 
                        size={20} 
                        color="#666" 
                      />
                    </TouchableOpacity>
                    
                    {expandedSection === faq.id && (
                      <View style={styles.faqAnswer}>
                        <Text style={styles.faqAnswerText}>{faq.answer}</Text>
                      </View>
                    )}
                  </View>
                ))}
              </View>
            </View>

            {/* Contact Information */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Contact Information</Text>
              
              <View style={styles.contactCard}>
                <View style={styles.contactItem}>
                  <Icon name="time-outline" size={20} color="#666" />
                  <Text style={styles.contactText}>Support Hours: 24/7</Text>
                </View>
                
                <View style={styles.contactItem}>
                  <Icon name="call-outline" size={20} color="#666" />
                  <Text style={styles.contactText}>Phone: +1 (123) 456-7890</Text>
                </View>
                
                <View style={styles.contactItem}>
                  <Icon name="mail-outline" size={20} color="#666" />
                  <Text style={styles.contactText}>Email: support@healthapp.com</Text>
                </View>
                
                <View style={styles.contactItem}>
                  <Icon name="location-outline" size={20} color="#666" />
                  <Text style={styles.contactText}>Address: 123 Health St, Medical City</Text>
                </View>
              </View>
            </View>

            {/* Emergency Section */}
            <View style={styles.section}>
              <View style={styles.emergencyCard}>
                <Icon name="warning-outline" size={30} color="#D32F2F" />
                <Text style={styles.emergencyTitle}>Medical Emergency</Text>
                <Text style={styles.emergencyText}>
                  If this is a medical emergency, please call your local emergency services immediately.
                </Text>
                <TouchableOpacity 
                  style={styles.emergencyButton}
                  onPress={() => Linking.openURL('tel:911')}
                >
                  <Text style={styles.emergencyButtonText}>Call Emergency Services</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  backButton: {
    padding: 5,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  // Support Cards
  supportCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  supportCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    width: '31%',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  supportCardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    marginBottom: 5,
  },
  supportCardText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  // FAQ Section
  faqContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  faqItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  faqQuestion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  faqQuestionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  faqAnswer: {
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  faqAnswerText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  // Contact Information
  contactCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 12,
  },
  // Emergency Section
  emergencyCard: {
    backgroundColor: '#FFEBEE',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFCDD2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  emergencyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D32F2F',
    marginTop: 10,
    marginBottom: 8,
  },
  emergencyText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 20,
  },
  emergencyButton: {
    backgroundColor: '#D32F2F',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  emergencyButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default HelpSupportScreen;