import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';


const Header = () => {
  const logo = '../assets/icons/headerIcons/Logo.png';
  const menuIcon = '../assets/icons/headerIcons/Menu.png';
  const searchIcon = '../assets/icons/headerIcons/Search.png';
  const cartIcon = '../assets/icons/headerIcons/shopbag.png';
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View>
      <Image style={styles.iconStyle} source={require(menuIcon)} />
      </View>
      <View style={styles.logoContainer}>
      <Image style={styles.logoStyle} source={require(logo)} />
      </View>
      <View style={styles.container2}>
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
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    width: '90%',
    height: '40%',
  },
  container2:{
    flexDirection: 'row',
    justifyContent:'space-between',
    
  },
  iconStyle:{
    height: 30,
    width: 30,
    //tintColor: 'green',
    margin: 10,
  
  },
  logoContainer:{
    justifyContent:'space-between',
    
  },
  logoStyle: {
    height: 40,
    width: 97,
    margin: 10,
    
  },
  
})