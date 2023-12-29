import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Header = ({ menuIcon, logoText, searchIcon, cartIcon }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={menuIcon} />
      <Text style={styles.textStyle}>{logoText}</Text>
      <Image style={styles.imageStyle} source={searchIcon} />
      <Image style={styles.imageStyle} source={cartIcon} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 15,
  },
  imageStyle: {
    height: 50,
    width: 50,
    color: 'blue',
    margin: 3,
    borderRadius: 20
  },
  textStyle: {
    fontSize: 30
  }
})