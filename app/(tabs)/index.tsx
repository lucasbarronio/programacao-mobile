import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import RefreshButton from '@/components/RefreshButton';
import FilmeItem from '@/components/FilmeItem';
import SearchInput from '@/components/SearchInput';
import Header from '@/components/Header';
import { useFocusEffect } from '@react-navigation/native';

export default function HomeScreen() {
  const [DATA, setData] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [filteredData, setFilteredData] = useState(DATA);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchData();
  }, [useFocusEffect(React.useCallback(() => {
    fetchData();
    console.log('fetching')
  }, []))])

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/filmes`);
      const json = await response.json();
      setData(json);
      setFilteredData(json);
    } catch (error) {
      console.error(error);
    }
  }

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  }

  const handleSearch = (text: string) => {
    setSearch(text);
    filterData(text);
  }

  const filterData = (text: string) => {
    if (text) {
      const newData = DATA.filter(item =>
        item.titulo.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(newData);
    } else {
      setFilteredData(DATA);
    }
  }

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/filmes/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        await handleRefresh();
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <Header
        titulo='Filmes'
        image={require('@/assets/images/listaBanner.jpg')}
        path={'/(tabs)/explore'}
      />

      <SearchInput
        onSearch={handleSearch}
        value={search}
      />

      <FlatList
        style={styles.containerLista}
        data={filteredData}
        renderItem={({ item }) => (
          <FilmeItem
            id={item.id}
            titulo={item.titulo}
            capa={item.capa}
            genero={item.genero}
            duracao={item.duracao}
            classificacao={item.classificacao}
            onDelete={handleDelete}
          />
        )}
        ListEmptyComponent={<Text>Nenhum dado encontrado.</Text>}
        keyExtractor={item => item.id}
      />
      <RefreshButton onRefresh={handleRefresh} />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
    justifyContent: 'flex-start',
  },
  containerLista: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  botaoMenu: {
    position: 'absolute',
    right: 20,
    top: 50,
    width: 60,
    height: 60,
    backgroundColor: '#A96036',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});