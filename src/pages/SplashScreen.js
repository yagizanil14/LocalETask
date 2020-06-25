import React, { useEffect } from 'react'
import { Text, SafeAreaView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = props => {
    useEffect(() => {
        AsyncStorage.getItem("@USER_TOKEN")
            .then(res => {
                if (res == null) {
                    props.navigation.navigate("Login Pages")
                } else {
                    props.navigation.navigate("Main Pages")
                }
            })
    }, [])
    return (
        <SafeAreaView>
            <Text>Loading</Text>
        </SafeAreaView>

    )
}
export { SplashScreen }