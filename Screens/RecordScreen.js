import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function RecordScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.Header}>Audio Record</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1

    },
    Header:{
        fontSize: 24,
        fontFamily: 'pacifico',
        fontWeight: 'bold',


    }
})