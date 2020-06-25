import React from 'react'
import { View, Text } from 'react-native'
import styles from "./styles"
import moment from 'moment';

const PastOrdersItem = props => {
    const data = props.dataItem
    const DateFormat = moment(new Date(data.orderDate)).format('YYYY-MM-DD');
    return (
        <View style={styles.PastOrdersItem.container}>
            <View style={styles.PastOrdersItem.ıtemView}>
                <Text style={styles.PastOrdersItem.resName}>
                    {data.restaurant.name}
                </Text>
                <Text style={styles.PastOrdersItem.resAddress}>
                    {data.address.addressLine1}
                </Text>
            </View>
            <View style={styles.PastOrdersItem.ıtemView}>
                <Text style={styles.PastOrdersItem.ıtemText}>
                    {DateFormat}
                </Text>
                <Text style={styles.PastOrdersItem.Total}>
                    TOTAL: {data.total}
                </Text>
            </View>

        </View>
    )
}
export { PastOrdersItem }