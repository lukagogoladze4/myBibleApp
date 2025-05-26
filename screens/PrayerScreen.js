import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PrayerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ლოცვები</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24 },
});
