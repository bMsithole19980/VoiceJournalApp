import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons'
import {Audio} from 'expo-av'
import AudioControl from './AudioControl'

export default function RecordScreen() {
  const [isRecording , setIsRecording] =useState(false);
  const [recording, setRecording] =useState();
  const [sound , setSound] =useState();
  const [recordingDur, setRecordingDur]= useState(0);
  const [audioList, setAudioList]= useState([]);
  

  useEffect(()=>{
    let interval;
    if(recording){
      interval = setInterval(async()=>{
        const status = await recording.getStatusAsync();
        setRecordingDur(status.durationMillis);
      }, 1000);
    } else{
      clearInterval(interval);
    }
    return ()=> clearInterval(interval);
  },[recording])

  const startRecording= async()=>{
    try {
      if (!isRecording) {
       
        const {recording} = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );
        setRecording(recording);
        setIsRecording(true);
        await recording.startAsync();
      }
    } catch (error) {
      console.error('Failed to start recording', error);
    }
  };

  const stopRecording= async()=>{
    try {
      if (isRecording) {
        await recording.stopAndUnloadAsync();
        setIsRecording(false);
        const {sound:newSound} = await recording.createNewLoadedSoundAsync();
        setSound(newSound);
        const recordingURI = recording.getURI();
        setAudioList((prevAudioList)=> [...prevAudioList, recordingURI]);
      }
    } catch (error) {
      console.error('Failed to stop recording', error);
    }
  }
 

   const playRecording= async()=>{
    if (!sound) return;
      try {
        await sound.playAsync();
      } catch (error) {
        console.error('Failed to stop recording');
      }
   }

   const deleteRecording=(index)=>{
    const updatedAudioList = audioList.filter((_, i)=> i !== index);
    setAudioList(updatedAudioList);
   }
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.header}>Audio Record</Text>             
      </View>

      <View style={[styles.microContainer,  {backgroundColor: isRecording ? 'red': '#ff7b25'}]}>
        <Pressable
         onPress={isRecording ? stopRecording: startRecording}
        >
          <FontAwesome5
            name={'microphone-alt'}
            size={150}
            color={isRecording ? 'red': '#FFF'} />
        </Pressable>
        
      </View>
      <View style={styles.audioMinutes}>
       
       <Text style={styles.dur}>{(recordingDur/1000).toFixed(0)} seconds</Text>
       <Text>Playback Duration: {(sound ? sound.durationMillis: 0)/ 1000} sec</Text>
        
      </View>
      <Text style={styles.recorded}>Recorded Audio</Text>
       <View style={styles.recordingsBox}>
        {audioList.map((audioURI, index)=>(
          <AudioControl
          key={index}
          playRecording={()=>playRecording(audioURI)}
          deleteRecording={()=> deleteRecording(index)}
          audioURI={audioURI}
          index={index}/>

        ))}
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
    back:{
        marginTop: 20,
        marginRight: 30
    }
    ,
    microContainer:{
      backgroundColor:'#ff7b25',
      alignItems: 'center',
      marginTop: 120,
      width: 200,
      height: 200,
      alignSelf: 'center',
      borderRadius: 100, 
      
    },
    audioMinutes:{
      backgroundColor:'#9fa9a3',
      alignContent: 'center',
      justifyContent: 'center',
      marginTop: 20,
      height: 120
    },
    recordingsBox:{
      flex: 1
    },
    recorded:{
      textAlign: 'center',
      fontFamily: 'pacifio',
      fontWeight: 'bold',
      fontSize: 24
    }
    
    
})