import { width } from 'app/constants/theme'
import { FontAwesome } from '@expo/vector-icons'
import { Text, View } from 'dripsy'

export const SingleService = ({
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
        justifyContent: ['flex-start'],
        alignItems: ['center', 'center', 'flex-start'],
        flexDirection: ['column', 'column', 'row'],
        mt: [40, 20, 10],
        mb: 40,
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
          mr: 20,
          mb: [20, 20, 0],
        }}
      >
        <FontAwesome {...icon} color="#d65050" />
      </View>

      <View sx={{ flex: 1 }}>
        <Text
          sx={{
            fontSize: 16,
            mb: 10,
            textAlign: ['center', 'center', 'start'],
          }}
        >
          {title}
        </Text>
        <Text sx={{ fontSize: 16, color: '#474299', lineHeight: 25 }}>
          {content}
        </Text>
      </View>
    </View>
  )
}
