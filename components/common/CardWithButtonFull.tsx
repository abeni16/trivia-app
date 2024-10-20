import { Dimensions, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import {FontAwesome} from '@expo/vector-icons';
import Button from './button';

const width = Dimensions.get('window').width;

interface CardWithButtonFullProps {
  title: string;
  iconName: string;
  color: string;
  onPress: () => void;
}


const CardWithButtonFull = ({ title, iconName, color,firstcolor,secondcolor,thirdcolor ,onPress,imagepath,imagealt }) => {
  return (
        <LinearGradient
          colors={[firstcolor, secondcolor, thirdcolor]} // Adjust gradient colors
          start={[0, 0]}
          end={[1, 1]}
          style={{padding: 6,alignSelf:'center', height: 132, maxWidth: width/1.01, borderRadius: 16, alignItems: 'center', justifyContent: 'space-around', width: '100%' , flexDirection:"row"}}
        >
            <View style={{width: '50%'}}>
                 <Text style={{color: '#EBF4F6', fontSize: 16, fontWeight: 'bold', opacity: 0.8}}  className="font-bold text-lg mb-4">{title}</Text>
                <TouchableOpacity onPress={onPress} style={{padding: 8, height: 32, marginTop: 12, borderRadius: 12, backgroundColor: 'white', width: '60%', }}>
                  <Text style={{color: '#6482AD', fontSize: 14, fontWeight: 'bold', alignSelf:'center'}}>Start Quiz</Text>
                </TouchableOpacity>
            </View>

          <View className="p-12">
            <Image source={imagepath} style={{width: width/3, height: width/3}} alt={imagealt}/>
          </View>
          {/*add a half cirle */}
          <View  style={{position: 'absolute', top: 4, left: 4, opacity: 0.5,  width: 24, height: 24, borderRadius: 100, backgroundColor: thirdcolor}}></View>
          <View  style={{position: 'absolute', top: 4, left: 4, opacity: 0.5,  width: 16, height: 16, borderRadius: 100, backgroundColor: secondcolor}}></View>
          <View  style={{position: 'absolute', top: 2, right: 2, opacity: 0.2,  width: 36, height: 36, borderRadius: 100, backgroundColor: firstcolor}}></View>
        </LinearGradient>
  )
}

export default CardWithButtonFull

