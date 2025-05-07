import { StyleSheet, View, Text, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import MaterialIcon from '@expo/vector-icons/MaterialIcons';

export default function ContactScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <MaterialIcon
          size={310}
          color="#808080"
          name="coffee"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Contact Us</ThemedText>
      </ThemedView>
      <View style={styles.content}>
        <ThemedText type="default">
          Welcome to Tom's Coffee! We’d love to hear from you. Whether you have questions, need catering, or want to host an event, feel free to reach out to us.
        </ThemedText>
        <View style={styles.section}>
          <ThemedText type="defaultSemiBold">Address:</ThemedText>
          <ThemedText>111 Daniel Island Drive</ThemedText>
          <ThemedText>Charleston, SC</ThemedText>
        </View>
        <View style={styles.section}>
          <ThemedText type="defaultSemiBold">Phone:</ThemedText>
          <ThemedText>(843) 555-1234</ThemedText>
        </View>
        <View style={styles.section}>
          <ThemedText type="defaultSemiBold">Email:</ThemedText>
          <ThemedText>contact@tomscoffee.com</ThemedText>
        </View>
        <View style={styles.section}>
          <ThemedText type="defaultSemiBold">Business Hours:</ThemedText>
          <ThemedText>Monday - Friday: 7:00 AM - 6:00 PM</ThemedText>
          <ThemedText>Saturday - Sunday: 8:00 AM - 4:00 PM</ThemedText>
        </View>
        <View style={styles.section}>
          <ThemedText type="defaultSemiBold">Catering & Events:</ThemedText>
          <ThemedText>
            Hosting an event or need catering? We’d love to help make your event special. Contact us for more details!
          </ThemedText>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'center',
    marginTop: 5,
  },
  content: {
    padding: 16,
  },
  section: {
    marginVertical: 12,
  },
});