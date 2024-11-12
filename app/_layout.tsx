import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Image } from 'expo-image';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  const uri = "https://pngimg.com/uploads/wikipedia/wikipedia_PNG10.png"

  if (!loaded) {
    return null;
  }

  return (
    <Image style={{height: 100, width: 100, borderColor: 'red', borderWidth: 2}} source={{ uri }}/>
  );
}
