import React from 'react';
import * as dateFns from 'date-fns'
import { View, Text, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import {useServices} from '../../../src/services';

export const defaultEmptyListRenderer = (day) => {
  return (
  <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 250, fontFamily: 'Montreal-Book'}}>
  <Text style={{ fontFamily: 'Montreal-Medium', color: 'grey'}}>
    No Events  </Text></View> )
}



export const defaultItemRenderer = (dayEvents, selectedDate) => {
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
      color: '#000',
      alignItems: 'center',
      alignContent: 'center',
      fontFamily: 'RobotoCondensed-Regular',
      paddingLeft: 10,
    },
    event: {
      // paddingHorizontal: 5,
      // color: '#ccc',
      fontFamily: 'RobotoCondensed-Regular',
      fontSize: 18,
      // paddingLeft: 10,
    },
    timeBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    vlGreen: {
      borderLeftWidth: 4,
      borderRadius: 5,
      borderColor: '#04985A',
      height: 50,
      marginLeft: 15,
      marginTop: 2,
    },
    vlBlue: {
      borderLeftWidth: 4,
      borderRadius: 5,
      borderColor: '#2FA2B9',
      height: 50,
      marginLeft: 15,
      marginTop: 2,
    },
    vlBlueLight: {
      borderLeftWidth: 4,
      borderRadius: 5,
      borderColor: '#37BFDA',
      height: 50,
      marginLeft: 15,
      marginTop: 2,
    },
    vlBlueDark: {
      borderLeftWidth: 4,
      borderRadius: 5,
      borderColor: '#dd0606',
      height: 50,
      marginLeft: 15,
      marginTop: 2,
    },
  }
  const timeFormat = 'h:mm A'
  return dayEvents.items && dayEvents.items.map((item, i) => {
    const timeStart = dateFns.setMinutes(dateFns.setHours(selectedDate, item.timeStart.hour), item.timeStart.minute)
    const timeEnd = dateFns.setMinutes(dateFns.setHours(selectedDate, item.timeEnd.hour), item.timeEnd.minute)
    return (
    <TouchableOpacity key={i} onPress={item.itemClickHandler }>
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
        <View style={{display: 'flex', flexDirection: 'column'}}>
        <Text style={itemStyles.event}>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text style={{marginTop: -10}}>{item.address}</Text>
        </View>
        </View>
      </View>
    </TouchableOpacity>
    )}
  )
}



