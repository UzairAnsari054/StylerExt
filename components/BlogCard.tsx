import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function BlogCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.heading}>BlogCard</Text>
      <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>What's up with Spider's Web?🕸️</Text>
        </View>
        <Image 
        source={{
            uri: 'https://cdn.pixabay.com/photo/2023/09/24/08/18/spider-web-8272356_1280.jpg'
        }}
        style={styles.imageCard}
        />
        <Text style={styles.textDesc} numberOfLines={2}>bvfsgyxhia caiyudgchajs aus akhshx09ai sxaius ahgsgh0jpls aioa aioscbacnsnd sdiocbksjdnc sjd c bvfsgyxhia caiyudgchajs aus akhshx09ai sxaius ahgsgh0jpls aioa aioscbacnsnd sdiocbksjdnc sjd c</Text>
        <View style={styles.footerBtn}>
            <TouchableOpacity onPress={ () => openWebsite('https://medium.com/bumble-tech/crash-course-on-the-android-ui-layer-part-1-2094221a9be3')}>
                <Text style={styles.socialLink}>Medium Article</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => openWebsite('https://www.egyankosh.ac.in/handle/123456789/72415')}>
                <Text style={styles.socialLink}>Government</Text>
            </TouchableOpacity>
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
        width: 360,
        height: 350,
        marginHorizontal: 12,
        marginVertical: 12,
        borderRadius: 14,
        backgroundColor: '#FFFFFF'
    },
    imageCard: {
        height: 200
    },
    headerContainer: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000000'
    },
    textDesc: {
        color: '#000000',
        paddingHorizontal: 8,
        marginTop: 4
    },
    footerBtn: {
                padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        
    },
    socialLink: {
        color: '#000000',
        backgroundColor: "#CCFBFE",
        padding: 12,
        borderRadius:6
    }
})