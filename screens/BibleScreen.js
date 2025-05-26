import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

const BibleScreen = () => {
  const [verseText, setVerseText] = useState('');
  const [input, setInput] = useState('');

  const fetchVerse = async () => {
    try {
      const response = await fetch(`https://bible-api.com/${encodeURIComponent(input)}`);
      const data = await response.json();
      setVerseText(data.text || 'Not found');
    } catch (error) {
      setVerseText('Error fetching verse');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Book Chapter:Verse (e.g., John 3:16)</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="John 3:16"
      />
      <Button title="Fetch Verse" onPress={fetchVerse} />
      <ScrollView style={styles.result}>
        <Text>{verseText}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 16, marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  result: { marginTop: 20 },
});

export default BibleScreen;
