import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  calendarWrapper: {
  },
  calendarWrapperAgenda: {
    flex: 1,
  },
  calendar: {
    backgroundColor: '',
    borderBottomColor: '#ccc',
    zIndex: 1,
    // marginBottom: -50,
  },
  headerTitle: {
    textAlign: 'center',
    flex: 1,
    fontFamily: 'Montreal-Bold',
    fontWeight: 'bold',
    color: '#2FA2B9',
    fontSize: 16,
    paddingBottom: 20,
  },
  headerNavigation: {
    paddingHorizontal: 20
  },
  weekDays: {
    paddingVertical: 5,
    flexDirection: 'row'
  },
  weekDay: {
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Montreal-Bold',
    flex: 1
  },
  week: {
    flexDirection: 'row',
    paddingBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
  },
  day: {
    flex: 1,
    position: 'relative',
    paddingVertical: 7,
    borderRadius: 100,
    height: 35,
  },
  dayTextWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: '#2FA2B9',
    fontSize: 16
  },
  dayDisabled: {
    flex: 1,
    paddingVertical: 7,
    borderRadius: 20,
  },
  dayDisabledText: {
    textAlign: 'center',
    color: '#ccc'
  },
  daySelected: {
    flex: 1,
    // paddingVertical: 7,
    borderRadius: 50,
    backgroundColor: 'rgba(47,162,185,0.2)',
  },
  daySelectedText: {
    textAlign: 'center',
  },
  expander: {
    backgroundColor: '#2FA2B9',
    width: 50,
    height: 4,
    borderRadius: 20,
    margin: 5
  },
  expanderAndroid: {
    borderColor: 'skyblue', 
    width: 40,
    height: 17,
  },
  expanderAndroidInner: {
    height: 1.5,
    marginVertical: 4,
    marginHorizontal: 6,
    backgroundColor: 'skyblue'
  },
  expanderWrapper: {
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayItem: {
    position: 'absolute',
    bottom: -4,
    width: 4,
    height: 4,
    borderRadius: 20,
    backgroundColor: '#fff'
  },
  agendaWrapper: {
    backgroundColor: '#fff'
  }
})
