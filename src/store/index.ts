import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'services';

export async function saveServices(list: any[]) {
  await AsyncStorage.setItem(KEY, JSON.stringify(list));
}

export async function getServices(): Promise<any[]> {
  const json = await AsyncStorage.getItem(KEY);
  return json ? JSON.parse(json) : [];
}
