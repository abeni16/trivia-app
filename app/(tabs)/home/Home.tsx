import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardButton from '../../../components/common/CardButton'
import { LinearGradient } from 'expo-linear-gradient'
import CardWithButtonFull from '../../../components/common/CardWithButtonFull'
import CategoryButton from '../../../components/common/CategoryCard'

const index = () => {
  return (
    <LinearGradient 
      colors={['#FFFFFF', '#FFF7FC', '#EBF4F6']} // Adjust gradient colors
      start={[0, 0]}
      end={[1, 1]}
      style={{ flex: 1 , padding: 12}}
    >
      <View className='flex-row justify-around'>
        <CardButton title='Create game' iconName= 'plus-square' color='purple' onPress={() => {}} firstcolor='#8B93FF' secondcolor='#5755FE' thirdcolor='#5755F5' />
        <CardButton title='Join game' iconName='search-plus' color='orange' onPress={() => {}} firstcolor='#FFBD73' secondcolor='#FF9D3D' thirdcolor='#FF9D34' />
        <CardButton title='Achievements' iconName='trophy' color='blue' onPress={() => {}} firstcolor='#72BF78' secondcolor='#347928' thirdcolor='#347924' />
      </View>
      <View className='mt-4'>
        <CardWithButtonFull title='Find General knowledge trivia' imagepath={require('../../../assets/wheelbg.png')} imagealt={'#'} iconName='play-circle' color='purple' onPress={() => {}}  firstcolor='#8B93FF' secondcolor='#5755FE' thirdcolor='#5755F5' />
      </View>
      <Text className='ml-1 mt-4 text-lg  text-purple-900 font-bold text-start'>Featured Categories</Text>
      <View className='mt-4 flex-row flex-wrap justify-around gap-4 '>
        <CategoryButton title='Sports' iconName='futbol-o' color='purple' onPress={() => {}}  firstcolor='#FFBD73' secondcolor='#FF9D3D' thirdcolor='#FF9D34'  />
        <CategoryButton title='History' iconName='history' color='purple' onPress={() => {}}  firstcolor='#8B93FF' secondcolor='#5755FE' thirdcolor='#5755F5'  />
        <CategoryButton title='Science' iconName='flask' color='purple' onPress={() => {}}  firstcolor='#72BF78' secondcolor='#347928' thirdcolor='#347924'  />
        <CategoryButton title='Geography' iconName='globe' color='purple' onPress={() => {}}  firstcolor='#FFBD73' secondcolor='#FF9D3D' thirdcolor='#FF9D34'  />
      </View>
      
      <View className='mt-8'>
        <CardWithButtonFull title='Play Quiz together  with friends' imagepath={require('../../../assets/qbg.png')} imagealt={'#'} iconName='play-circle' color='purple' onPress={() => {}}  firstcolor='#347924' secondcolor='#347928' thirdcolor='#72BF78'  />
      </View>
    </LinearGradient>
  )
}

export default index

const styles = StyleSheet.create({})