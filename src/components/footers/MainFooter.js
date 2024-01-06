import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MainFooter = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containersocial}>
                <Image style={styles.socialiconStyle} source={require('../../assets/icons/socialIcons/Twitter.png')} />
                <Image style={styles.socialiconStyle} source={require('../../assets/icons/socialIcons/Instagram.png')} />
                <Image style={styles.socialiconStyle} source={require('../../assets/icons/socialIcons/YouTube.png')} />
            </View>
            <View style={styles.containerdevider}>
                <Image style={styles.deviderStyle} source={require('../../assets/icons/deviderIcons/Devider.png')} />
            </View>
            
            <View style={styles.containertext}>
                <Text style={styles.textStyle}>support@openui.design</Text>          
            </View>
            <View style={styles.containertext}>
                <Text style={styles.textStyle}>+60 825 876</Text>          
            </View>
            <View style={styles.containertext}>
                <Text style={styles.textStyle}>08:00 - 22:00 - Everyday</Text>           
            </View>
            <View style={styles.containerdevider}>
                <Image style={styles.deviderStyle} source={require('../../assets/icons/deviderIcons/Devider.png')} />
            </View>
            <View style={styles.containersocial}>
                <Pressable>
                    <Text style={styles.textStyle}>About</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.textStyle}>Contact</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.textStyle}>Blog</Text>
                </Pressable>
            </View>
            <View style={styles.containerfooter}>
                <Text style={styles.containerfooter}>Copyright© OpenUI All Rights Reserved.</Text>
            </View>

        </View>
    )
}

export default MainFooter

const styles = StyleSheet.create({
    container: {
        height: 340,
    },
    socialiconStyle: {
        height: 24,
        width: 24
    },
    containersocial: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
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
    containertext: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    textStyle: {
        fontFamily: 'Tenor Sans',
        fontSize: 16,
        lineHeight: 32,
        letterSpacing: 4
    },
    footer:{
        fontFamily: 'Tenor Sans',
        fontSize: 12,
        lineHeight: 19,
        letterSpacing: 4,
    },
    containerfooter:{
        padding: 5,
        backgroundColor: '#C4C4C4',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center'
    }
})