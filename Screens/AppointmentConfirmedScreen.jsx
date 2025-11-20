import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert
} from 'react-native';

const AppointmentConfirmedScreen = ({ navigation, route }) => {

  // Get passed data
  const { doctor, date, time } = route.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.confirmationContainer}>
          
          <Text style={styles.confirmationTitle}>Appointment Confirmed</Text>

          <Text style={styles.confirmationMessage}>
            Your appointment with {doctor || "Doctor"} has been successfully booked.
          </Text>

          <View style={styles.divider} />

          <View style={styles.appointmentDetails}>
            <Text style={styles.doctorName}>{doctor?.name}</Text>
            <Text style={styles.doctorSpecialty}>{doctor?.specialty}</Text>

            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Date & Time</Text>
              <Text style={styles.detailValue}>
                {date} at {time}
              </Text>
            </View>

            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Location</Text>
              <Text style={styles.detailValue}>
                {doctor?.location || "Health Clinic"}
              </Text>
            </View>
          </View>

          <TouchableOpacity 
  style={styles.calendarButton}
  onPress={() => {
    Alert.alert("Success", "Your appointment is confirmed!");
  }}
>
  <Text style={styles.calendarButtonText}>Confirm</Text>
</TouchableOpacity>


          <TouchableOpacity 
            style={styles.viewAppointmentsButton}
            onPress={() => navigation.navigate('Appointments')}
          >
            <Text style={styles.viewAppointmentsText}>View all appointments</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { flexGrow: 1, justifyContent: 'center', paddingHorizontal: 30 },
  confirmationContainer: { alignItems: 'center' },
  confirmationTitle: { fontSize: 24, fontWeight: 'bold', color: '#000', textAlign: 'center', marginBottom: 15 },
  confirmationMessage: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 30 },
  divider: { height: 1, backgroundColor: '#e9ecef', width: '100%', marginBottom: 30 },
  appointmentDetails: { width: '100%', marginBottom: 30 },
  doctorName: { fontSize: 18, fontWeight: 'bold', color: '#000', textAlign: 'center', marginBottom: 5 },
  doctorSpecialty: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 25 },
  detailItem: { marginBottom: 20 },
  detailLabel: { fontSize: 14, color: '#666', marginBottom: 5 },
  detailValue: { fontSize: 16, color: '#000', fontWeight: '500' },
  calendarButton: { backgroundColor: '#4A90E2', paddingVertical: 15, borderRadius: 25, width: '100%', alignItems: 'center', marginBottom: 15 },
  calendarButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  viewAppointmentsButton: { paddingVertical: 15, width: '100%', alignItems: 'center' },
  viewAppointmentsText: { color: '#4A90E2', fontSize: 16, fontWeight: '500' },
});

export default AppointmentConfirmedScreen;
