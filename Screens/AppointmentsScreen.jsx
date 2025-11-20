// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   ScrollView
// } from 'react-native';

// const AppointmentsScreen = ({ navigation }) => {

//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchAppointments = async () => {
//     try {
//       const res = await fetch("http://192.168.100.138:7000/appointments/get");   // <-- CHANGE IP
//       const json = await res.json();

//       if (json.success) {
//         setAppointments(json.data);
//       }
//     } catch (err) {
//       console.log("Fetch error:", err);
//     }

//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView style={styles.scrollView}>
        
//        <View style={styles.header}>
  
//   {/* Back Button */}
 

//   {/* Center Title */}
//   <Text style={styles.pageTitle}>Appointments</Text>

//   {/* Schedule Button */}
//   <TouchableOpacity 
//     style={styles.scheduleButton}
//     onPress={() => navigation.navigate('ScheduleAppointment')}
//   >
//     <Text style={styles.scheduleButtonText}>+ Schedule New</Text>
//   </TouchableOpacity>

// </View>


//         <Text style={styles.sectionTitle}>Your Appointments</Text>

//         {loading ? (
//           <Text>Loading...</Text>
//         ) : appointments.length === 0 ? (
//           <Text>No Appointments Found</Text>
//         ) : (
//           appointments.map((item, index) => (
//             <View key={index} style={styles.appointmentCard}>
//               <Text style={styles.appointmentType}>Doctor: {item.doctor}</Text>
//               <Text style={styles.appointmentDate}>
//                 Date: {item.date} {item.month} {item.year}
//               </Text>
//               <Text style={styles.appointmentTime}>Time: {item.time}</Text>
//             </View>
//           ))
//         )}

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
//           <Text style={[styles.navText, styles.activeNavText]}>Appointments</Text>
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
//     backgroundColor: '#fff',
//   },
//   scrollView: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingTop: 20,
//     paddingBottom: 15,
//   },
//   pageTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   scheduleButton: {
//     backgroundColor: '#4A90E2',
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     borderRadius: 15,
//   },
//   scheduleButtonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#000',
//     marginTop: 20,
//     marginBottom: 15,
//   },
//   appointmentCard: {
//     backgroundColor: '#f8f9fa',
//     borderRadius: 12,
//     padding: 20,
//     marginBottom: 15,
//   },
//   appointmentType: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000',
//     marginBottom: 5,
//   },
//   doctorName: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 10,
//   },
//   appointmentDetails: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   appointmentDate: {
//     fontSize: 14,
//     color: '#333',
//   },
//   appointmentTime: {
//     fontSize: 14,
//     color: '#333',
//   },
//   pastAppointmentCard: {
//     backgroundColor: '#f8f9fa',
//     borderRadius: 12,
//     padding: 20,
//     marginBottom: 15,
//   },
//   pastAppointmentHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
//   statusCompleted: {
//     fontSize: 12,
//     color: '#28a745',
//     fontWeight: '600',
//   },
//   statusCanceled: {
//     fontSize: 12,
//     color: '#dc3545',
//     fontWeight: '600',
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
//     color: '#666',
//   },
//   activeNavText: {
//     color: '#4A90E2',
//     fontWeight: '500',
//   },
  
// });

// export default AppointmentsScreen;






















import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
  Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AppointmentsScreen = ({ navigation }) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

const BASE_URL = 'https://bilalone-backend.onrender.com';

  const fetchAppointments = async () => {
    try {
      console.log("Fetching appointments from:", `${BASE_URL}/appointments/get`);
      const res = await fetch(`${BASE_URL}/appointments/get`);
      const json = await res.json();
      console.log("Appointments response:", json);

      if (json.success) {
        setAppointments(json.data);
      } else {
        Alert.alert("Error", "Failed to fetch appointments");
      }
    } catch (err) {
      console.log("Fetch error:", err);
      Alert.alert("Error", "Failed to connect to server");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleDelete = async (appointmentId) => {
    Alert.alert(
      "Delete Appointment",
      "Are you sure you want to delete this appointment?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              console.log("Deleting appointment:", appointmentId);
              const response = await fetch(`${BASE_URL}/appointments/delete`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: appointmentId }),
              });
              
              const data = await response.json();
              console.log("Delete response:", data);
              
              if (data.success) {
                Alert.alert("Success", "Appointment deleted successfully");
                fetchAppointments(); // Refresh the list
              } else {
                Alert.alert("Error", data.message || "Failed to delete appointment");
              }
            } catch (error) {
              console.log("Delete error:", error);
              Alert.alert("Error", "Network error - failed to delete appointment");
            }
          }
        }
      ]
    );
  };

  const handleEdit = (appointment) => {
    console.log("Editing appointment:", appointment);
    setSelectedAppointment(appointment);
    setSelectedDoctor(appointment.doctor);
    setSelectedDate(appointment.date);
    setSelectedTime(appointment.time);
    setEditModalVisible(true);
  };

  const handleUpdate = async () => {
    if (!selectedDate || !selectedDoctor || !selectedTime) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    try {
      console.log("Updating appointment:", selectedAppointment._id);
      const response = await fetch(`${BASE_URL}/appointments/update`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: selectedAppointment._id,
          date: selectedDate,
          doctor: selectedDoctor,
          time: selectedTime,
        }),
      });

      const data = await response.json();
      console.log("Update response:", data);
      
      if (data.success) {
        Alert.alert("Success", "Appointment updated successfully");
        setEditModalVisible(false);
        fetchAppointments(); // Refresh the list
      } else {
        Alert.alert("Error", data.message || "Failed to update appointment");
      }
    } catch (error) {
      console.log("Update error:", error);
      Alert.alert("Error", "Network error - failed to update appointment");
    }
  };

  // Calendar functions for edit modal
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const generateCalendar = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
    const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    let calendar = [];
    for (let i = 0; i < firstDay; i++) calendar.push({ empty: true });
    for (let day = 1; day <= totalDays; day++) {
      const weekdayIndex = new Date(currentYear, currentMonth, day).getDay();
      calendar.push({
        day: String(day),
        weekday: weekdays[weekdayIndex]
      });
    }
    return calendar;
  };

  const dates = generateCalendar();

  const goPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

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

  const timeSlots = {
    Morning: ['09:00 AM', '09:30 AM', '10:00 AM'],
    Afternoon: ['02:00 PM', '03:30 PM', '04:00 PM']
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.pageTitle}>Appointments</Text>
          <TouchableOpacity 
            style={styles.scheduleButton}
            onPress={() => navigation.navigate('ScheduleAppointment')}
          >
            <Icon name="add-circle-outline" size={18} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.scheduleButtonText}>Schedule New</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Your Appointments</Text>

        {loading ? (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Loading appointments...</Text>
          </View>
        ) : appointments.length === 0 ? (
          <View style={styles.emptyState}>
            <Icon name="calendar-outline" size={64} color="#ccc" />
            <Text style={styles.emptyStateTitle}>No Appointments</Text>
            <Text style={styles.emptyStateText}>
              You don't have any appointments scheduled yet.
            </Text>
            <TouchableOpacity 
              style={styles.scheduleEmptyButton}
              onPress={() => navigation.navigate('ScheduleAppointment')}
            >
              <Text style={styles.scheduleEmptyButtonText}>Schedule Your First Appointment</Text>
            </TouchableOpacity>
          </View>
        ) : (
          appointments.map((item, index) => (
            <View key={index} style={styles.appointmentCard}>
              <View style={styles.appointmentHeader}>
                <Icon name="medical-outline" size={20} color="#4A90E2" />
                <Text style={styles.appointmentType}>{item.doctor}</Text>
              </View>
              
              <View style={styles.appointmentDetails}>
                <View style={styles.detailRow}>
                  <Icon name="calendar-outline" size={16} color="#666" />
                  <Text style={styles.appointmentDate}>
                    {item.date} {item.month} {item.year}
                  </Text>
                </View>
                
                <View style={styles.detailRow}>
                  <Icon name="time-outline" size={16} color="#666" />
                  <Text style={styles.appointmentTime}>{item.time}</Text>
                </View>
              </View>
              
              <View style={styles.actionButtons}>
                <TouchableOpacity 
                  style={styles.editButton}
                  onPress={() => handleEdit(item)}
                >
                  <Icon name="create-outline" size={16} color="#fff" />
                  <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.deleteButton}
                  onPress={() => handleDelete(item._id)}
                >
                  <Icon name="trash-outline" size={16} color="#fff" />
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>

      {/* Edit Appointment Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={editModalVisible}
        onRequestClose={() => setEditModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Edit Appointment</Text>
                <TouchableOpacity 
                  style={styles.closeButton}
                  onPress={() => setEditModalVisible(false)}
                >
                  <Icon name="close" size={24} color="#666" />
                </TouchableOpacity>
              </View>

              {/* Calendar Section */}
              <Text style={styles.sectionTitle}>Choose a Date</Text>
              <View style={styles.calendarHeader}>
                <TouchableOpacity onPress={goPrevMonth} style={styles.navButton}>
                  <Icon name="chevron-back" size={20} color="#4A90E2" />
                </TouchableOpacity>
                <Text style={styles.monthTitle}>
                  {monthNames[currentMonth]} {currentYear}
                </Text>
                <TouchableOpacity onPress={goNextMonth} style={styles.navButton}>
                  <Icon name="chevron-forward" size={20} color="#4A90E2" />
                </TouchableOpacity>
              </View>

              <View style={styles.weekdayHeader}>
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                  <Text key={index} style={styles.weekdayText}>{day}</Text>
                ))}
              </View>

              <View style={styles.calendarGrid}>
                {dates.map((date, index) => (
                  date.empty ? (
                    <View key={index} style={styles.dateCell} />
                  ) : (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.dateCell,
                        selectedDate === `${date.day}-${currentMonth + 1}-${currentYear}` &&
                        styles.selectedDateCell
                      ]}
                      onPress={() => setSelectedDate(`${date.day}-${currentMonth + 1}-${currentYear}`)}
                    >
                      <Text style={[
                        styles.weekdaySmall,
                        selectedDate === `${date.day}-${currentMonth + 1}-${currentYear}` &&
                        styles.selectedDateText
                      ]}>
                        {date.weekday}
                      </Text>
                      <Text style={[
                        styles.dateNumber,
                        selectedDate === `${date.day}-${currentMonth + 1}-${currentYear}` &&
                        styles.selectedDateText
                      ]}>
                        {date.day}
                      </Text>
                    </TouchableOpacity>
                  )
                ))}
              </View>

              {/* Doctors List */}
              <Text style={styles.sectionTitle}>Select Your Doctor</Text>
              {doctors.map((doctor, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.doctorCard,
                    selectedDoctor === doctor.name && styles.selectedDoctorCard
                  ]}
                  onPress={() => setSelectedDoctor(doctor.name)}
                >
                  <View style={styles.doctorInfo}>
                    <Icon name="person-circle-outline" size={40} color="#4A90E2" />
                    <View style={styles.doctorDetails}>
                      <Text style={styles.doctorName}>{doctor.name}</Text>
                      <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
                    </View>
                  </View>
                  <Text style={styles.doctorRating}>{doctor.rating}</Text>
                </TouchableOpacity>
              ))}

              {/* Time Slots */}
              <Text style={styles.sectionTitle}>Available Time Slots</Text>
              {Object.entries(timeSlots).map(([period, times]) => (
                <View key={period} style={styles.timeSection}>
                  <Text style={styles.timePeriod}>{period}</Text>
                  <View style={styles.timeSlots}>
                    {times.map((time, index) => (
                      <TouchableOpacity
                        key={index}
                        style={[
                          styles.timeSlot,
                          selectedTime === time && styles.selectedTimeSlot
                        ]}
                        onPress={() => setSelectedTime(time)}
                      >
                        <Text style={[
                          styles.timeText,
                          selectedTime === time && styles.selectedTimeText
                        ]}>
                          {time}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              ))}

              {/* Update Button */}
              <TouchableOpacity
                style={[
                  styles.updateButton,
                  (!selectedDate || !selectedDoctor || !selectedTime) && styles.disabledButton
                ]}
                onPress={handleUpdate}
                disabled={!selectedDate || !selectedDoctor || !selectedTime}
              >
                <Icon name="checkmark-circle-outline" size={20} color="#fff" />
                <Text style={styles.updateButtonText}>Update Appointment</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Dashboard')}
        >
          <Icon name="home-outline" size={24} color="#666" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Appointments')}
        >
          <View style={styles.activeNavIndicator}>
            <Icon name="calendar" size={24} color="#4A90E2" />
          </View>
          <Text style={[styles.navText, styles.activeNavText]}>Appointments</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('MedicalRecords')}
        >
          <Icon name="document-text-outline" size={24} color="#666" />
          <Text style={styles.navText}>Records</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Profile')}
        >
          <Icon name="person-outline" size={24} color="#666" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 15,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  scheduleButton: {
    backgroundColor: '#4A90E2',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 25,
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonIcon: {
    marginRight: 6,
  },
  scheduleButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
    marginBottom: 15,
  },
  loadingContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  loadingText: {
    fontSize: 16,
    color: '#666',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 40,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 20,
    marginBottom: 10,
  },
  emptyStateText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 25,
  },
  scheduleEmptyButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  scheduleEmptyButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  appointmentCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  appointmentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  appointmentType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
  },
  appointmentDetails: {
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  appointmentDate: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
  },
  appointmentTime: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
  editButton: {
    backgroundColor: '#4A90E2',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#dc3545',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
  // Modal Styles
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    maxHeight: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  closeButton: {
    padding: 5,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  navButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#f8f9fa',
  },
  monthTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  weekdayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  weekdayText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  dateCell: {
    width: '14.28%',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 5,
  },
  selectedDateCell: {
    backgroundColor: '#4A90E2',
    borderRadius: 20,
  },
  weekdaySmall: {
    fontSize: 10,
    color: '#666',
    marginBottom: 2,
  },
  dateNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  selectedDateText: {
    color: '#fff',
  },
  doctorCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  selectedDoctorCard: {
    backgroundColor: '#e3f2fd',
    borderColor: '#4A90E2',
    borderWidth: 2,
  },
  doctorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  doctorDetails: {
    marginLeft: 12,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#666',
  },
  doctorRating: {
    fontSize: 12,
    color: '#666',
  },
  timeSection: {
    marginBottom: 20,
  },
  timePeriod: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  timeSlots: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  timeSlot: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  selectedTimeSlot: {
    backgroundColor: '#4A90E2',
    borderColor: '#4A90E2',
  },
  timeText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  selectedTimeText: {
    color: '#fff',
  },
  updateButton: {
    backgroundColor: '#4A90E2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 25,
    marginTop: 20,
    marginBottom: 10,
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  disabledButton: {
    backgroundColor: '#ccc',
    shadowColor: '#ccc',
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  // Bottom Navigation
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

export default AppointmentsScreen;