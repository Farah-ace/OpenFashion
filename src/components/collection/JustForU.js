import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const JustForU = () => {
    const data = [{
        id: 1,
        productImage: '../../assets/images/Rectangle324.png',
        productName: '21WN reversible angora cardigan',
        productPrice: '$120'

    },
    {
        id: 2,
        productImage: '../../assets/images/Rectangle324.png',
        productName: '21WN reversible angora cardigan',
        productPrice: '$120'

    },
    {
        id: 3,
        productImage: '../../assets/images/Rectangle324.png',
        productName: '21WN reversible angora cardigan',
        productPrice: '$120'

    },
    {
        id: 4,
        productImage: '../../assets/images/Rectangle324.png',
        productName: 'Oblong bag',
        productPrice: '$120'

    },
    ]
    return (

        <View style={styles.container}>

            <View style={styles.containertext}>
                <Text style={styles.textStyle}>JUST FOR YOU</Text>
            </View>
            <View style={styles.containerdevider}>
                <Image style={styles.deviderStyle} source={require('../../assets/icons/deviderIcons/Devider.png')} />
            </View>

            <View>
                <FlatList
                    horizontal
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.containerCard}>
                                <Image style={styles.cardimgStyle} source={require('../../assets/images/Rectangle325.png')} />
                                <View style={{ alignSelf: 'center', alignContent: 'center' }}>
                                    <Text>{item.productName}</Text>
                                </View>
                                <View style={{ alignSelf: 'center', alignContent: 'center' }}>
                                    <Text style={{ color: 'red' }}>{item.productPrice}</Text>
                                </View>
                            </View>
                        )
                    }}
                    keyExtractor={item => item.id}
                    //numColumns={2}
                />
            </View>

            <Pressable>
                <View style={styles.containerbtn}>
                    <Text style={styles.textStyle}>Explore More</Text>
                    <Image style={styles.forwardArrow} source={require('../../assets/icons/arrowIcons/ForwardArrow.png')} />
                </View>
            </Pressable>


        </View>

    )
}

export default JustForU

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containertext: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    containerdevider: {
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
    deviderStyle: {
        width: 124,
        height: 9
    },
    containerCard: {
        height: 400,
        width: 270,
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',

    },
    cardimgStyle: {
        paddingTop: 20,
        height: 310,
        width: 255,
    },
    containerbtn: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'center',

    },
    forwardArrow: {
        width: 18,
        height: 18,
        alignSelf: 'center',
        justifyContent: 'space-between'
    },


})