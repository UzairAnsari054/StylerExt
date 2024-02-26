import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {


const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];

  return (
    <View>
      <Text style={styles.heading}>ContactList</Text>
      <View style={styles.container}>
        {contacts.map( (item) => (
            <View key={item.uid} style={styles.cardItem}>
                <Image 
                source={{
                    uri: item.imageUrl
                }}
                style={styles.imageItem}
                />
                <View>
                    <Text style={styles.userName}>{item.name}</Text>
                    <Text style={styles.userStatus}>{item.status}</Text>
                </View>
            </View>
        ))}
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
        padding: 8
    },
    cardItem: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#8D3DAF',
        borderRadius:12,
        padding:8
        },
    imageItem: {
        width: 70,
        height: 70,
        borderRadius: 70/2,
        marginRight: 16
    },
    userName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF'
    },
    userStatus: {
        fontSize: 12,    
    },
})