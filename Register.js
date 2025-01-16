import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { auth, createUserWithEmailAndPassword } from './firebaseConfig';  // Firebase-konfiguraation tuonti

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Virhe', 'Salasanat eivät täsmää.');
      return;
    }

    if (email === '' || password === '' || username === '') {
      setErrorMessage('Täytä kaikki kentät.');
      return;
    }

    try {
      // Rekisteröi käyttäjä Firebase Authenticationin avulla
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Rekisteröinti onnistui
      setErrorMessage('');
      Alert.alert('Rekisteröinti', 'Rekisteröinti onnistui!');
    } catch (error) {
      setErrorMessage(error.message); // Näytä virheilmoitus
      Alert.alert('Virhe', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rekisteröidy</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Käyttäjätunnus"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Sähköposti"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Salasana"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Vahvista salasana"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />


      <Button title="Rekisteröidy" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
