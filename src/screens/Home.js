import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/headers/Header'
import Poster from '../components/poster/Poster'
import NewArrival from '../components/collection/Newarrival'
import Collection from '../components/collection/Collection'
import JustForU from '../components/collection/JustForU'
import AboutUs from '../components/about/AboutUs'
import FollowUs from '../components/follow/FollowUs'
import MainFooter from '../components/footers/MainFooter'
import Brands from '../components/Brands'

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Poster />
        <NewArrival/>
        <Brands/>
        <Collection/>
        <JustForU/>
        <AboutUs/>
        <FollowUs/>
        <MainFooter/>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'yellow',
    flex: 1,
  }
})