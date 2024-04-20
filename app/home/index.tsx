import { View, Text } from 'react-native'
import React from 'react'
import UserGreetContainer from 'containers/user-greet-container'

export default function Page() {
  return (
    <View className='flex-1 p-4'>
      <UserGreetContainer/>
    </View>
  )
}