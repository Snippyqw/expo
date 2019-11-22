import React from 'react';
import {
  Button, 
  StyleSheet, 
  Text, 
  View,
  Image,
  ImageBackground,
  Dimensions,
  TextInput,
} from 'react-native';
import bg from './../Images/backgroundC.jpeg'
import logo from './../Images/logo.png'
import Icon from 'react-native-vector-icons/Entypo'
import i18n from '../i18n';
//import db from '../db'


const { width: WIDTH } = Dimensions.get('window')

class HomeScreen extends React.Component{
  componentDidMount() {
    //db.init();
  }


  render(){

    const styles = StyleSheet.create({
      bg:{
        flex: 1,
        width:null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
        width: 100,
        height: 100,
        
      },
      logoText:{
        fontSize: 40,
        color: 'rgb(66, 65, 96)'
        
      },
      LogoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
      },
      input:{
        width: WIDTH - 100,
        height: 40, 
        borderRadius: 15,
        fontSize: 15,
        paddingLeft: 45,
        backgroundColor: 'rgba(250, 194, 197, 0.7)',
        color: 'rgb(66, 65, 96)',
        marginHorizontal: 25,
        marginBottom:15,
      },
      Elements:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100
      },
      btnContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      btn: {
        textAlign: 'center',
        backgroundColor: 'rgba(250, 194, 197, 0.7)',
        color: '#322d3f',
    
      },
      Icon: {
        position: 'absolute',
        top: 8,
        left: 35
      },
      btnEye: {
        position: 'absolute',
        top: 8,
        right: 35
      },
      box: {
        marginBottom: 100
      }
    });

    return(
      <ImageBackground source={bg} style={styles.bg}>
        <View style={styles.LogoContainer}>
          <Image source={logo} style={styles.logo}/>
          <Text style={styles.logoText}>DemoApp</Text>
        </View>

      <View style={styles.box}>
        <View >
          <Icon name={'user'} size={25} color={'black'} style={styles.Icon}/>
          <TextInput 
            style={styles.input}
            placeholder={i18n.t('username')}
            placeholderTextColor={'rgb(66, 65, 96)'}
            underlineColorAndroid='transparent'

          />
        </View>
        <View>
          <Icon name={'lock'} size={25} color={'black'} style={styles.Icon}/>
          <TextInput 
            style={styles.input}
            placeholder={i18n.t('pass')}
            placeholderTextColor={'rgb(66, 65, 96)'}
            underlineColorAndroid='transparent'
            secureTextEntry={true}
          />
          
        </View>
        <View style={styles.btnContainer}>
          <Button style={styles.btn} 
            color='#fac2c5'
            title={i18n.t('login')} onPress={() => this.props.navigation.navigate('Some')} 
          />
          <Button style={styles.btn} 
            color='#fac2c5'
            title={i18n.t('reg')} onPress={() => {
              this.props.navigation.navigate('Reg');
            }} 
          />
          </View>
        </View>  
      </ImageBackground>
    );
  }

}

export default HomeScreen;





/*const HomeScreen = ({ navigation }) => (
  

  <ImageBackground source={bg} style={styles.bg}>
    <View style={styles.LogoContainer}>
      <Image source={logo} style={styles.logo}/>
      <Text style={styles.logoText}>DemoApp</Text>
    </View>

  <View style={styles.box}>
    <View >
      <Icon name={'user'} size={25} color={'black'} style={styles.Icon}/>
      <TextInput 
        style={styles.input}
        placeholder={i18n.t('username')}
        placeholderTextColor={'rgb(66, 65, 96)'}
        underlineColorAndroid='transparent'

      />
    </View>
    <View>
      <Icon name={'lock'} size={25} color={'black'} style={styles.Icon}/>
      <TextInput 
        style={styles.input}
        placeholder={i18n.t('pass')}
        placeholderTextColor={'rgb(66, 65, 96)'}
        underlineColorAndroid='transparent'
        secureTextEntry={true}
      />
      
    </View>
    <View style={styles.btnContainer}>
      <Button style={styles.btn} 
        color='#fac2c5'
        title={i18n.t('login')} onPress={() => navigation.navigate('Some')} 
      />
      <Button style={styles.btn} 
        color='#fac2c5'
        title={i18n.t('reg')} onPress={() => {
          navigation.navigate('Reg');
        }} 
      />
      </View>
    </View>  
    
  </ImageBackground>
);

const styles = StyleSheet.create({
  bg:{
    flex: 1,
    width:null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    
  },
  logoText:{
    fontSize: 40,
    color: 'rgb(66, 65, 96)'
    
  },
  LogoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  input:{
    width: WIDTH - 100,
    height: 40, 
    borderRadius: 15,
    fontSize: 15,
    paddingLeft: 45,
    backgroundColor: 'rgba(250, 194, 197, 0.7)',
    color: 'rgb(66, 65, 96)',
    marginHorizontal: 25,
    marginBottom:15,
  },
  Elements:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  },
  btnContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    textAlign: 'center',
    backgroundColor: 'rgba(250, 194, 197, 0.7)',
    color: '#322d3f',

  },
  Icon: {
    position: 'absolute',
    top: 8,
    left: 35
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 35
  },
  box: {
    marginBottom: 100
  }

});

export default HomeScreen;*/
