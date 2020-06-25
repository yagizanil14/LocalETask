import React, { useState, useEffect } from "react"
import { SafeAreaView, Text, FlatList, View, TouchableOpacity } from "react-native"
import { RestaurantItem } from "../components"
import axios from "axios"
import AsyncStorage from '@react-native-community/async-storage';
import styles from "./styles"

const MainPages = props => {
    const [userInfo, setUserInfo] = useState({})
    const [restaurant, setRestaurant] = useState([])

    useEffect(() => {
        AsyncStorage.getItem("@USER_TOKEN")
            .then((res) => {
                fetchUser(res)
                fetchRestaurants(res)
            })
    }, [])

    const fetchUser = async (token) => {
        try {
            const data = await axios.post("http://209.250.226.42:8083/graphql", {
                query: `query{
                    user{
                        email
                        firstName
                        lastName
                        addresses{
                            city{
                                name
                            },
                            country{
                                name
                            }
                        }
                    }
                    
                  }
                `
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            const UserData = data.data.data.user
            setUserInfo(
                {
                    userFirstName: UserData.firstName,
                    useEmail: UserData.email,
                    userLastName: UserData.lastName,
                    userCityAddress: UserData.addresses[0].city.name,
                    userCountryAddress: UserData.addresses[0].country.name
                }
            )

        } catch (err) {
            console.log(err)
        }
    }

    const fetchRestaurants = async (token) => {
        try {
            const data = await axios.post("http://209.250.226.42:8083/graphql", {
                query: `query{
                    restaurants(limit:${10} delivery:${false} index:${10} showOffline:${true} ){
                        name
                        open
                        picture{
                            url
                            height
                            width
                            alt
                            bundle
                            title
                        }
                        restaurantItemId
                        restaurantAddressSlugCityName
                        restaurantAddressSlugAdminWard
                    }
                }
                `
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            const ResData = data.data.data.restaurants
            setRestaurant(ResData)

        } catch (err) {
            console.log(err)
        }
    }

    const renderRes = ({ item }) => {
        return (
            <RestaurantItem resData={item} />
        )
    }

    const LogOut = () => {
        AsyncStorage.removeItem("@USER_TOKEN")
            .then(() => {
                props.navigation.navigate("Login Pages")
            })
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {
                restaurant.length < 1 ?
                    <Text>Loading</Text>
                    :
                    <View style={styles.MainStyles.container}>
                        <View style={styles.MainStyles.userInfo}>
                            <View style={styles.MainStyles.userView}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.MainStyles.userNameL}>
                                        {userInfo.userFirstName}
                                    </Text>
                                    <Text style={styles.MainStyles.userNameL}>
                                        {userInfo.userLastName}
                                    </Text>
                                </View>
                                <View style={styles.MainStyles.CityCountry}>
                                    <Text>{userInfo.userCityAddress} / </Text>
                                    <Text>{userInfo.userCountryAddress}</Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: "space-between" }}>
                                <Text style={styles.MainStyles.userEmail}>
                                    {userInfo.useEmail}
                                </Text>
                                <TouchableOpacity
                                    style={styles.MainStyles.logOut}
                                    onPress={LogOut}>
                                    <Text style={{ margin: 0 }}>Log Out</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <FlatList
                            keyExtractor={(_, index) => index.toString()}
                            data={restaurant}
                            renderItem={renderRes} />
                        <TouchableOpacity
                            style={styles.MainStyles.pastOrders}
                            onPress={() => { props.navigation.navigate("Past Orders Pages") }}>
                            <Text style={styles.MainStyles.pastOrdersText}>
                                Past Orders
                            </Text>
                        </TouchableOpacity>
                    </View>
            }
        </SafeAreaView>
    )
}
export { MainPages }