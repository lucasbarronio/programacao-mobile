import React, { useState, useEffect } from 'react';
import { Button, FlatList, Image, ImageBackground, StyleSheet, Text, RefreshControl, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [DATA, setData] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.API_URL}/filmes`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  }

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.capa}
        source={require('@/assets/images/listaBanner.jpg')}>
        <View style={styles.containerCabecalho}>
          <Text style={styles.cabecalho}>Filmes</Text>
        </View>
      </ImageBackground>

      <View style={styles.cadastroRedirect}>
        <Button
          title='Cadastros'
          color={'#005671'}
        />
      </View>
      <View style={styles.containerPesquisa}>
        <TextInput
          inputMode='text'
          placeholder='Busque por um filme'
          placeholderTextColor={'#7c7c7c'}
          style={styles.inputEstilo}
        />

      </View>

      <FlatList
        style={styles.containerLista}
        data={DATA}
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
                <Text style={styles.subtextoItem}>{item.duracao} • {item.classificacao}</Text>
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text>Nenhum dado encontrado.</Text>}
        keyExtractor={item => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />

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
  },
  subtextoItem: {
    color: '#a9bcc2',
    fontSize: 16,
    fontWeight: '400',
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
    padding: 10,
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
    fontSize: 18,
    fontWeight: '500'
  },
  footerFilme: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});