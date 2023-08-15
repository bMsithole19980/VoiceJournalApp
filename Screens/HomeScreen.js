import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import voice1 from '../Audios/town-10169.mp3'
import voice2 from '../Audios/in-the-forest-2-21402.mp3'
import {Player} from 'react-native-audio-player'
import { Feather, FontAwesome5 } from '@expo/vector-icons'
export default function HomeScreen() {
    const voiceNotes = [
        { id: 1, title: 'Hello There', audioPath: voice1 },
    ];
    const playAudio=(audioPath)=>{
        const player =new Player(audioPath);
        player.play();
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <Text style={styles.header}>Recordings</Text>
                <View style={styles.searchBox}>
                    <Feather
                        name='search'
                        size={24}
                        color='black'
                        style={styles.searchIcon} />

                </View>
                
            </View>

            <FlatList
                data={voiceNotes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.AudioBox}>
                        <Pressable
                        style={styles.btnPlay}
                        onPress={()=>playAudio(item.audioPath)}
                        >
                            <FontAwesome5
                            name='play'
                            size={24}
                            color='black'
                            style={styles.play}/>
                         
                        </Pressable>
                        <Text style={styles.audioDescr}>{item.title}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC'
    },
    headerBox: {
        flexDirection: 'row',
        justifyContent: 'center'

    },
    searchBox:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: '#FFF',
        borderRadius: 20,
        width: '15%',
        height: 40,
        marginTop: 10,
        marginLeft: 80
    },
    searchIcon:{
        alignItems: 'center'      

    },
    header: {
        fontFamily: 'pacifico',
        fontSize: 26,
        fontWeight: 'bold',
        fontStyle: 'italic',
        alignSelf: 'center',
        padding: 20
    },
    AudioBox: {
        backgroundColor: '#FFF',
        padding: 5,
        justifyContent: 'center',
        borderRadius: 10,
        height: 70,
        width: '95%',
        alignItems: 'center',
        padding: 40,
        paddingBottom: 20,
        marginTop: 40,
        marginLeft: 10
    },
    btnPlay:{
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        marginRight: 260,
        height: 40,
        width: '20%',
        borderRadius: 100

    },
    play:{
        alignItems: 'center'
        
        
    },
    audioDescr: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'pacifico',
        textAlign: 'center', 
       
    },


})