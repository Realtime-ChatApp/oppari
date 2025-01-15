import React from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native';
import { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DB } from '@/app/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const auth = FIREBASE_AUTH;

const Register = () => {
  const [email, setEmail] = React.useState('');
  const [email2, setEmail2] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const [loading, setLoading] = React.useState(false);


  const signUp = async () => {
    if (email==email && password==password2){
      try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
        alert('Check your email to verify your account');
      } catch (error: any) {
        console.error(error);
        alert('Registering user failed:' + error.message);
      } finally {
      }
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior='padding'>
      <TextInput value={userName} 
        style={styles.input} 
        placeholder='Username' 
        autoCapitalize='none' 
        onChangeText={(text: string) => setUserName (text)} 
        />
      <TextInput 
        value={email} 
        style={styles.input} 
        placeholder='Email' 
        autoCapitalize='none' 
        onChangeText={(text: string) => setEmail (text)} 
        />
      <TextInput 
        value={email2} 
        style={styles.input} 
        placeholder='Retype email' 
        autoCapitalize='none' 
        onChangeText={(text: string) => setEmail2 (text)} 
        />
      <TextInput 
        secureTextEntry={true} 
        value={password}style={styles.input} 
        placeholder='Password' 
        autoCapitalize='none' 
        onChangeText={(text: string) => setPassword (text)}
      />
      <TextInput 
        secureTextEntry={true} 
        value={password2}
        style={styles.input} 
        placeholder='Retype password' 
        autoCapitalize='none' 
        onChangeText={(text: string) => setPassword2 (text)}
      />
    
      {loading ? (
        <ActivityIndicator size='large' color="#0000ff" />
      ) : (
        <>
          <View style={styles.buttonContainer}>
            <Button title='Create account' onPress={signUp} />
          </View>
        </>
      )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Register

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginBottom: 10
  },
});