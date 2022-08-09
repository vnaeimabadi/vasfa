import { Children } from 'react'
import { View } from 'react-native'
import * as React from 'react'

export interface LayoutProps {
  children: React.ReactNode
}
export const Anchorable = ({ children, layoutEvents }: any) => {
  return (
    <View
      onLayout={(event) => {
        const layout = event.nativeEvent.layout
        layoutEvents(layout)
        // console.log('width:', layout.width)
        // console.log('x:', layout.x)
        // console.log('y:', layout.y)
      }}
    >
      {children}
    </View>
  )
}
