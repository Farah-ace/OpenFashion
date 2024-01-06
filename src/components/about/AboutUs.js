import { Image, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const AboutUs = () => {
    const data = [{
        id: 1,
        productImage: '../../assets/icons/motoIcons/MiroodlesSticker.png',
        productName: 'Fast shipping. Free on orders over $25.',
       
    
      },
      {
        id: 2,
        productImage: '../../assets/icons/motoIcons/MiroodlesSticker1.png',
        productName: 'Sustainable process from start to finish.',
        
    
      },
      {
        id: 3,
        productImage: '../../assets/icons/motoIcons/MiroodlesSticker2.png',
        productName: 'Unique designs and high-quality materials.',
        
    
      },
      {
        id: 4,
        productImage: '../../assets/icons/motoIcons/MiroodlesSticker3.png',
        productName: 'Fast shipping. Free on orders over $25.',
       
    
      },
      ]
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Image style={styles.logoStyle} source={require('../../assets/icons/headerIcons/Logo.png')}/>
      </View>
      <View style={styles.containertext}>
        <Text style={styles.textStyle}>Making a luxurious lifestyle accessible for a generous group of women is our daily drive.</Text>
      </View>
      <View style={styles.containerdevider}>
        <Image style={styles.deviderStyle} source={require('../../assets/icons/deviderIcons/Devider.png')} />
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={styles.containerCard}>
               <View style={{ alignSelf: 'center', alignContent: 'center' }}>
               <Image style={styles.cardimgStyle} source={require('../../assets/icons/motoIcons/MiroodlesSticker.png')} />
               </View>
                <View style={{alignContent: 'center', alignSelf:'center'}}>
                  <Text style={styles.textStyle}>{item.productName}</Text>
                </View>
              </View>
            )
          }}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
      <View style={styles.containeraboutUsEnd}>
        <Image style={styles.aboutUsEnd} source={require('../../assets/icons/motoIcons/aboutUsEnd.png')}/>
      </View>
    </View>
  )
}

export default AboutUs

const styles = StyleSheet.create({
    container:{
        height: 560,
        width:'100%',
        backgroundColor: '#F2F2F2',
        //justifyContent: ''
    },
    logoContainer:{
        height: 80,
        justifyContent:'center',
        alignSelf: 'center'
         
       },
       logoStyle: {
         height: 50,
         width: 125,
         
       },
       containertext: {
        width: '80%',
        //justifyContent: 'center',
        alignSelf: 'center'
      },
      textStyle: {
        fontFamily: 'Tenor Sans',
        fontSize: 15,
        letterSpacing: 1,
        textAlign: 'justify',
      },

      containerdevider: {
        justifyContent: 'center',
        alignSelf: 'center',
        height: 30
      
      },
      deviderStyle: {
        width: 124,
        height: 9
      },
      containerCard: {
        height: 150,
        width: '50%',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    
      },
      cardimgStyle: {
        paddingTop: 20,
        height: 40,
        width: 55,
      },
      aboutUsEnd:{
        height: 40, 
        width: 66
      },
      containeraboutUsEnd:{
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center',
      },
})