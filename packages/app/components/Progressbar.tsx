import { Text, View } from 'dripsy'
import { MotiText, MotiView } from 'moti'
import { CountSetInterval } from './CountSetInterval'

export const Progressbar = ({
  label,
  percentage,
  activeAnimateProgressbar,
}: {
  label: string
  percentage: number
  activeAnimateProgressbar: boolean
}) => {
  const pers = `-${100 - percentage}%`
  return (
    <View>
      <View sx={{ justifyContent: ['space-between'], flexDirection: ['row'] }}>
        <Text>{label}</Text>
        {!activeAnimateProgressbar && <Text>0%</Text>}
        {activeAnimateProgressbar && (
          <CountSetInterval label={'%'} number={percentage} duration={2} />
        )}
      </View>
      {activeAnimateProgressbar && (
        <MotiView
          from={{ translateX: '-100%' }}
          animate={{ translateX: pers }}
          transition={{ type: 'timing', duration: 2000, delay: 0 }}
          style={{
            height: 10,
            marginTop: 10,
            backgroundColor: '#d65050',
            overflow: 'hidden',
          }}
        />
      )}
    </View>
  )
}
