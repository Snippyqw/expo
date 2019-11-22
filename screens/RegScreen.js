import React from 'react';
import {
  Button, 
  StyleSheet, 
  Text, 
  View,
  Image,
  Dimensions,
  TextInput,
  Animated
} from 'react-native';
import logo from './../Images/logo.png'

const {width: WIDTH} = Dimensions.get('window')

class RegScreen extends React.Component{


  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      input:{
        width: WIDTH - 100,
        height: 40, 
        borderRadius: 15,
        fontSize: 15,
        paddingLeft: 45,
        backgroundColor: 'rgb(66, 65, 96)',
        color: 'rgb(250, 194, 197)',
        marginHorizontal: 25,
        marginBottom:15,
      },
      logo: {
        width: 60,
        height: 60,
        marginBottom: 15
      },
    });
    
    
    return(
      <View style={styles.container}>
        <Image source={logo} style={styles.logo}/>
        <TextInput 
            style={styles.input}
            placeholder={'Felhasználónév'}
            placeholderTextColor={'rgb(250, 194, 197)'}
            underlineColorAndroid='transparent'

        />
        <TextInput 
            style={styles.input}
            placeholder={'Jelszó'}
            secureTextEntry={true}
            placeholderTextColor={'rgb(250, 194, 197)'}
            underlineColorAndroid='transparent'
        />
        <TextInput 
            style={styles.input}
            placeholder={'Jelszó megerősítés'}
            secureTextEntry={true}
            placeholderTextColor={'rgb(250, 194, 197)'}
            underlineColorAndroid='transparent'
        />
        <Button style={styles.btn} 
            color='#fac2c5'
            title="Regisztráció" onPress={() => {
                this.props.navigation.navigate('Some');
            }} 
        />
  
      </View>);
  }
}

export default RegScreen;



















































/*const {width: WIDTH} = Dimensions.get('window')


const RegScreen = ({ navigation }) => (    

    <View style={styles.container}>
        <Image source={logo} style={styles.logo}/>
        <TextInput 
            style={styles.input}
            placeholder={'Felhasználónév'}
            placeholderTextColor={'rgb(250, 194, 197)'}
            underlineColorAndroid='transparent'

        />
        <TextInput 
            style={styles.input}
            placeholder={'Jelszó'}
            secureTextEntry={true}
            placeholderTextColor={'rgb(250, 194, 197)'}
            underlineColorAndroid='transparent'
        />
        <TextInput 
            style={styles.input}
            placeholder={'Jelszó megerősítés'}
            secureTextEntry={true}
            placeholderTextColor={'rgb(250, 194, 197)'}
            underlineColorAndroid='transparent'
        />
        <Button style={styles.btn} 
            color='#fac2c5'
            title="Regisztráció" onPress={() => {
                navigation.navigate('Some');
            }} 
        />
   
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{
    width: WIDTH - 100,
    height: 40, 
    borderRadius: 15,
    fontSize: 15,
    paddingLeft: 45,
    backgroundColor: 'rgb(66, 65, 96)',
    color: 'rgb(250, 194, 197)',
    marginHorizontal: 25,
    marginBottom:15,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 15
  },
});


RegScreen.navigationOptions = {
    title: 'Regisztráció',
  headerStyle: {
    backgroundColor: '#rgb(66, 65, 96)',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}
export default RegScreen;*/
