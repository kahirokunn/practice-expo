import React from 'react';
import {
  TextInput,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ColorSquare from '../components/ColorSquare';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{
        flexGrow: 1
      }}>

        <Text style={{
          fontSize: 50,
          height: 50,
          lineHeight: 50,
          textAlignVertical: 'center',
          position: 'absolute',
          backgroundColor: 'blue',
          zIndex: 1,
          bottom: 10,
          right: 0,
        }}>
          Hello World
        </Text>

        <View style={{
          position: 'absolute',
          zIndex: 1,
          right: 10,
          bottom: 10,
        }}>
          <View style={{
            color: 'black',
            borderRadius: 50,
            backgroundColor: 'yellow',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={{
              fontSize: 50,
              width: 50,
              height: 50,
              lineHeight: 50,
              textAlign: 'center'
            }}>
              +
            </Text>
          </View>
        </View>

        <ScrollView>
          {[...Array(100)].map((_, i) => (
            <View key={i} style={{
              flexGrow: 1,
              justifyContent: 'space-around',
              backgroundColor: 'powderblue',
              minHeight: 300,
              alignItems: 'center',
            }}>
              <ColorSquare style={{ backgroundColor: 'blue' }}/>
              <ColorSquare style={{ backgroundColor: 'green' }}/>
              <ColorSquare style={{ backgroundColor: 'red' }}/>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
