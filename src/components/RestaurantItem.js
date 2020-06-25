import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from "./styles"

const RestaurantItem = props => {
    return (
        <View style={styles.restaurantListItem.cardItem}>
            <Image style={styles.restaurantListItem.itemImg} source={{
                "Version": "2012-10-17",
                "Statement": [
                    {
                        "Sid": "PublicRead",
                        "Effect": "Allow",
                        "Principal": "*",
                        "Action": ["s3:GetObject"],
                        "Resource": [`arn:aws:s3:::${props.resData.picture.bundle}/*`]
                    }
                ]
            }} />
            <View style={styles.restaurantListItem.itemInfo}>
                <Text style={styles.restaurantListItem.itemTitle}>
                    {props.resData.name}
                </Text>
                <View style={styles.restaurantListItem.itemLocate}>
                    <Text>{props.resData.restaurantAddressSlugCityName} / </Text>
                    <Text>{props.resData.restaurantAddressSlugAdminWard}</Text>
                </View>
            </View>
        </View>
    )
}
export { RestaurantItem }