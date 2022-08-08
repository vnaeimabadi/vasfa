import { Dimensions } from 'react-native'

export const height = Dimensions.get('window').height
export const width = Dimensions.get('window').width

export const containerStyle = {
  // minHeight: [height - 86, height - 86, '88vh'],
  minHeight: [height - 86, height - 86, '92vh'],
  backgroundColor: 'white',
  alignItems: ['center'],
  justifyContent: ['center'],
}
