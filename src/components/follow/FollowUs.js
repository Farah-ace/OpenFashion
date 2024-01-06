import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FollowUs = () => {

    const data = [{
        id: 1,
        productImage: '../../assets/images/Rectangle332.png',
        Name: '@mia',
       

    },
    {
        id: 2,
        productImage: '../../assets/images/Rectangle332.png',
        Name: '@__jihyn',
        

    },
    {
        id: 3,
        productImage: '../../assets/images/Rectangle332.png',
        Name: '@mia',
        

    },
    {
        id: 4,
        productImage: '../../assets/images/Rectangle332.png',
        Name: '@__jihyn',

    },
    ]

  return (
    <View style={styles.container}>
        <View style={styles.containertext}>
                <Text style={styles.textStyle}>FOLLOW US</Text>
            </View>
            <View style={styles.containerIcon}>
                <Image style={styles.iconStyle} source={require('../../assets/icons/socialIcons/Instagram.png')}/>
            </View>
            <View>
            <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.containerCard}>
                                <ImageBackground style={styles.cardimgStyle} source={require('../../assets/images/Rectangle332.png')} >
                                <View style={styles.containerimgtext}>
                                    <Text style={styles.imgtextStyle}>{item.Name}</Text>
                                </View>
                                </ImageBackground>
                            </View>
                        )
                    }}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
            </View>
      
    </View>
  )
}

export default FollowUs

const styles = StyleSheet.create({
    container:{
        height: 590
    },
    containertext: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    textStyle: {
        fontFamily: 'Tenor Sans',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 40,
        letterSpacing: 4

    },
    iconStyle:{
        height: 24,
        width: 24

    },
    containerIcon:{
        height: 40,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    containerCard: {
        height: 220,
        width: '53%',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    
      },
      cardimgStyle: {
        paddingTop: 20,
        height: 200,
        width: '95%',
      },
      imgtextStyle: {
        fontFamily: 'Ariel',
        fontSize: 14,
        lineHeight: 40,
        letterSpacing: 4,
        color: 'white',
    },
    containerimgtext:{
        //justifyContent: 'flex-end', 
        top: 145
    }
})