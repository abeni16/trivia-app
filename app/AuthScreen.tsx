import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import { FontAwesome } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import * as AuthSession from 'expo-auth-session';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090/api/'); // Replace with your PocketBase URL

const AuthScreen = () => {
  const introOpacity = useSharedValue(0); // For intro text animation

  // Triggering animation when the component is mounted
  useEffect(() => {
    introOpacity.value = withTiming(1, {
      duration: 2000,
      easing: Easing.inOut(Easing.ease),
    });
  }, []);

  // Animated style for the intro text
  const animatedIntroStyle = useAnimatedStyle(() => {
    return {
      opacity: introOpacity.value,
    };
  });

  // Google Authentication Handler
  const handleGoogleAuth = async () => {
    const redirectUri = AuthSession.makeRedirectUri({ useProxy: true });

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=profile%20email`;

    const result = await AuthSession.startAsync({ authUrl });
    
    if (result.type === 'success') {
      // Exchange the token with PocketBase
      const token = result.params.access_token;
      try {
        await pb.collection('users').authWithOAuth2('google', token);
        alert('Google login successful!');
      } catch (error) {
        console.error('Error logging in with Google:', error);
      }
    }
  };

  // GitHub Authentication Handler
  const handleGithubAuth = async () => {
    const redirectUri = AuthSession.makeRedirectUri({ useProxy: true });

    const authUrl = `https://github.com/login/oauth/authorize?client_id=YOUR_GITHUB_CLIENT_ID&scope=user&redirect_uri=${encodeURIComponent(redirectUri)}`;

    const result = await AuthSession.startAsync({ authUrl });

    if (result.type === 'success') {
      // Exchange the token with PocketBase
      const token = result.params.code; // GitHub uses code in the response
      try {
        await pb.collection('users').authWithOAuth2('github', token);
        alert('GitHub login successful!');
      } catch (error) {
        console.error('Error logging in with GitHub:', error);
      }
    }
  };

  return (
    <View className='flex-1 justify-center items-center p-4'>
      {/* Lottie Animation */}
      <LottieView
        source={require('../assets/Animation.json')} // Add your own Lottie animation here
        autoPlay
        loop
        style={styles.lottieAnimation}
      />

      <Animated.View style={[animatedIntroStyle]}>
        <Text style={styles.introText}>
          Create, Share and play Trivia App whenever and wherever you are.
        </Text>
      </Animated.View>

      {/* Google Auth Button */}
      <TouchableOpacity
        className='bg-white p-4 rounded-full w-full mt-4 flex-row items-center'
        onPress={handleGoogleAuth}
        style={{ elevation: 2 }}
      >
        <FontAwesome name='google' size={32} color='black' />
        <Text className='text-black text-xl font-semibold flex-1 text-center'>
          Continue with Google
        </Text>
      </TouchableOpacity>

      {/* GitHub Auth Button */}
      <TouchableOpacity
        className='bg-gray-900 p-4 rounded-full w-full mt-4 flex-row items-center'
        onPress={handleGithubAuth}
        style={{ elevation: 2 }}
      >
        <FontAwesome name='github' size={32} color='#ddd' />
        <Text className='text-gray-200 text-xl font-semibold flex-1 text-center'>
          Continue with GitHub
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  introText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#605678',
    marginBottom: 20,
    textAlign: 'center',
  },
  lottieAnimation: {
    width: 300,
    height: 300,
    marginBottom: 30,
  },
});
