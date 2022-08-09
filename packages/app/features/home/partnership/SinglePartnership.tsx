import { FontAwesome } from '@expo/vector-icons'
import { CountSetInterval } from 'app/components/CountSetInterval'
import { Text, View } from 'dripsy'

export const SinglePartnership = ({
  key,
  title,
  count,
  icon,
  animateNumber,
}: {
  key: any
  title: string
  count: number
  icon: any
  animateNumber: boolean
}) => {
  return (
    <View
      key={key}
      sx={{
        minWidth:110,
        justifyContent: 'center',
        alignItems: 'center',
        my: [20, 20, 0],
      }}
    >
      <View
        sx={{
          width: 50,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
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
        {Boolean(animateNumber) && <CountSetInterval label={''} number={count} duration={2}/>}
        {/* <CountSetInterval label={''} number={count} duration={2}/> */}
      </Text>
    </View>
  )
}
