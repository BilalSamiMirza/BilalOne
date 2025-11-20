// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   ScrollView
// } from 'react-native';

// const ScheduleAppointmentScreen = ({ navigation }) => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [selectedTime, setSelectedTime] = useState(null);
// const BASE_URL = "http://192.168.43.226:7000"; // CHANGE TO YOUR LOCAL IP

// const handleConfirm = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/appointments/add`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         date: selectedDate,
//         doctor: selectedDoctor,
//         time: selectedTime,
//       }),
//     });

//     const data = await response.json();
//     console.log(data);

//     if (data.success) {
//       navigation.navigate("AppointmentConfirmed");
//     }
//   } catch (error) {
//     console.log("Error:", error);
//   }
// };

//   const dates = [
//     { day: '1', weekday: 'W' }, { day: '2', weekday: 'T' }, { day: '3', weekday: 'F' }, { day: '4', weekday: 'S' },
//     { day: '5', weekday: 'M' }, { day: '6', weekday: 'T' }, { day: '7', weekday: 'W' }, { day: '8', weekday: 'T' },
//     { day: '9', weekday: 'F' }, { day: '10', weekday: 'S' }, { day: '11', weekday: 'S' }, { day: '12', weekday: 'M' },
//     { day: '13', weekday: 'T' }, { day: '14', weekday: 'W' }, { day: '15', weekday: 'T' }, { day: '16', weekday: 'F' },
//     { day: '17', weekday: 'S' }, { day: '18', weekday: 'S' }, { day: '19', weekday: 'M' }, { day: '20', weekday: 'T' },
//     { day: '21', weekday: 'W' }, { day: '22', weekday: 'T' }, { day: '23', weekday: 'F' }, { day: '24', weekday: 'S' },
//     { day: '25', weekday: 'S' }, { day: '26', weekday: 'M' }, { day: '27', weekday: 'T' }, { day: '28', weekday: 'W' },
//     { day: '29', weekday: 'T' }, { day: '30', weekday: 'F' }, { day: '31', weekday: 'S' }
//   ];

//   const doctors = [
//     { name: 'Dr. Evelyn Reed', specialty: 'Cardiologist', rating: '4.9 (128 reviews)' },
//     { name: 'Dr. Marcus Chen', specialty: 'Dermatologist', rating: '4.8 (97 reviews)' }
//   ];

//   const timeSlots = {
//     Morning: ['09:00 AM', '09:30 AM', '10:00 AM'],
//     Afternoon: ['02:00 PM', '03:30 PM', '04:00 PM']
//   };

  

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView style={styles.scrollView}>
//         <View style={styles.header}>
//           <Text style={styles.pageTitle}>Schedule Appointment</Text>
//         </View>
        
//         <Text style={styles.sectionTitle}>Choose a Date</Text>
//         <Text style={styles.monthTitle}>December 2024</Text>
        
//         <View style={styles.calendarHeader}>
//           <Text style={styles.weekdayHeader}>M</Text>
//           <Text style={styles.weekdayHeader}>T</Text>
//           <Text style={styles.weekdayHeader}>W</Text>
//           <Text style={styles.weekdayHeader}>T</Text>
//           <Text style={styles.weekdayHeader}>F</Text>
//           <Text style={styles.weekdayHeader}>S</Text>
//           <Text style={styles.weekdayHeader}>S</Text>
//         </View>
        
//         <View style={styles.calendarGrid}>
//           {dates.map((date, index) => (
//             <TouchableOpacity
//               key={index}
//               style={[
//                 styles.dateCell,
//                 selectedDate === date.day && styles.selectedDateCell
//               ]}
//               onPress={() => setSelectedDate(date.day)}
//             >
//               <Text style={[
//                 styles.weekdayText,
//                 selectedDate === date.day && styles.selectedDateText
//               ]}>
//                 {date.weekday}
//               </Text>
//               <Text style={[
//                 styles.dateText,
//                 selectedDate === date.day && styles.selectedDateText
//               ]}>
//                 {date.day}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>
        
//         <Text style={styles.sectionTitle}>Select Your Doctor</Text>
        
//         {doctors.map((doctor, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[
//               styles.doctorCard,
//               selectedDoctor === doctor.name && styles.selectedDoctorCard
//             ]}
//             onPress={() => setSelectedDoctor(doctor.name)}
//           >
//             <View>
//               <Text style={styles.doctorName}>{doctor.name}</Text>
//               <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
//             </View>
//             <Text style={styles.doctorRating}>{doctor.rating}</Text>
//           </TouchableOpacity>
//         ))}
        
//         <Text style={styles.sectionTitle}>Available Time Slots</Text>
        
//         {Object.entries(timeSlots).map(([period, times]) => (
//           <View key={period} style={styles.timeSection}>
//             <Text style={styles.timePeriod}>{period}</Text>
//             <View style={styles.timeSlots}>
//               {times.map((time, index) => (
//                 <TouchableOpacity
//                   key={index}
//                   style={[
//                     styles.timeSlot,
//                     selectedTime === time && styles.selectedTimeSlot
//                   ]}
//                   onPress={() => setSelectedTime(time)}
//                 >
//                   <Text style={[
//                     styles.timeText,
//                     selectedTime === time && styles.selectedTimeText
//                   ]}>
//                     {time}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </View>
//         ))}
        
//         <TouchableOpacity 
//           style={[
//             styles.confirmButton,
//             (!selectedDate || !selectedDoctor || !selectedTime) && styles.disabledButton
//           ]}
//           onPress={handleConfirm}
//           disabled={!selectedDate || !selectedDoctor || !selectedTime}
//         >
//           <Text style={styles.confirmButtonText}>Confirm Appointment</Text>
//         </TouchableOpacity>
//       </ScrollView>
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
//     paddingTop: 20,
//     paddingBottom: 15,
//   },
//   pageTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#000',
//     marginTop: 25,
//     marginBottom: 15,
//   },
//   monthTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#000',
//     marginBottom: 15,
//   },
//   calendarHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   weekdayHeader: {
//     flex: 1,
//     textAlign: 'center',
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#666',
//   },
//   calendarGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginBottom: 10,
//   },
//   dateCell: {
//     width: '14.28%',
//     alignItems: 'center',
//     paddingVertical: 8,
//     marginBottom: 5,
//   },
//   selectedDateCell: {
//     backgroundColor: '#4A90E2',
//     borderRadius: 20,
//   },
//   weekdayText: {
//     fontSize: 12,
//     color: '#666',
//     marginBottom: 2,
//   },
//   dateText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#000',
//   },
//   selectedDateText: {
//     color: '#fff',
//   },
//   doctorCard: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#f8f9fa',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 10,
//   },
//   selectedDoctorCard: {
//     backgroundColor: '#e3f2fd',
//     borderColor: '#4A90E2',
//     borderWidth: 1,
//   },
//   doctorName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000',
//     marginBottom: 3,
//   },
//   doctorSpecialty: {
//     fontSize: 14,
//     color: '#666',
//   },
//   doctorRating: {
//     fontSize: 14,
//     color: '#666',
//   },
//   timeSection: {
//     marginBottom: 20,
//   },
//   timePeriod: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#000',
//     marginBottom: 10,
//   },
//   timeSlots: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   timeSlot: {
//     backgroundColor: '#f8f9fa',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 20,
//     marginRight: 10,
//     marginBottom: 10,
//   },
//   selectedTimeSlot: {
//     backgroundColor: '#4A90E2',
//   },
//   timeText: {
//     fontSize: 14,
//     color: '#000',
//   },
//   selectedTimeText: {
//     color: '#fff',
//   },
//   confirmButton: {
//     backgroundColor: '#4A90E2',
//     paddingVertical: 15,
//     borderRadius: 25,
//     alignItems: 'center',
//     marginTop: 20,
//     marginBottom: 30,
//   },
//   disabledButton: {
//     backgroundColor: '#ccc',
//   },
//   confirmButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// export default ScheduleAppointmentScreen;






import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native';

const ScheduleAppointmentScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

const BASE_URL = 'https://bilalone-backend.onrender.com'; // CHANGE TO YOUR BACKEND URL

  const handleConfirm = async () => {
    try {
      const response = await fetch(`${BASE_URL}/appointments/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: selectedDate,
          doctor: selectedDoctor,
          time: selectedTime,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        // navigation.navigate("AppointmentConfirmed");
        navigation.navigate("AppointmentConfirmed", {
  doctor: selectedDoctor,
  date: selectedDate,
  time: selectedTime,
});

      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // -------------------------------
  // 🔥 DYNAMIC CALENDAR START
  // -------------------------------
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
  // -------------------------------
  // 🔥 DYNAMIC CALENDAR END
  // -------------------------------

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
          <Text style={styles.pageTitle}>Schedule Appointment</Text>
        </View>

        <Text style={styles.sectionTitle}>Choose a Date</Text>

        {/* Month + year + buttons */}
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10
        }}>
          <TouchableOpacity onPress={goPrevMonth}>
            <Text style={{ fontSize: 18 }}>◀</Text>
          </TouchableOpacity>

          <Text style={styles.monthTitle}>
            {monthNames[currentMonth]} {currentYear}
          </Text>

          <TouchableOpacity onPress={goNextMonth}>
            <Text style={{ fontSize: 18 }}>▶</Text>
          </TouchableOpacity>
        </View>

        {/* Weekday Header */}
        <View style={styles.calendarHeader}>
          <Text style={styles.weekdayHeader}>S</Text>
          <Text style={styles.weekdayHeader}>M</Text>
          <Text style={styles.weekdayHeader}>T</Text>
          <Text style={styles.weekdayHeader}>W</Text>
          <Text style={styles.weekdayHeader}>T</Text>
          <Text style={styles.weekdayHeader}>F</Text>
          <Text style={styles.weekdayHeader}>S</Text>
        </View>

        {/* Dynamic Calendar Grid */}
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
                onPress={() =>
                  setSelectedDate(`${date.day}-${currentMonth + 1}-${currentYear}`)
                }
              >
                <Text style={[
                  styles.weekdayText,
                  selectedDate === `${date.day}-${currentMonth + 1}-${currentYear}` &&
                  styles.selectedDateText
                ]}>
                  {date.weekday}
                </Text>

                <Text style={[
                  styles.dateText,
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
            <View>
              <Text style={styles.doctorName}>{doctor.name}</Text>
              <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
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

        {/* Confirm Button */}
        <TouchableOpacity
          style={[
            styles.confirmButton,
            (!selectedDate || !selectedDoctor || !selectedTime) && styles.disabledButton
          ]}
          onPress={handleConfirm}
          disabled={!selectedDate || !selectedDoctor || !selectedTime}
        >
          <Text style={styles.confirmButtonText}>Confirm Appointment</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollView: { flex: 1, paddingHorizontal: 20 },
  header: { paddingTop: 20, paddingBottom: 15 },
  pageTitle: { fontSize: 24, fontWeight: 'bold', color: '#000' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#000', marginTop: 25, marginBottom: 15 },
  monthTitle: { fontSize: 18, fontWeight: '600', color: '#000' },
  calendarHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  weekdayHeader: { flex: 1, textAlign: 'center', fontSize: 14, fontWeight: '600', color: '#666' },
  calendarGrid: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 },
  dateCell: { width: '14.28%', alignItems: 'center', paddingVertical: 8, marginBottom: 5 },
  selectedDateCell: { backgroundColor: '#4A90E2', borderRadius: 20 },
  weekdayText: { fontSize: 12, color: '#666', marginBottom: 2 },
  dateText: { fontSize: 14, fontWeight: '600', color: '#000' },
  selectedDateText: { color: '#fff' },
  doctorCard: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', backgroundColor: '#f8f9fa',
    borderRadius: 10, padding: 15, marginBottom: 10
  },
  selectedDoctorCard: {
    backgroundColor: '#e3f2fd', borderColor: '#4A90E2', borderWidth: 1
  },
  doctorName: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  doctorSpecialty: { fontSize: 14, color: '#666' },
  doctorRating: { fontSize: 14, color: '#666' },
  timeSection: { marginBottom: 20 },
  timePeriod: { fontSize: 16, fontWeight: '600', color: '#000', marginBottom: 10 },
  timeSlots: { flexDirection: 'row', flexWrap: 'wrap' },
  timeSlot: {
    backgroundColor: '#f8f9fa', paddingVertical: 10,
    paddingHorizontal: 15, borderRadius: 20,
    marginRight: 10, marginBottom: 10
  },
  selectedTimeSlot: { backgroundColor: '#4A90E2' },
  timeText: { fontSize: 14, color: '#000' },
  selectedTimeText: { color: '#fff' },
  confirmButton: {
    backgroundColor: '#4A90E2', paddingVertical: 15,
    borderRadius: 25, alignItems: 'center',
    marginTop: 20, marginBottom: 30
  },
  disabledButton: { backgroundColor: '#ccc' },
  confirmButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' }
});

export default ScheduleAppointmentScreen;
