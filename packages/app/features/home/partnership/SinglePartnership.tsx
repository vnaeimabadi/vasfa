import { FontAwesome } from '@expo/vector-icons'
import { Text, View } from 'dripsy'

export const SinglePartnership = ({
  title,
  count,
  icon,
}: {
  title: string
  count: number
  icon: any
}) => {
  return (
    <View
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        my: [20, 20, 0],
      }}
    >
      <View
        sx={{
          width: 50,
          height: 50,
          justifyContent:'center',
          alignItems:'center'
        }}
        >
        <FontAwesome {...icon} color="white" />
      </View>
      <Text
        sx={{
          color: 'white',
          my: 20,
          fontSize: 12,
          fontWeight: 'bold',
        }}
      >
        {title}
      </Text>
      <Text sx={{ color: 'white', fontSize: 32, fontWeight: 'bold' }}>
        {count}
      </Text>
    </View>
  )
}
