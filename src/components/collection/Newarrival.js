import { Alert, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Deviderimg from '../../assets/icons/deviderIcons/Devider.png';

const NewArrival = () => {
  const data = [{
    id: 1,
    productImage: require('../../assets/images/Rectangle324.png'),
    productName: '21WN reversible angora cardigan',
    productPrice: '$120'

  },
  {
    id: 2,
    productImage: require('../../assets/images/Rectangle325.png'),
    productName: '21WN reversible angora cardigan',
    productPrice: '$120'

  },
  {
    id: 3,
    productImage: require('../../assets/images/Rectangle326.png'),
    productName: '21WN reversible angora cardigan',
    productPrice: '$120'

  },
  {
    id: 4,
    productImage: require('../../assets/images/Rectangle327.png'),
    productName: 'Oblong bag',
    productPrice: '$120'

  },
  ]
  const [option, setOption] = useState("");
  return (

    <View style={styles.container}>

      <View style={styles.containertext}>
        <Text style={styles.textStyle}>NEW ARRIVAL</Text>
      </View>
      <View style={styles.containerdevider}>
        <Image style={styles.deviderStyle} source={Deviderimg} />
      </View>

      <View style={styles.containermenu}>
      <Pressable onPress={() => setOption("All")}>
        <Text style={styles.textmenu}>All</Text>
      </Pressable>
      <Pressable onPress={() => setOption("Apparel")}>
        <Text style={styles.textmenu}>Apparel</Text>
      </Pressable>
      <Pressable onPress={() => setOption("Dress")}>
        <Text style={styles.textmenu}>Dress</Text>
      </Pressable>
      <Pressable onPress={() => setOption("Tshirt")}>
        <Text style={styles.textmenu}>Tshirt</Text>
      </Pressable>
      <Pressable onPress={() => setOption("Bag")}>
        <Text style={styles.textmenu}>Bag</Text>
      </Pressable>
      </View>

      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={styles.containerCard}>
                <Image style={styles.cardimgStyle} source={item.productImage} />
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
          numColumns={2}
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

export default NewArrival

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
    height: 30
  

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
    height: 320,
    width: '55%',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',

  },
  cardimgStyle: {
    paddingTop: 20,
    height: 250,
    width: '90%',
  },
  containerbtn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    
  },
  forwardArrow:{
    width: 18,
    height: 18,
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  containermenu:{
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textmenu:{
    fontFamily: 'Tenor Sans',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 30,
    letterSpacing: 1
  }


})