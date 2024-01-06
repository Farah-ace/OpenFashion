import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BgImage from '../../assets/images/Banner.png'
const Poster = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.containerbg} source={BgImage}>
        <View style={styles.containerbtn}>
          <Pressable style={styles.btnStyle}>
            <Text style={styles.textStyle}>
              EXPLORE COLLECTION
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Poster

const styles = StyleSheet.create({
  container:{
    height: 650,
  },
  containerbg: {
    width: '100%',
    height: 600,

  },
  containerbtn: {
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  btnStyle: {
    backgroundColor: 'grey',
    width: 200,
    height: 50,
    top: 520,
    padding: 10,
    borderRadius: 30,
    opacity: 0.5,
    justifyContent: 'center',
    alignItems:'center',
    
  },
  textStyle: {
    color: 'white',
    fontFamily: 'Tenor Sans',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    
  }
})