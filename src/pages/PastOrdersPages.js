import React, { useState, useEffect } from "react"
import { SafeAreaView, Text, FlatList } from "react-native"
import { PastOrdersItem } from "../components"
import axios from "axios"
import AsyncStorage from '@react-native-community/async-storage';

const PastOrdersPages = () => {
    const [pastOrders, setPastOrders] = useState([])
    useEffect(() => {
        AsyncStorage.getItem("@USER_TOKEN")
            .then((res) => {
                fetchPastOrders(res)
            })
    }, [])
    const fetchPastOrders = async (token) => {
        try {
            const data = await axios.post("http://209.250.226.42:8083/graphql", {
                query: `query{
                    pastOrders(limit:${10} index:${10}){
                        address{
                            addressLine1
                        }
                        orderDate
                        total
                        restaurant{
                            name
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
            const OrdersData = data.data.data.pastOrders
            setPastOrders(OrdersData)
        } catch (err) {
            console.log(err)
        }
    }
    const PastOrderItems = ({ item }) => {
        return (
            <PastOrdersItem dataItem={item} />
        )
    }
    return (
        <SafeAreaView>
            <FlatList
                keyExtractor={(_, index) => index.toString()}
                data={pastOrders}
                renderItem={PastOrderItems} />
        </SafeAreaView>
    )
}
export { PastOrdersPages }