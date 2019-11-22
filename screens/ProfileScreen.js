import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import i18n from '../i18n';

class ProfileScreen extends React.Component{



  render() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'

        },
        usn: {
            fontSize: 30,
            fontWeight: 'bold'    
        },
        btn: {
            backgroundColor: 'black',
            color: 'red'
        }
    });

    return(
      <View style={styles.container}>
        <Text style={styles.usn}>U S E R N A M E</Text>
        <Text>asdasdasdasadasds</Text>
        
        <Button color={'red'} style={styles.btn} title={i18n.t('logout')} onPress={() => this.props.navigation.navigate('Home')}/>
      </View>
    );
  }
}

export default ProfileScreen;













/*const SomeScreen = ({ navigation }) => (
  <View style={styles.container}>
     <TextInput 
            style={styles.input}
            placeholder={'Felhasználónév'}
            placeholderTextColor={'rgb(250, 194, 197)'}
            underlineColorAndroid='transparent'

        />
    
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

export default SomeScreen;*/
