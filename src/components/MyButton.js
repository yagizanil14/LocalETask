import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from "./styles"

const MyButton = props => {
    return (
        <View>
            <TouchableOpacity style={styles.MyButton.myButton}
                onPress={props.OnPress}>
                <Text style={styles.MyButton.buttonText}>
                    {props.ButtonTitle}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export { MyButton }