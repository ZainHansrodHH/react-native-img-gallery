/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return(
    <View style={styles.screen}>
        <ScrollView
          contentContainerStyle={styles.scrollView}>
            <ImageRow></ImageRow>
        </ScrollView>
    </View>
  )
}

var wallpapers = ['https://w.wallhaven.cc/full/83/wallhaven-832852.jpg', 'https://w.wallhaven.cc/full/vg/wallhaven-vg7lv3.jpg', 'https://w.wallhaven.cc/full/q6/wallhaven-q6w5rd.jpg', 'https://w.wallhaven.cc/full/6k/wallhaven-6k93rq.jpg', 'https://w.wallhaven.cc/full/xl/wallhaven-xlx96v.png', 'https://w.wallhaven.cc/full/73/wallhaven-73d87y.jpg', 'https://w.wallhaven.cc/full/j5/wallhaven-j56yq5.jpg', 'https://w.wallhaven.cc/full/5w/wallhaven-5w18z5.jpg', 'https://w.wallhaven.cc/full/39/wallhaven-39xv99.jpg', 'https://w.wallhaven.cc/full/dg/wallhaven-dg9q6g.jpg', 'https://w.wallhaven.cc/full/j5/wallhaven-j562pp.jpg', 'https://w.wallhaven.cc/full/j5/wallhaven-j562ew.jpg', 'https://w.wallhaven.cc/full/13/wallhaven-137mg3.jpg', 'https://w.wallhaven.cc/full/13/wallhaven-137gyw.jpg', 'https://w.wallhaven.cc/full/g7/wallhaven-g7zzdd.jpg', 'https://w.wallhaven.cc/full/zm/wallhaven-zm1lrg.png', 'https://w.wallhaven.cc/full/g8/wallhaven-g8315l.png', 'https://w.wallhaven.cc/full/73/wallhaven-73dmm3.png', 'https://w.wallhaven.cc/full/j3/wallhaven-j399zp.jpg', 'https://w.wallhaven.cc/full/83/wallhaven-8329ko.jpg', 'https://w.wallhaven.cc/full/xl/wallhaven-xlx2jv.jpg', 'https://w.wallhaven.cc/full/xl/wallhaven-xlx3od.jpg', 'https://w.wallhaven.cc/full/kw/wallhaven-kwmqd7.jpg']

const ImageRow = (props) => {
  return(
    <View style={styles.imageContainer}>
      <SingleImage></SingleImage>
      <SingleImage></SingleImage>
      <SingleImage></SingleImage>
    </View>
  )
}

const SingleImage = (props) => {
  return(
    <Image
        style={styles.images}
        source={{
          uri: 'https://w.wallhaven.cc/full/vg/wallhaven-vg7lv3.jpg'
        }}
      />
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  scrollView: {
  },
  images: {
    height: 200,
    width: '33.3333333%'
  },
  imageContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});