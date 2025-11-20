import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNav from '../Components/BottomNav'; // Import the component

const FindDoctorScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');


  const doctors = [
    { name: 'Dr. Evelyn Reed', specialty: 'Cardiologist', rating: '4.9 (128 reviews)' },
    { name: 'Dr. Marcus Chen', specialty: 'Dermatologist', rating: '4.8 (97 reviews)' },
    { name: 'Dr. Sophia Patel', specialty: 'Neurologist', rating: '4.7 (85 reviews)' },
    { name: 'Dr. Liam Johnson', specialty: 'Pediatrician', rating: '4.6 (102 reviews)' },
    { name: 'Dr. Olivia Kim', specialty: 'Oncologist', rating: '4.9 (140 reviews)' },
    { name: 'Dr. Noah Davis', specialty: 'Orthopedic', rating: '4.5 (76 reviews)' },
    { name: 'Dr. Emma Martinez', specialty: 'Gynecologist', rating: '4.8 (98 reviews)' },
    { name: 'Dr. William Brown', specialty: 'Cardiologist', rating: '4.7 (112 reviews)' }
  ];

  const specialties = ['All', 'Cardiologist', 'Dermatologist', 'Neurologist', 'Pediatrician', 'Oncologist', 'Orthopedic', 'Gynecologist'];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const handleDoctorSelect = (doctor) => {
    // Navigate to ScheduleAppointmentScreen without passing any parameters
    navigation.navigate('ScheduleAppointment');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.pageTitle}>Find a Doctor</Text>
          <Text style={styles.pageSubtitle}>Book appointment with best doctors</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search doctors or specialties..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Specialty Filter */}
        <Text style={styles.sectionTitle}>Specialties</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.specialtyScroll}
        >
          {specialties.map((specialty, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.specialtyChip,
                selectedSpecialty === specialty && styles.selectedSpecialtyChip
              ]}
              onPress={() => setSelectedSpecialty(specialty)}
            >
              <Text style={[
                styles.specialtyText,
                selectedSpecialty === specialty && styles.selectedSpecialtyText
              ]}>
                {specialty}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Doctors List */}
        <Text style={styles.sectionTitle}>
          {filteredDoctors.length} Doctors Found
        </Text>

        {filteredDoctors.map((doctor, index) => (
          <TouchableOpacity
            key={index}
            style={styles.doctorCard}
            onPress={() => handleDoctorSelect(doctor)}
          >
            <View style={styles.doctorAvatar}>
              <Text style={styles.avatarText}>
                {doctor.name.split(' ').map(n => n[0]).join('')}
              </Text>
            </View>
            
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>{doctor.name}</Text>
              <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>⭐ {doctor.rating}</Text>
              </View>
            </View>

            <View style={styles.bookButton}>
              <Text style={styles.bookButtonText}>Book</Text>
            </View>
          </TouchableOpacity>
        ))}

        {filteredDoctors.length === 0 && (
          <View style={styles.noResults}>
            <Text style={styles.noResultsText}>No doctors found</Text>
            <Text style={styles.noResultsSubtext}>Try changing your search or filter</Text>
          </View>
        )}

      </ScrollView>

      {/* Bottom Navigation */}
           <BottomNav navigation={navigation} activeScreen="Appointments" />

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
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 15,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  pageSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  searchContainer: {
    marginVertical: 15,
  },
  searchInput: {
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
    marginBottom: 15,
  },
  specialtyScroll: {
    marginBottom: 10,
  },
  specialtyChip: {
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  selectedSpecialtyChip: {
    backgroundColor: '#4A90E2',
    borderColor: '#4A90E2',
  },
  specialtyText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  selectedSpecialtyText: {
    color: '#fff',
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
  },
  doctorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 2,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
  },
  bookButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 15,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  noResults: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  noResultsText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
  },
  noResultsSubtext: {
    fontSize: 14,
    color: '#999',
  },
  bottomNav: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
    paddingVertical: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navText: {
    fontSize: 12,
    color: '#666',
  },
  activeNavText: {
    color: '#4A90E2',
    fontWeight: '500',
  },
});

export default FindDoctorScreen;