import React from 'react';
import * as dateFns from 'date-fns'
import { View, Text, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

export const defaultEmptyListRenderer = (day) => {
  return <Text>No items for this date ({dateFns.format(day, 'mm/dd/yyyy')})</Text>
}

export const defaultItemRenderer = (dayEvents, selectedDate, itemClickHandler) => {
  const itemStyles = {
    listItem: {
      flexDirection: 'row',
      paddingVertical: 17,
      borderBottomColor: '#efefef',
      fontFamily: 'Montreal-Bold',
      borderBottomWidth: 1
    },
    time: {
      paddingHorizontal: 5,
      color: '#ccc',
      fontFamily: 'Montreal-Medium',
      paddingLeft: 10,
    },
    event: {
      // paddingHorizontal: 5,
      // color: '#ccc',
      fontFamily: 'Montreal-Medium',
      fontSize: 16,
      // paddingLeft: 10,
    },
    timeBox: {
      display: 'flex',
      flexDirection: 'column',
    },
    vlGreen: {
      borderLeftWidth: 3,
      borderRadius: 3,
      borderColor: '#04985A',
      height: 30,
      marginLeft: 15,
      marginTop: 2,
    },
    vlBlue: {
      borderLeftWidth: 3,
      borderRadius: 3,
      borderColor: '#2FA2B9',
      height: 30,
      marginLeft: 15,
      marginTop: 2,
    },
    vlBlueLight: {
      borderLeftWidth: 3,
      borderRadius: 3,
      borderColor: '#37BFDA',
      height: 30,
      marginLeft: 15,
      marginTop: 2,
    },
    vlBlueDark: {
      borderLeftWidth: 3,
      borderRadius: 3,
      borderColor: '#dd0606',
      height: 30,
      marginLeft: 15,
      marginTop: 2,
    },
  }
  const timeFormat = 'h:mm A'
  return dayEvents.items && dayEvents.items.map((item, i) => {
    const timeStart = dateFns.setMinutes(dateFns.setHours(selectedDate, item.timeStart.hour), item.timeStart.minute)
    const timeEnd = dateFns.setMinutes(dateFns.setHours(selectedDate, item.timeEnd.hour), item.timeEnd.minute)
    return (
    <TouchableOpacity key={i} onPress={() => itemClickHandler(item, selectedDate)}>
      <View style={itemStyles.listItem}>
      {item.type == 'open_house' &&  <View style={itemStyles.vlGreen}></View>}
      {item.type == 'private_showing' &&  <View style={itemStyles.vlBlue}></View>}
      {item.type == 'call' &&  <View style={itemStyles.vlBlueLight}></View>}
      {item.type == 'deal_flow' &&  <View style={itemStyles.vlBlueDark}></View>}
        <View style={itemStyles.timeBox}>
        <Text style={itemStyles.time}>
          {dateFns.format(timeStart, timeFormat)} 
        </Text>
        <Text style={itemStyles.time}>
        {dateFns.format(timeEnd, timeFormat)}
        </Text>
        </View>
        <View style={{display: 'flex', alignItems: 'center',width: 250, paddingLeft: 10, flexDirection: 'row'}}>
        
        <Text style={itemStyles.event}>{item.title}</Text>
        <Text>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
    )}
  )
}