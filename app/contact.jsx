import { StyleSheet, View, Appearance, ScrollView, Text } from 'react-native';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import MaterialIcon from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';

export default function ContactScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);

  const phoneNumber = '(843) 555-1234';
  const smsNumber = '8435551234'; // Use a plain number for SMS links

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <MaterialIcon size={100} color="#808080" name="coffee" />
        <ThemedText type="title" style={styles.title}>
          Contact Us
        </ThemedText>
      </View>
      <View style={styles.content}>
        <ThemedText style={{ color: theme.text }}>
          Welcome to Tom's Coffee! We’d love to hear from you. Whether you have questions, need catering, or want to host an event, feel free to reach out to us.
        </ThemedText>
        <View style={styles.section}>
          <ThemedText type="defaultSemiBold" style={{ color: theme.text }}>Address:</ThemedText>
          <ThemedText style={{ color: theme.text }}>111 Daniel Island Drive</ThemedText>
          <ThemedText style={{ color: theme.text }}>Charleston, SC</ThemedText>
        </View>
        <View style={styles.section}>
          <ThemedText type="defaultSemiBold" style={{ color: theme.text }}>Phone:</ThemedText>
          <Link href={`tel:${smsNumber}`} style={[styles.link, { color: theme.tint }]}>
            {phoneNumber}
          </Link>
        </View>
        <View style={styles.section}>
          <Link href={`sms:${smsNumber}`} style={styles.button}>
            <Text style={styles.buttonText}>Text Us</Text>
          </Link>
        </View>
        <View style={styles.section}>
          <ThemedText type="defaultSemiBold" style={{ color: theme.text }}>Email:</ThemedText>
          <ThemedText style={{ color: theme.text }}>contact@tomscoffee.com</ThemedText>
        </View>
        <View style={styles.section}>
          <ThemedText type="defaultSemiBold" style={{ color: theme.text }}>Business Hours:</ThemedText>
          <ThemedText style={{ color: theme.text }}>Monday - Friday: 7:00 AM - 6:00 PM</ThemedText>
          <ThemedText style={{ color: theme.text }}>Saturday - Sunday: 8:00 AM - 4:00 PM</ThemedText>
        </View>
        <View style={styles.section}>
          <ThemedText type="defaultSemiBold" style={{ color: theme.text }}>Catering & Events:</ThemedText>
          <ThemedText style={{ color: theme.text }}>
            Hosting an event or need catering? We’d love to help make your event special. Contact us for more details!
          </ThemedText>
        </View>
      </View>
    </ScrollView>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    container: {
      flexGrow: 1, // Ensures the ScrollView content stretches to fill the screen
    },
    header: {
      alignItems: 'center',
      marginVertical: 20,
    },
    title: {
      marginTop: 10,
      fontSize: 24,
      fontWeight: 'bold',
    },
    content: {
      padding: 16,
    },
    section: {
      marginVertical: 12,
    },
    link: {
      textDecorationLine: 'underline',
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: colorScheme === 'dark' ? '#444' : '#ddd',
      padding: 10,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 8,
    },
    buttonText: {
      color: colorScheme === 'dark' ? '#fff' : '#000',
      fontWeight: 'bold',
    },
  });
}