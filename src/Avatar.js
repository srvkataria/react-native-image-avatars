import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

export default class Avatar extends Component {
  initialCapitals = (text) => {
    return text.toUpperCase().split(' ').map((s) => s.charAt(0).toUpperCase()).join('');
  }

  renderAvatar = () => {
    let elevate = 0;
    let width = 50, height = 50, radius = 50/2; 
    let textFontSize = 20;        

    if(this.props.shadow) {
      elevate = 15;
    }

    if(this.props.size == "x-small") {
      width = width; 
      height = height; 
      radius = radius;
    } else if(this.props.size == "small") {
      width = width*2; 
      height = height*2; 
      radius = radius*2;
      textFontSize = 30;
    } else if(this.props.size == "medium") {
      width = width*3; 
      height = height*3; 
      radius = radius*3;
      textFontSize = 40;
    } else if(this.props.size == "large") {
      width = width*4; 
      height = height*4; 
      radius = radius*4;
      textFontSize = 60;
    } else if(this.props.size == "x-large") {
      width = width*5; 
      height = height*5; 
      radius = radius*5;
      textFontSize = 80;
    }

    let border_width = width, border_height = height, border_radius = radius;
    
    if(this.props.borderColor) {
      border_width = width + 10;
      border_height = height + 10;
      border_radius = (width + 10)/2;

      if(this.props.size == "x-large") {
        border_width = border_width + 10;
        border_height = border_height + 10;
        border_radius = (border_width + 10)/2;
      }
    }

    if(this.props.shape == 'square') {
      border_radius = 0;
      radius = 0;
    }

    let outerStyle={
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: this.props.borderColor, 
      width: border_width, 
      height: border_height, 
      borderRadius: border_radius, 
      overflow: 'hidden',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51
    }

    if(this.props.type == 'text') {
      if(this.props.text) {
        let innerStyle={
          width: width, 
          height: height, 
          borderRadius: radius,
          backgroundColor: this.props.textBackgroundFill,
          justifyContent: 'center', 
          alignItems: 'center'
        } 

        let textStyle={
          color: this.props.textColor,
          fontSize: textFontSize
        } 
        
        return(
          <View elevation={elevate} style={outerStyle}>
            <View style={innerStyle}>
              <Text style={textStyle}>{this.initialCapitals(this.props.text).slice(0, 2)}</Text>
            </View>
          </View>
        );
      }
    } else {
      let imageStyle={
        width: width, 
        height: height, 
        borderRadius: radius
      } 

      return(
        <View elevation={elevate} style={outerStyle}>
          <Image source={{uri : this.props.imageUrl}}
            style={imageStyle}
            resizeMode="cover"/>
        </View>
      );
    }
    
      
  }

  render() {
    return (
      <View style={{flex:1}}>
        {this.renderAvatar()}
      </View>
    );
  }
}

Avatar.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  shape: PropTypes.string,
  imageUrl: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string,
  borderColor: PropTypes.string,
  shadow: PropTypes.bool,
  textBackgroundFill: PropTypes.string,
  textColor: PropTypes.string
}

Avatar.defaultProps = {
  type: 'image',
  size: 'small',
  shape: 'circle',
  shadow: false,
  textBackgroundFill: '#C0C0C0',
  textColor: '#000'
};