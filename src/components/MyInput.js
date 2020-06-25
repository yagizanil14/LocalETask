import React from 'react'
import { View, TextInput } from 'react-native'
import styles from "./styles"

const MyInput = props => {
    return (
        <View >
            <TextInput
                style={styles.MyInput.textInput}
                onChangeText={props.PonChangeText}
                placeholder={props.Pplaceholder}
                autoCapitalize={props.PautoCapitalize}
                keyboardType={props.PkeyboardType}
                maxLength={props.maxLenght}
                secureTextEntry={props.SecureTextEntry}
            />
        </View>
    )
}
export { MyInput }