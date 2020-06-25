import {StyleSheet,Dimensions} from 'react-native'

const styles={
    restaurantListItem:StyleSheet.create({
        cardItem:{
            width:Dimensions.get("window").width * 0.8,
            height:Dimensions.get("window").height / 2.9,
            borderColor:"#fb8c00",
            borderWidth:8,
            alignSelf:"center",
            borderRadius:10,
            marginVertical:10
        },
        itemImg:{
            width:Dimensions.get("window").width * 0.75,
            height:Dimensions.get("window").height / 4,
            alignSelf:"center"
        },
        itemInfo:{
            backgroundColor:"#fb8c00",
        },
        itemLocate:{
            flexDirection:"row",
            marginTop:5
        },
        itemTitle:{
            fontSize:18,
            fontWeight:"bold"
        }
    }),
    PastOrdersItem:StyleSheet.create({
        container:{
            backgroundColor:"#ff9800",
            width:Dimensions.get("window").width * 0.9,
            height:Dimensions.get("window").height / 12,
            borderRadius:15,
            alignSelf:"center",
            flexDirection:"row",
            justifyContent:"space-around",
            marginVertical:10
        },
        ıtemView:{
            alignSelf:"center"
        },
        resName:{
            fontSize:15,
            fontWeight:"bold"
        },
        resAddress:{
            fontSize:12,
            fontWeight:"300"
        },
        Total:{
            fontSize:16,
            marginTop:7,
            alignSelf:"flex-end"
        }
    }),
    MyInput:StyleSheet.create({
        textInput:{
            backgroundColor:"#e0e0e0",
            marginHorizontal:20,
            marginVertical:5,
            borderRadius:15
        }
    }),
    MyButton:StyleSheet.create({
        myButton:{
            alignSelf:"center",
            width:Dimensions.get("window").width * 0.4,
            height:Dimensions.get("window").height / 17,
            backgroundColor:"#00600f",
            borderRadius:15,
            justifyContent:"center",
            alignItems:"center",
            marginVertical:15
        },
        buttonText:{
            color:"white"
        }
    })
}
export default styles