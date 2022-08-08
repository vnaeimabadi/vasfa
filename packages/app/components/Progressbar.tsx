import { Text, View } from 'dripsy'
import { MotiView } from 'moti'

export const Progressbar = ({
  label,
  percentage,
}: {
  label: string
  percentage: number
}) => {
  const pers = `-${100 - percentage}%`
  return (
    <View>
      <View sx={{ justifyContent: ['space-between'], flexDirection: ['row'] }}>
        <Text>{label}</Text>
        <Text>{percentage}%</Text>
      </View>
      <MotiView
        from={{ translateX: '-100%' }}
        animate={{ translateX: pers }}
        transition={{ type: 'timing', duration: 2000, delay: 2000 }}
        style={{
          height: 10,
          marginTop: 10,
          backgroundColor: '#d65050',
          overflow: 'hidden',
        }}
      />
    </View>
  )
}
