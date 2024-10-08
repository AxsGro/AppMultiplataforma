import { View, Text, Button } from 'react-native';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function LoginScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={(HomeScreen) => navigation.goBack()} title="Go back home" />
      </View>
    );
  }

  export default LoginScreen;