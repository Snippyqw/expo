import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Button, 
  Animated, 
  Easing,
  TextInput,
  Dimensions,
} from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';


const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')
class SomeScreen extends React.Component{
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
        backgroundColor: 'red',
        width: WIDTH,
        height: HEIGHT,
        paddingTop: 20,
        paddingBottom:45
      },
      card:{
        width: WIDTH - 12,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2.62,
        
        elevation: 4,
      },
      btns: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',        
      },
      
    });

    return(
      <Animated.View style={{
        justifyContent: 'center',
        alignItems: 'center',
        opacity: fadeAnim,
        position: 'absolute'
      }
        }>
          <View style={styles.container}>
            <ScrollView style={{height: HEIGHT}}>
              <Card style={styles.card}>
                <Card.Content>
                  <Title>Card title</Title>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions style={styles.btns}>
                  <Button style={ styles.btn} title={'ok'}/>
                  <Button style={ styles.btn} title={'cancel'}/>
                  <Button style={ styles.btn} title={'ok'}/>
                  <Button style={ styles.btn} title={'cancel'}/>
                </Card.Actions>
              </Card>

              <Card style={styles.card}>
                <Card.Content>
                  <Title>Card title</Title>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions style={styles.btns}>
                  <Button style={ styles.btn} title={'ok'}/>
                  <Button style={ styles.btn} title={'cancel'}/>
                  
                  <Button style={ styles.btn} title={'ok'}/>
                  <Button style={ styles.btn} title={'cancel'}/>
                </Card.Actions>
              </Card>

              <Card style={styles.card}>
                <Card.Content>
                  <Title>Card title</Title>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions style={styles.btns}>
                  <Button style={ styles.btn} title={'ok'}/>
                  <Button style={ styles.btn} title={'cancel'}/>
                  <Button style={ styles.btn} title={'ok'}/>
                  <Button style={ styles.btn} title={'cancel'}/>
                </Card.Actions>
              </Card>

            
            
            </ScrollView>
          </View>
         
      </Animated.View>
    );
  }
}

export default SomeScreen;













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
