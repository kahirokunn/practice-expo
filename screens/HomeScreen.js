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
        <ScrollView>
          {[...Array(100)].map((_, i) => (
            <View key={i} style={{
              flexGrow: 1,
              justifyContent: "space-around",
              backgroundColor: 'powderblue',
              minHeight: 300,
              alignItems: "center",
            }}>
              <ColorSquare style={{ backgroundColor: "blue" }}/>
              <ColorSquare style={{ backgroundColor: "green" }}/>
              <ColorSquare style={{ backgroundColor: "red" }}/>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
