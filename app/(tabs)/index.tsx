import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FlatList, Image, ImageBackground, StyleSheet, Text, RefreshControl, TextInput, View, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const [DATA, setData] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [filteredData, setFilteredData] = useState(DATA);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchData();
  }, [])

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

  const onRefresh = async () => {
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

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.capa}
        source={require('@/assets/images/listaBanner.jpg')}>
        <View style={styles.containerCabecalho}>
          <Text style={styles.cabecalho}>Filmes</Text>
        </View>
        <TouchableOpacity style={styles.botaoMenu}>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.containerPesquisa}>
        <TextInput
          inputMode='text'
          value={search}
          placeholder='Busque por um filme'
          placeholderTextColor={'#7c7c7c'}
          style={styles.inputEstilo}
          onChangeText={handleSearch}
        />

      </View>

      <FlatList
        style={styles.containerLista}
        data={filteredData}
        renderItem={({ item }) => (
          <View style={styles.itemLista}>
            <Image
              style={styles.previewFilme}
              source={item.capa ? { uri: item.capa } : require('@/assets/images/noImage.jpg')}
            />
            <View style={styles.dadosFilme}>
              <Text style={styles.cabecalhoItem}>{item.titulo}</Text>
              <View style={styles.footerFilme}>
                <Text style={styles.textoItem}>{item.genero}</Text>
                <View style={styles.iconTextContainer}>
                  <Ionicons name="time-outline" size={17} color="#a9bcc2" />
                  <Text style={styles.subtextoItem}>{item.duracao}min </Text>
                  <Ionicons name="ban-outline" size={16} color="#a9bcc2" />
                  <Text style={styles.subtextoItem}>{item.classificacao}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.textoItem}>Nenhum dado encontrado.</Text>}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.botaoRefresh} onPress={onRefresh}>
        <Ionicons name="refresh" size={24} color="white" />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
    justifyContent: 'flex-start'
  },
  capa: {
    width: '100%',
    height: 200,
  },
  cabecalho: {
    color: '#fff',
    fontSize: 60,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 1,
    letterSpacing: 5
  },
  containerCabecalho: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20
  },
  containerLista: {
    paddingHorizontal: 10,
    marginVertical: 20
  },
  cabecalhoItem: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 1
  },
  subtextoItem: {
    color: '#a9bcc2',
    fontSize: 16,
    fontWeight: '400',
    verticalAlign: 'middle'
  },
  inputEstilo: {
    height: 40,
    color: '#000',
    backgroundColor: '#d9d9d9',
    width: '100%',
    fontSize: 20,
    paddingLeft: 10
  },
  cadastroRedirect: {
    paddingHorizontal: 10,
    paddingTop: 15,
    paddingBottom: 0,
  },
  containerPesquisa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    paddingBottom: 0
  },
  itemLista: {
    backgroundColor: '#121212',
    flexDirection: 'row',
    marginBottom: 14,
    height: 90,
  },
  previewFilme: {
    width: 60,
    height: 90,
  },
  dadosFilme: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '85%',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  textoItem: {
    color: '#a9bcc2',
    fontSize: 20,
    fontWeight: '500',
    verticalAlign: 'middle'
  },
  footerFilme: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  botaoRefresh: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    width: 60,
    height: 60,
    backgroundColor: '#A96036',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
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