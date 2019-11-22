import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Button, 
  Animated, 
  Easing,
  TextInput,
  Dimensions
} from 'react-native';
import MapView from 'react-native-maps';
import i18n from '../i18n';
import { TouchableOpacity } from 'react-native-gesture-handler';


const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')
class SettingsScreen extends React.Component{
  state = {
    fadeAnim: new Animated.Value(0),
  }

  componentDidMount() {
    const { fadeAnim } = this.state;
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
      }),
    ]).start();
  }


  render() {
    const { fadeAnim } = this.state;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: WIDTH,
        height: HEIGHT,
        paddingBottom:45
      },
      Settings:{
        width: WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        top: 0, //Here is the trick
        marginTop:20,
        textAlign: 'left',
      },
      mapContainer:{
        width: WIDTH,
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
        marginBottom:65,
        borderRadius: 10,
        
      },
      mapText:{
        fontSize: 30,
        fontWeight: 'bold',
        

      },
      map:{
        height : '100%',
        width: '99%',
        borderRadius: 10,
        marginBottom:10,
        marginLeft: 5,
        marginRight: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2.62,
        
        elevation: 4,
        
      },
      list: {
        width: WIDTH-20,
        borderBottomColor: 'rgb(66, 65, 96)',
        borderBottomWidth: 3,
        borderRadius: 20,
        marginTop: 10,
        backgroundColor:'rgba(66, 65, 96, 0.7)',
        marginLeft: 10,
        marginRight: 10

      },
      listSet:{
        fontSize: 20,
        padding: 10, 
      }
    });

    return(
      <Animated.View style={{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        /*top: positionAnim.x,
        left: positionAnim.y,*/
        opacity: fadeAnim,}
        }>
          <View style={styles.container}>
            <View style={styles.Settings}>
              <Text style={{fontSize: 30, fontWeight: 'bold', width: WIDTH, paddingLeft: 5, backgroundColor:'grey'}}>asd</Text>
              <TouchableOpacity style={styles.list}>
                <Text style={styles.listSet}>
                  {i18n.t('lang')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.list}>
                <Text style={styles.listSet}>
                  {i18n.t('inv')}
                </Text>
              </TouchableOpacity>

            </View>
            <View style={styles.mapContainer}>
              <Text style={styles.mapText}>{i18n.t('where')}</Text>
              <MapView style={styles.map}/>
            </View>
          </View>
      </Animated.View>
    );
  }
}

export default SettingsScreen;













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
