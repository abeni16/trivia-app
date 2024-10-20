import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

interface CategoryButtonProps {
  title: string;
  iconName: string;
  color: string;
  onPress: () => void;
}
const width = Dimensions.get('window').width;

const CategoryButton: React.FC<CategoryButtonProps> = ({ title, iconName, color,firstcolor,secondcolor,thirdcolor ,onPress }) => {
  return (
    <TouchableOpacity style={{ borderRadius: 12, borderWidth: 1, borderColor: firstcolor, elevation: 2}} onPress={onPress} >
      {/* Gradient Background */}
      <LinearGradient
        colors={['#FEF9F2', "#F7F9F2","#F5EFFF" ]} // Adjust gradient colors
        start={[0, 0]}
        end={[1, 1]}
        style={{padding: 6, borderRadius:12, height: 48, alignItems: 'center', justifyContent: 'space-around', flexDirection:"row", width: width / 2.3 }}
      >
        <View className="p-12">
          <FontAwesome style={{ shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }} name={iconName} size={24}  color={firstcolor} />
        </View>
        <Text  style= {{ color: "#6482AD", fontSize: 16, fontWeight: 'bold',}} >{title}</Text>
        {/*add a half cirle */}
        <View  style={{position: 'absolute', top: 8, left: 8,   width: 8, height: 8, borderRadius: 100, backgroundColor: "#F5EFFF"}}></View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CategoryButton;
