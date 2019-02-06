import React, { Component } from 'react';
import { View } from 'native-base';
import { Image, StyleSheet, ScrollView } from 'react-native';

const withImageOverlay = (WrappedComponent, imageURL, backgroundColor) => {
  return () => (
    <View style={styles.container}>
      <Image
        style={styles.container}
        source={{
          uri: imageURL
        }}
      />
      <ScrollView
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: backgroundColor ? backgroundColor : 'rgba(0,0,0,0.5)'
        }}
      >
        <WrappedComponent />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: null,
    height: null,
    flex: 1
  }
});

export default withImageOverlay;