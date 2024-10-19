import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,  // Hide the default tab label
        tabBarStyle :{
          height: 60,
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 0,
          shadowColor: 'transparent',
          shadowOpacity: 0,
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          },
          paddingHorizontal: 0,
          paddingVertical: 0,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#000',
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
          height: 0,
          display: 'none',
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown:false,
          tabBarIcon: ({ focused }) => (
            <View  className={`flex-row px-4 py-2 rounded-full ${focused ? 'bg-purple-800' : ''} items-center`}>
              <FontAwesome name='home' size={24} color={focused ? 'white' : 'gray'} />
              {focused && (
                <Text className={`ml-2 text-white font-bold ${focused ? 'text-white' : ''}`}>Home</Text>
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Leaderboard"
        options={{
          title: 'Leaderboard',
          tabBarIcon: ({ focused }) => (
            <View  className={`flex-row px-4 py-2 rounded-full ${focused ? 'bg-purple-800' : ''} items-center`}>
              <FontAwesome name='trophy' size={24} color={focused ? 'white' : 'gray'} />
              {focused && (
                <Text className={`ml-2  text-white font-bold ${focused ? 'text-white' : ''}`}>Board</Text>
              )}  
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <View className={`flex-row px-4 py-2 rounded-full ${focused ? 'bg-purple-800' : ''} items-center`}>
              <FontAwesome name="user" size={24} color={focused ? 'white' : 'gray'} />
              {focused && (
                <Text className={`ml-2 text-white font-bold ${focused ? 'text-white' : ''}`}>Profile</Text>
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
