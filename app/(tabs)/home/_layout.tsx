import { Stack } from 'expo-router';
import { Text, View, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';

export default function Layout() {
  // Replace with the actual user name and score logic
  const [name] = useState('Abenezer');
  const [score] = useState(120); // This can be dynamic based on app logic

  return (
    <Stack
      screenOptions={{
        headerTitle: '',
        headerTintColor: 'purple',
        headerShadowVisible: false,
        // Header Left - Profile Icon and Hello with Name
        headerLeft: () => (
          <View className="flex-row items-center">
            {/* Profile Icon */}
            <FontAwesome name='user-circle-o' size={32} color="purple" />
            {/* Hello and User Name */}
            <View>
            <Text className="ml-2 text-xs text-gray-500">Hello!</Text>
            <Text className="ml-2 text-purple font-semibold">{name}</Text>
            </View>
          </View>
        ),
        // Header Right - Score Display
        headerRight: () => (
          <View className="flex-row align-middle justify-between bg-orange-600 p-2 rounded-xl items-center">
            {/* Score Icon */}
            <FontAwesome name='diamond' size={12} color="white" />
            {/* Score Text */}
            <Text className="mx-1 text-white font-bold">{score} pts</Text>
            <FontAwesome name='plus-circle' size={16} color="white" />
          </View>
        ),
      }}
    >
      {/* Optionally configure static options outside the route. */}
      <Stack.Screen
        name="Home"
        options={{
          title: 'Trivia App', // Main title of the app
        }}
      />
    </Stack>
  );
}
