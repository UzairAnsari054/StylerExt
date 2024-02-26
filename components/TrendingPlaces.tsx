import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TrendingPlaces() {
  return (
    <View>
      <Text style={styles.heading}>TrendingPlaces</Text>
      <View style={styles.container}>
      <Image 
      source={{
        uri: 'https://cdn.pixabay.com/photo/2023/07/17/12/13/bird-8132549_1280.jpg'
      }}
      style={styles.imageCard}
      />
      <View style={styles.imageDescBody}>
      <Text style={styles.cardTitle}>Jasmin</Text>
        <Text style={styles.cardLabel}>Flower</Text>
        <Text style={styles.cardDesc}>White Flower White Flower White Flower White Flower White Flower White FlowerWhite Flower White Flower White Flower White Flower White Flower White </Text>
        <Text style={styles.cardFooter}>12 min away</Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingStart: 8
    },
    container: {
      width: 370,
      height: 360,
      borderRadius: 8,
      marginVertical: 6,
      marginHorizontal: 10,
      backgroundColor: "#FFFFFF"
    },
    imageCard: {
      height: 200,
      marginBottom: 4,
      borderTopRightRadius: 8,
      borderTopLeftRadius: 8,
    },
    imageDescBody: {
      padding: 4
    },
    cardTitle: {
      color: '#000000',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 4,
  },
  cardLabel: {
      color: '#000000',
      fontSize: 14,
      marginBottom: 6,
  },
  cardDesc: {
      color: '#242B2E',
      fontSize: 12,
      marginBottom: 12,
      marginTop: 6,
      flexShrink: 1
  },
  cardFooter: {
      color: '#000000'
  },
})