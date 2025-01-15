import React from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native';
import { FIREBASE_AUTH } from '@/app/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

const auth = FIREBASE_AUTH;

const Login = ({ navigation }: { navigation: NavigationProp<RootStackParamList, 'Login'> }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const signIn = async () => {
    try {
      setLoading(true);
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error: any) {
      console.error(error);
      alert('Sign in failed:' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior='padding'>
        <TextInput
          value={email}
          style={styles.input}
          placeholder='Email'
          autoCapitalize='none'
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          secureTextEntry={true}
          value={password}
          style={styles.input}
          placeholder='Password'
          autoCapitalize='none'
          onChangeText={(text) => setPassword(text)}
        />
        {loading ? (
          <ActivityIndicator size='large' color="#0000ff" />
        ) : (
          <>
            <View style={styles.buttonContainer}>
              <Button title='Login' onPress={signIn} />
            </View>
            <View style={styles.buttonContainer}>
              <Button title='Register' onPress={() => navigation.navigate('Register')} />
            </View>
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

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
    marginBottom: 10,
  },
});
