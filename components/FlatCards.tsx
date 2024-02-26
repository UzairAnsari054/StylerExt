import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.heading}>FlatCards</Text>
      <View style={styles.container}>
      <View style={[styles.cardShape, styles.cardColor1]}>
        <Text>RED</Text>
      </View>
      <View style={[styles.cardShape, styles.cardColor2]}>
        <Text>RED</Text>
      </View>
      <View style={[styles.cardShape, styles.cardColor3]}>
        <Text>RED</Text>
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
    container:{
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    cardShape:{
        flex: 1,
        width: 100,
        height: 100,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 4
    },
    cardColor1:{
        backgroundColor: "#EF5354"
    },
    cardColor2:{
        backgroundColor: "#387ADF"
    },
    cardColor3:{
        backgroundColor: "#78A083"
    },
})