import { height, width } from 'app/constants/theme'
import { Text, View } from 'dripsy'
import { FontAwesome } from '@expo/vector-icons'

export const SingleSolutions = ({
  key,
  title,
  content,
  icon,
}: {
  key: any
  title: string
  content: string
  icon: any
}) => {
  return (
    <View
      key={key}
      sx={{
        minHeight: [0, 0, width * 0.1],
        width: [width * 0.9, width * 0.9, width * 0.33],
        justifyContent: ['flex-start'],
        alignItems: ['center'],
        px: [0, 50, 50],
        mt: [40, 20, 0],
      }}
    >
      <View
        sx={{
          width: 70,
          height: 70,
          borderColor: '#d65050',
          borderWidth: 1,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          mt: 10,
          mb: 20,
        }}
      >
        <FontAwesome {...icon} color="#d65050" />
      </View>
      <Text sx={{ fontSize: 24, mb: 10 }}>{title}</Text>
      <Text sx={{ fontSize: 16 }}>{content}</Text>
    </View>
  )
}
