import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Header } from 'react-native-elements';
export default class WriteStory extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header backgroundColor={'#9c8210'}
          centerComponent={{
                    text: 'Story',
                    style: { color: '#fff', fontSize: 20, width:50 },
                }} />
                <View style={styles.titleView}>
                    <TextInput placeholder="Story Title"></TextInput>
                </View>
                <View style={styles.authorView}>
                    <TextInput placeholder="Author"></TextInput>
                </View>
                <View style={styles.storyView}>
                    <TextInput placeholder="Write your story"></TextInput>
                </View>
                <TouchableOpacity style={styles.buttonView}>
                    <Text>SUBMIT</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleView: {
        marginTop: 10,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        width: 350
    },
    authorView: {
        marginTop: 10,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        width: 350
    },
    storyView: {
        marginTop: 10,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        width: 350,
        height: 200
    },
    buttonView: {
        backgroundColor: "red",
        marginTop: 20,
        borderRadius: 5,
        width: 80,
        height: 40,
        alignItems: "center",
        justifyContent: "center"
    }
});