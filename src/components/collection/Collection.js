import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Collection = () => {
  return (
    <View>
      <View style={styles.containertext}>
        <Text style={styles.textStyle}>COLLECTIONS</Text>
      </View>

      <View style={styles.containerimg12}>
        <ImageBackground style={styles.img12Style} source={require('../../assets/images/image12.png')}>
          <View style={{
            top: 100,
            left: 213,
          }}>
            <Text style={styles.textStyle2} >October</Text>
            <Text style={styles.textStyle} >COLLECTION</Text>
          </View>
        </ImageBackground>
      </View>


      <View style={styles.containerimg9}>
        <ImageBackground style={styles.img9Style} source={require('../../assets/images/image9.png')}>
          <View style={{
            top: 35,
            left: 80,
          }}>
            <Text style={styles.textStyle2}>Autumn</Text>
            <Text style={styles.textStyle} >COLLECTION</Text>
          </View>
        </ImageBackground>
      </View>

    </View>
  )
}

export default Collection

const styles = StyleSheet.create({
  containertext: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textStyle: {
    fontFamily: 'Tenor Sans',
    fontSize: 15,
    letterSpacing: 4,


  },
  textStyle2: {
    fontFamily: 'Bodoni Moda',
    fontSize: 40,
    fontWeight: 'bold',
    lineHeight: 40,
    letterSpacing: 0,
    textAlign: 'left',

  },
  img12Style: {
    width: '100%',
    height: 250
  },
  img9Style: {
    width: '80%',
    height: 300,

  },
  containerimg12: {
    height: 300,
    justifyContent: 'space-around',
    alignContent: 'space-around'
  },
  containerimg9: {
    height: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },

})