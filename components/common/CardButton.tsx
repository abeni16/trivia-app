import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

interface CardButtonProps {
  title: string;
  iconName: string;
  color: string;
  onPress: () => void;
}
const width = Dimensions.get('window').width;

const CardButton: React.FC<CardButtonProps> = ({ title, iconName, color,firstcolor,secondcolor,thirdcolor ,onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} >
      {/* Gradient Background */}
      <LinearGradient
        colors={[firstcolor, secondcolor, thirdcolor]} // Adjust gradient colors
        start={[0, 0]}
        end={[1, 1]}
        style={{padding: 6, height: 120, borderRadius: 16, alignItems: 'center', justifyContent: 'center', width: width / 3.5 }}
      >
        <View className="p-12">
          <FontAwesome style={{opacity: 0.8}} name={iconName} size={48}  color={"white"} />
        </View>
        <Text  className="font-bold text-white text-sm mt-2">{title}</Text>
        {/*add a half cirle */}
        <View  style={{position: 'absolute', top: 8, left: 8, opacity: 0.8,  width: 20, height: 20, borderRadius: 100, backgroundColor: firstcolor}}></View>
        <View  style={{position: 'absolute', top: 2, right: 2, opacity: 0.2,  width: 24, height: 24, borderRadius: 100, backgroundColor: firstcolor}}></View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CardButton;
