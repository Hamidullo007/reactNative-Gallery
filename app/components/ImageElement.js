import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';

class ImageElement extends Component{
  render(){
    return (
      <Image source={this.props.imgsource} style={styles.image}></Image>
    );
  }
}
 

const styles = StyleSheet.create({
  image:{
      flex: 1,
      width: null,
      alignSelf: 'stretch',

  }
 
});

export default ImageElement;