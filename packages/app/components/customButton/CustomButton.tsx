import { useSx } from 'dripsy'
import { MotiPressable } from 'moti/interactions'
import { PressableChild } from '../PressableChild'

export const CustomButton = ({
  title,
  containerStyle,
}: {
  title: string
  containerStyle?: any
}) => {
  const sx = useSx()
  return (
    <MotiPressable
      style={sx({
        width: 137,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        mt: 4,
        mb: [20, 20, 0],
        ...containerStyle
      })}
      animate={({ hovered, pressed }) => {
        'worklet'

        return {
          backgroundColor: hovered || pressed ? 'white' : '#d65050',
          borderColor: hovered || pressed ? '#d65050' : 'white',
          borderWidth: 1,
        }
      }}
      transition={({ hovered, pressed }) => {
        'worklet'

        return {
          delay: hovered || pressed ? 0 : 100,
        }
      }}
    >
      <PressableChild label={title} />
    </MotiPressable>
  )
}
