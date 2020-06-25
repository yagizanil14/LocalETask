import React, { useState } from "react"
import { SafeAreaView, Text, View } from "react-native"
import { MyButton, MyInput } from '../components'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import styles from "./styles"

const LoginPages = props => {
    const [userEmail, setUserEmail] = useState("")
    const [userPass, setUserPass] = useState("")

    const setEmail = text => setUserEmail(text)
    const setPass = text => setUserPass(text)

    const loginUser = async () => {
        try {
            const data = await axios.post("http://209.250.226.42:8083/graphql", {
                query: `mutation {
                    loginWithEmail(email:"${userEmail}", password:"${userPass}") {
                      token
                    }
                  }
                `,
            })
            props.navigation.navigate("Main Pages")
            AsyncStorage.setItem("@USER_TOKEN", `${data.data.data.loginWithEmail.token}`)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <SafeAreaView>
            <View style={styles.loginPage.container}>
                <Text style={styles.loginPage.loginTitle}>Sign In</Text>
                <MyInput
                    PonChangeText={setEmail}
                    Pplaceholder="Enter Email Address"
                    PautoCapitalize="none"
                    PkeyboardType="email-address"
                    maxLenght={30}
                    SecureTextEntry={false}
                />
                <MyInput
                    PonChangeText={setPass}
                    Pplaceholder="Enter Password"
                    PautoCapitalize="none"
                    PkeyboardType="default"
                    maxLenght={30}
                    SecureTextEntry={true}
                />
                <MyButton OnPress={loginUser} ButtonTitle="Sign In" />
            </View>
        </SafeAreaView>
    )
}
export { LoginPages }