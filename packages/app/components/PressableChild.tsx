import { useSx } from 'dripsy'
import { MotiImage, MotiText, MotiView, motify } from 'moti'
import { useMotiPressable } from 'moti/interactions'
import Ionicons from '@expo/vector-icons/Ionicons'
const MotifiedIonicons = motify(Ionicons)()
export const PressableChild = ({
  key,
  textStyle,
  label,
  primeryColor = 'white',
  secondaryColor = '#d65050',
  icon,
}: any) => {
  const sx = useSx()
  const state = useMotiPressable(({ hovered, pressed }): any => {
    'worklet'

    return {
      color: hovered || pressed ? secondaryColor : primeryColor,
    }
  }, [])
  return (
    <MotiView
      key={key}
      state={state}
      transition={{ type: 'timing', duration: 200 }}
    >
      {!Boolean(icon) && (
        <MotiText
          state={state}
          style={sx({ fontSize: 16, cursor: 'pointer', ...textStyle })}
        >
          {label}
        </MotiText>
      )}
      {Boolean(icon) && <MotifiedIonicons {...icon} state={state} />}
    </MotiView>
  )
}
