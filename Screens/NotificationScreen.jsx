import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNav from '../Components/BottomNav'; // Import the component

const NotificationScreen = ({ navigation }) => {
  // Static notifications data
  const notifications = [
    {
      id: 1,
      type: 'delay',
      title: 'Appointment Delay',
      message: 'Dr. Evelyn Reed is running 30 minutes late due to emergency surgery',
      doctor: 'Dr. Evelyn Reed',
      specialty: 'Cardiologist',
      time: '2 hours ago',
      isRead: false,
      icon: '⏰'
    },
    {
      id: 2,
      type: 'vacation',
      title: 'Doctor on Vacation',
      message: 'Dr. Marcus Chen is on vacation until next Monday',
      doctor: 'Dr. Marcus Chen',
      specialty: 'Dermatologist',
      time: '1 day ago',
      isRead: true,
      icon: '🏖️'
    },
    {
      id: 3,
      type: 'available',
      title: 'New Availability',
      message: 'Dr. Sophia Patel has opened new slots for next week',
      doctor: 'Dr. Sophia Patel',
      specialty: 'Neurologist',
      time: '2 days ago',
      isRead: true,
      icon: '📅'
    },
    {
      id: 4,
      type: 'reminder',
      title: 'Appointment Reminder',
      message: 'Your appointment with Dr. Liam Johnson is tomorrow at 10:00 AM',
      doctor: 'Dr. Liam Johnson',
      specialty: 'Pediatrician',
      time: '3 days ago',
      isRead: true,
      icon: '🔔'
    },
    {
      id: 5,
      type: 'cancellation',
      title: 'Appointment Cancelled',
      message: 'Dr. Olivia Kim has cancelled all appointments for Friday',
      doctor: 'Dr. Olivia Kim',
      specialty: 'Oncologist',
      time: '4 days ago',
      isRead: true,
      icon: '❌'
    },
    {
      id: 6,
      type: 'delay',
      title: 'Clinic Delay',
      message: 'Dr. Noah Davis clinic will open 1 hour late today',
      doctor: 'Dr. Noah Davis',
      specialty: 'Orthopedic',
      time: '1 week ago',
      isRead: true,
      icon: '⏰'
    },
    {
      id: 7,
      type: 'available',
      title: 'Early Appointment Available',
      message: 'Dr. Emma Martinez has early morning slots available',
      doctor: 'Dr. Emma Martinez',
      specialty: 'Gynecologist',
      time: '1 week ago',
      isRead: true,
      icon: '🌅'
    },
    {
      id: 8,
      type: 'reminder',
      title: 'Follow-up Reminder',
      message: 'Follow-up consultation with Dr. William Brown is due next week',
      doctor: 'Dr. William Brown',
      specialty: 'Cardiologist',
      time: '2 weeks ago',
      isRead: true,
      icon: '📋'
    }
  ];

  const getNotificationColor = (type) => {
    switch (type) {
      case 'delay': return '#FF6B35';
      case 'vacation': return '#4ECDC4';
      case 'available': return '#45B7D1';
      case 'reminder': return '#FFA62B';
      case 'cancellation': return '#FF5252';
      default: return '#666';
    }
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'delay': return '⏰';
      case 'vacation': return '🏖️';
      case 'available': return '📅';
      case 'reminder': return '🔔';
      case 'cancellation': return '❌';
      default: return '📢';
    }
  };

  const NotificationCard = ({ notification }) => {
    const backgroundColor = getNotificationColor(notification.type);
    
    return (
      <TouchableOpacity 
        style={[
          styles.notificationCard,
          !notification.isRead && styles.unreadNotification
        ]}
      >
        {/* Notification Icon */}
        <View style={[styles.notificationIcon, { backgroundColor }]}>
          <Text style={styles.iconText}>{notification.icon}</Text>
        </View>

        {/* Notification Content */}
        <View style={styles.notificationContent}>
          <View style={styles.notificationHeader}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            {!notification.isRead && <View style={styles.unreadDot} />}
          </View>
          
          <Text style={styles.notificationMessage}>{notification.message}</Text>
          
          <View style={styles.doctorInfo}>
            <Text style={styles.doctorName}>{notification.doctor}</Text>
            <Text style={styles.doctorSpecialty}>• {notification.specialty}</Text>
          </View>
          
          <Text style={styles.notificationTime}>{notification.time}</Text>
        </View>

        {/* Action Button */}
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="ellipsis-vertical" size={16} color="#666" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const markAllAsRead = () => {
    // In a real app, you would update the state or make an API call
    alert('All notifications marked as read');
  };

  const clearAllNotifications = () => {
    // In a real app, you would update the state or make an API call
    alert('All notifications cleared');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        
        <Text style={styles.pageTitle}>Notifications</Text>
        
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerButton} onPress={markAllAsRead}>
            <Icon name="checkmark-done-outline" size={20} color="#4A90E2" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.headerButton} onPress={clearAllNotifications}>
            <Icon name="trash-outline" size={20} color="#FF5252" />
          </TouchableOpacity>
        </View>
      </View> */}

      <ScrollView style={styles.scrollView}>
        {/* Notifications Count */}
        <View style={styles.notificationsHeader}>
          <Text style={styles.notificationsCount}>
            {notifications.filter(n => !n.isRead).length} Unread
          </Text>
          <Text style={styles.totalNotifications}>
            {notifications.length} Total
          </Text>
        </View>

        {/* Notifications List */}
        <View style={styles.notificationsList}>
          {notifications.map((notification) => (
            <NotificationCard 
              key={notification.id} 
              notification={notification} 
            />
          ))}
        </View>

        {/* Empty State (if no notifications) */}
        {notifications.length === 0 && (
          <View style={styles.emptyState}>
            <Icon name="notifications-off-outline" size={64} color="#ccc" />
            <Text style={styles.emptyStateTitle}>No Notifications</Text>
            <Text style={styles.emptyStateText}>
              You're all caught up! New notifications will appear here.
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Bottom Navigation */}
           <BottomNav navigation={navigation} activeScreen="Dashboard" />

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
  headerActions: {
    flexDirection: 'row',
  },
  headerButton: {
    padding: 5,
    marginLeft: 15,
  },
  scrollView: {
    flex: 1,
  },
  notificationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#f8f9fa',
  },
  notificationsCount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A90E2',
  },
  totalNotifications: {
    fontSize: 14,
    color: '#666',
  },
  notificationsList: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  unreadNotification: {
    backgroundColor: '#F0F8FF',
    borderColor: '#4A90E2',
    borderWidth: 1,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  iconText: {
    fontSize: 18,
  },
  notificationContent: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 8,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4A90E2',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 8,
  },
  doctorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  doctorName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#666',
  },
  doctorSpecialty: {
    fontSize: 13,
    color: '#666',
    marginLeft: 4,
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
  },
  actionButton: {
    padding: 5,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
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
  },
  bottomNav: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
    backgroundColor: '#fff',
    paddingBottom: 5,
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

export default NotificationScreen;