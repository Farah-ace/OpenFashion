import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
//import logo from '../assets/icons/headerIcons/Logo.png'

const Header = () => {
  const logo = '../../assets/icons/headerIcons/Logo.png';
  const menuIcon = '../../assets/icons/headerIcons/Menu.png';
  const searchIcon = '../../assets/icons/headerIcons/Search.png';
  const cartIcon = '../../assets/icons/headerIcons/shopbag.png';

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View>
      <Image style={styles.iconStyle} source={require(menuIcon)} />
      </View>
      <View style={styles.logoContainer}>
      <Image style={styles.logoStyle} source={require(logo)} />
      </View>
      <View style={styles.containerright}>
      <Image style={styles.iconStyle} source={require(searchIcon)} />
      <Image style={styles.iconStyle} source={require(cartIcon)} />
      </View>
      
    </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '95%',
    height: 60,
    paddingTop: 5,
    //backgroundColor: 'grey'
  },
  containerright:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignContent: 'space-between'

  },
  iconStyle:{
    height: 30,
    width: 30,
  
  },
  logoContainer:{
   //justifyContent:'space-between',
   alignSelf: 'center'
    
  },
  logoStyle: {
    height: 40,
    width: 97,
    
  },
  
})