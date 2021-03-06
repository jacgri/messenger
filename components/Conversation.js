import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'

const Conversation = (props) => (
    <TouchableHighlight style={styles.item} onPress={() => props.onChooseConversation(props._id)}>
        <Text style={styles.name}>{props.recipient.firstName} {props.recipient.lastName}</Text>
    </TouchableHighlight>
)


const styles = StyleSheet.create({
    item: {
        padding: 20,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        backgroundColor: 'white'
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default Conversation