/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imagecontainer}>
         <Image source={{uri: 'https://placekitten.com/200/300'}} style={styles.gambar} />
        </View>
        <View style={styles.detail}>
          <Text style={styles.nama}>
            Danes
          </Text>
          <Text style={styles.batch}>
            Mangano
          </Text>
        </View>
          <View style={styles.footer}>
          <Text>
            refactory.id
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50
  },
  imagecontainer: {
    flex: 1
  },
  gambar: {
    width: 200,
    height: 200,
    borderRadius: 200/2
  },
  detail: {
    flex: 1,
    alignItems: 'center'
  },
  nama: {
    fontSize: 36,
    fontFamily: 'monospace',
    color: 'blue'
  },
  batch: {
    fontSize: 36,
    fontFamily: 'monospace',
    color: 'red'
  },
  footer: {
    flex: 0
  }
});
