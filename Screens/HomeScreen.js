import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Audio } from 'expo-av'
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons'
import AudioControl from './AudioControl';

export default function HomeScreen({route}) {
    
    const {recordingData}= route.params || {};

    const PlayRecording = async(sound)=>{
        if (sound) {
            try {
                await sound.plaAsync();
            } catch (error) {
                console.error('Failed to play recording', error);
            }
            
        }
    }
    const deleteRecording = (index) => {
        const updatedAudioList = audioList.filter((_, i) => i !== index);
        setAudioList(updatedAudioList);
    }
    return (
        
        <View style={styles.container}>
            <Text>Recorded Files</Text>
            <FlatList
            data={recordingData}
            keyExtractor={(item)=> item.uri}
            renderItem={({item})=>(
                <AudioControl
                key={index}
                playRecording={()=>playRecording}
                deleteRecording={()=> deleteRecording(index)}/>
            )}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC'
    },
    audiosContent: {
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
    audioIcon: {
        marginRight: 220

    },
    AudioName: {
        right: 170,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'pacifico',
        fontStyle: 'italic'
    },
    playIcon: {
        right: 120
    },
    deleteIcon: {
        right: 80

    }
})