import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import AssetExample from './components/AssetExample';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import db from './config';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 30,
          }}>
          Register App
        </Text>

        <View>
          <Text
            style={{
              marginLeft: 5,
              marginTop: 10,
              textAlign: 'left',
              fontSize: 20,
            }}>
            John
          </Text>
          <TouchableOpacity
            style={{
              marginVertical: -27,
              backgroundColor: 'white',
              width: 100,
              height: 30,
              alignSelf: 'center',
              borderWidth: 3,
              borderColor: 'black',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
              }}>
              Present
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginLeft: 225,
              marginVertical: -3,
              marginBottom: 5,
              backgroundColor: 'white',
              width: 100,
              height: 30,
              alignSelf: 'center',
              borderWidth: 3,
              borderColor: 'black',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
              }}>
              Absent
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text
            style={{
              marginLeft: 5,
              marginTop: 10,
              textAlign: 'left',
              fontSize: 20,
            }}>
            Emily
          </Text>
          <TouchableOpacity
            style={{
              marginVertical: -27,
              backgroundColor: 'white',
              width: 100,
              height: 30,
              alignSelf: 'center',
              borderWidth: 3,
              borderColor: 'black',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
              }}>
              Present
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginLeft: 225,
              marginVertical: -3,
              marginBottom: 5,
              backgroundColor: 'white',
              width: 100,
              height: 30,
              alignSelf: 'center',
              borderWidth: 3,
              borderColor: 'black',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
              }}>
              Absent
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text
            style={{
              marginLeft: 5,
              marginTop: 10,
              textAlign: 'left',
              fontSize: 20,
            }}>
            Bob
          </Text>
          <TouchableOpacity
            style={{
              marginVertical: -27,
              backgroundColor: 'white',
              width: 100,
              height: 30,
              alignSelf: 'center',
              borderWidth: 3,
              borderColor: 'black',
            }} onPress = {()=>{
              var query = db.ref('03/status').update({
      status: present
    });
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
              }}>
              Present
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginLeft: 225,
              marginVertical: -3,
              marginBottom: 5,
              backgroundColor: 'white',
              width: 100,
              height: 30,
              alignSelf: 'center',
              borderWidth: 3,
              borderColor: 'black',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
              }}>
              Absent
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
var AppNavigator = createAppContainer({
  //homeScreen:HomeScreen
});
