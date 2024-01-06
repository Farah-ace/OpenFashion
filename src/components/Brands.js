import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Brands = () => {
    return (
        <View style={styles.container}>
           <View style={styles.containerdevider}>
           <Image style={styles.deviderStyle} source={require('../assets/icons/deviderIcons/Devider.png')} />
           </View>
            <View style={styles.containerimg}>
                <Image style={styles.pradaStyle} source={require('../assets/icons/brandsIcons/Prada.png')} />
                <Image style={styles.burberryStyle} source={require('../assets/icons/brandsIcons/Burberry.png')} />
                <Image style={styles.bossStyle} source={require('../assets/icons/brandsIcons/Boss.png')} />
            </View>
            <View style={styles.containerimg}>
                <Image style={styles.catierStyle} source={require('../assets/icons/brandsIcons/Catier.png')} />
                <Image style={styles.gucciStyle} source={require('../assets/icons/brandsIcons/Gucci.png')} />
                <Image style={styles.tiffanyStyle} source={require('../assets/icons/brandsIcons/Tiffany.png')} />
            </View>
            <View style={styles.containerdevider}>
           <Image style={styles.deviderStyle} source={require('../assets/icons/deviderIcons/Devider.png')} />
           </View>
        </View>
    )
}

export default Brands

const styles = StyleSheet.create({
    container:{
        height: 250,
    },
    containerimg: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: 50,
        alignItems: 'baseline'

    },
    pradaStyle:{
        width: 70,
        height: 11
    },
    burberryStyle:{
        width: 98,
        height: 8
    },
    bossStyle:{
        width: 53,
        height: 20
    },
    catierStyle:{
        width: 72,
        height: 21
    },
    gucciStyle:{
        width: 94,
        height: 15
    },
    tiffanyStyle:{
        width: 98,
        height: 14
    },
    containerdevider: {
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center',

    },
    deviderStyle: {
        width: 124,
        height: 9
    },
})