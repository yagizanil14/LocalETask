import { StyleSheet, Dimensions } from 'react-native'

const styles = {
    MainStyles: StyleSheet.create({
        container: {
            flex: 1,
        },
        userView: {
            marginHorizontal: 15,
            justifyContent: "space-between",
        },
        userInfo: {
            backgroundColor: "#fb8c00",
            justifyContent:"space-between",
            flexDirection:"row"
        },
        userNameL: {
            fontSize: 16,
            fontWeight: "bold",
        },
        userEmail: {
            fontSize: 10,
            fontWeight: "300",
            marginHorizontal: 10,
            alignSelf: "flex-start"
        },
        CityCountry: {
            flexDirection: "row",
        },
        logOut:{
            justifyContent:"flex-end", 
            alignSelf:"center"
        },
        pastOrders: {
            alignSelf: "flex-end",
            height: Dimensions.get("window").height * 0.07,
            width: Dimensions.get("window").width * 0.5,
            position: "absolute",
            marginTop: Dimensions.get("window").height * 0.8,
            borderRadius: 15,
            backgroundColor: "#00600f",
            flexDirection: "row",
            justifyContent: "center"
        },
        pastOrdersText: {
            alignSelf: "center",
            fontSize: 16,
            fontWeight: "bold",
            color: "white"
        }
    }),
    loginPage: StyleSheet.create({
        container: {
            marginTop: Dimensions.get("window").height * 0.1
        },
        loginTitle: {
            alignSelf: "center",
            fontSize: 25,
            fontWeight: "bold",
            fontStyle: "italic",
            marginVertical: 10,
            color: "#616161"
        }
    })
}
export default styles