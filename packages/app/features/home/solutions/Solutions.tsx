import { PressableChild } from 'app/components/PressableChild'
import { SectionTitle } from 'app/components/SectionTitle'
import { containerStyle, height, width } from 'app/constants/theme'
import { Text, useSx } from 'dripsy'
import { MotiView } from 'moti'
import { MotiPressable } from 'moti/interactions'
import { useMemo } from 'react'
import { View } from 'react-native'
import { SingleSolutions } from './SingleSolutions'
const solutionsContent = [
  {
    title: 'Mobile Advertising',
    icon: 'volume-control-phone',
    content:
      'The accumulated experience and expertise of our team, across numerous services and products, enables us to deliver industry-leading products and services that differentiate our partners from the competition.',
  },
  {
    title: 'Scalable Development',
    icon: 'connectdevelop',
    content:
      'Scaling apps and services can be challenging. It’s difficult to estimate demand prior to launch and you need a back-end that scales effectively as your business grows.',
  },
  {
    title: 'Reliable Solutions',
    icon: 'lightbulb-o',
    content:
      'VASFA serves companies around the world, helping them to better understand their customers, build superior products and services, find a sustainable path to growth and achieve cost leadership while maintaining a high-performance business.',
  },
]
export const Solutions = () => {
  const sx = useSx()
  const renderTitle = () => {
    return (
      <View
        style={sx({
          justifyContent: 'center',
          alignItems: 'center',
          mb: [0, 0, 5],
          mt: [40, 40, 0],
        })}
      >
        <Text sx={{ fontSize: 28 }}>SOLUTIONS</Text>
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
  const renderBody = () => {
    return (
      <View
        style={sx({
          minHeight: width * 0.1,
          flexDirection: ['column', 'column', 'row'],
          justifyContent: ['space-around'],
          alignItems: ['flex-start'],
        })}
      >
        {solutionsContent.map((ele, index) => (
          <SingleSolutions
            title={ele.title}
            content={ele.content}
            icon={{
              name: ele.icon,
              size: 24,
            }}
          />
        ))}
      </View>
    )
  }
  const renderFooter = () => {
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
        <PressableChild label="VIEW ALL" />
      </MotiPressable>
    )
  }
  return (
    <View
      style={sx({
        ...containerStyle,
      })}
    >
      <SectionTitle title="SOLUTIONS" />
      {renderBody()}
      {renderFooter()}
    </View>
  )
}
