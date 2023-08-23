import { StyleSheet, Pressable, View, Text } from 'react-native'
import React from 'react'
import { FontAwesome5 , Ionicons, MaterialIcons} from '@expo/vector-icons'


export default function ({playRecording, deleteRecording, index, audioURI}) {
   
  return (
      <View style={styles.container}>
        <View style={styles.Header}>
          
        </View>
          <View style={styles.audioContent}>
              <FontAwesome5
                  name='file-audio'
                  size={24}
                  color='black'
                  style={styles.audioIcon} />
                <Text style={styles.AudioName}>Voice{index+1}</Text>
              <Pressable onPress={()=> playRecording(audioURI)}>
                  <Ionicons
                      name='md-play'
                      size={24}
                      color='black'
                      style={styles.playIcon}
                  />
              </Pressable>
              <Pressable onPress={deleteRecording}>
                  <MaterialIcons
                      name='delete'
                      size={24}
                      color='red'
                      style={styles.deleteIcon}
                  />
              </Pressable>
          </View>
      </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#DCDCDC'
    },
    Header:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    header:{
        fontSize: 24,
      fontFamily: 'pacifico',
      fontWeight: 'bold',
      alignSelf: 'center'
    },

    audioContent: {
    backgroundColor: 'black',
    marginTop: 20,
    height: 50,
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    marginRight: 15,
    flexDirection: 'row',
    backgroundColor: '#FFF'
  },
  audioIcon:{
    marginRight: 220
    
  },
  AudioName:{
    right: 170,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'pacifico',
    fontStyle: 'italic'
  },
  playIcon:{
    right: 120
  },
  deleteIcon:{
    right: 80
  }
})