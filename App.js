import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    if (username === '' || password === '') {
      setErrorMessage('Täytä molemmat kentät');
    } else {
      // Kirjautuminen onnistui
      setErrorMessage('');
      alert('Tervetuloa, ' + username);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kirjaudu sisään</Text>
      
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      
      <TextInput
        style={styles.input}
        placeholder="Käyttäjätunnus"
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Salasana"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <Button title="Kirjaudu sisään" onPress={handleLogin} />

      {/* Rekisteröitymislinkki */}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Ei tiliä? Rekisteröidy täällä</Text>
      </TouchableOpacity>
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
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  link: {
    color: '#0066cc',
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
  },
});
