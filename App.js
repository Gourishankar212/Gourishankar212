import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,Button,TouchableOpacity,SafeAreaView,Alert} from 'react-native';
import React,{ useState } from 'react';
import Home from './componets/homescreen'

export default function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const nextpage = () =>{
    const name = "Gouri"
    if(user == name && password.length > 0 && password == "123456"){
      Alert.alert("Hello"+" " + name + " " + "Welcome to ReactNative" )
    }else{
      Alert.alert("Invalid user are password")
    }
  }
  return (

      <View style = {styles.container}>

      <StatusBar style='auto'></StatusBar>
      <View style = {styles.inputview}>
        <TextInput style = {styles.TextInput}
        placeholder='UserID or Email'
        placeholderTextColor='black'
        onChangeText={(user) => setUser(user)}
        />
      </View>

      <View style = {styles.inputview}>
        <TextInput style = {styles.TextInput}
        placeholder='password'
        placeholderTextColor='black'
        secureTextEntry = {true}
        onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style = {styles.forgot}> Forgot password?</Text>
      </TouchableOpacity>
      <View style = {styles.bottom}>
      <Button
       style = {styles.bottom}
       title = 'save' 
       onPress={nextpage}/>
      </View>
      <Home/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputview :{
    backgroundColor : "#ffc0cb",
    borderRadius: 30,
    width : '70%',
    height : 40,
    marginBottom :20,
    alignItems: "stretch"
  },
  TextInput:{
    height : 70,
    flex:1,
    padding:10,
    //marginBottom:20
  },
  forgot:{
    height : 25,
    marginBottom : 15,
    color : "blue"
  },
  bottom : {
    backgroundColor : "light orange",
    color : 'orange',
    width : 70,
    height : 40,
    borderRadius : 15,
    shadowColorc : "green"
  }
});
