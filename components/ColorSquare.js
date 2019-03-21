import React from 'react';
import {
  View,
} from 'react-native';

export default class ColorSquare extends React.Component {
  render() {
    return (
      <View style={[{
        width: 60,
        height: 60,
        backgroundColor: "blue",
      }, this.props.style || {}]}></View>
    );
  }
}
