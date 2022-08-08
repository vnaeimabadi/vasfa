import { Text, useSx } from 'dripsy'
import { View } from 'react-native'

export const SectionTitle = ({ title }: { title: string }) => {
  const sx = useSx()
  return (
    <View
      style={sx({
        justifyContent: 'center',
        alignItems: 'center',
        mb: [0, 0, 5],
        mt: [40, 40, 0],
      })}
    >
      <Text sx={{ fontSize: 28 }}>{title}</Text>
      <View
        style={sx({
          width: 50,
          height: 1,
          backgroundColor: 'red',
          mt: 2,
        })}
      />
    </View>
  )
}
