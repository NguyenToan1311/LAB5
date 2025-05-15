// app/home.tsx
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { FAB, ActivityIndicator } from 'react-native-paper';
import { fetchServices } from '../src/services/api';
import { router } from 'expo-router';

export default function Home() {
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchServices();
        setList(res.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <ActivityIndicator style={styles.loader} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={i => i.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item} onPress={() => router.push({ pathname: '/service-detail', params: { id: item.id } })}>
            {item.name} — ${item.price}
          </Text>
        )}
      />
      <FAB icon="plus" style={styles.fab} onPress={() => router.push('/add-service')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  loader:    { flex: 1, justifyContent: 'center' },
  item:      { padding: 12, borderBottomWidth: 1, borderColor: '#ddd' },
  fab:       { position: 'absolute', right: 16, bottom: 16 },
});
