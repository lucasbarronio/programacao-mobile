import { useState } from 'react';
import { Button, FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

const DATA = [
  {
    capa: 'https://a.ltrbxd.com/resized/sm/upload/q9/3o/ng/om/obhM86qyv8RsE69XSMTtT9FdE0b-0-1000-0-1500-crop.jpg?v=1403a5e003', titulo: 'Vertigo', genero: 'Romance', duracao: '129 mins', classificacao: 'A14'
  },
  {
    capa: 'https://a.ltrbxd.com/resized/sm/upload/h6/yo/p7/1t/ran-0-1000-0-1500-crop.jpg?v=3cabb176dc', titulo: 'Ran', genero: 'História', duracao: '168 mins', classificacao: 'A14'
  },
  {
    capa: 'https://a.ltrbxd.com/resized/film-poster/5/1/4/4/5/51445-aliens-0-1000-0-1500-crop.jpg?v=6c62918bdd', titulo: 'Aliens', genero: 'Ficção Científica', duracao: '154 mins', classificacao: 'A14'
  },
  {
    capa: 'https://a.ltrbxd.com/resized/film-poster/7/8/4/3/2/8/784328-oppenheimer-0-1000-0-1500-crop.jpg?v=e3c6e7a32c', titulo: 'Oppenheimer', genero: 'História', duracao: '167 mins', classificacao: 'A14'
  },
  {
    capa: 'https://a.ltrbxd.com/resized/film-poster/5/1/4/0/7/51407-the-sixth-sense-0-1000-0-1500-crop.jpg?v=ab482dfeb6', titulo: 'O Sexto Sentido', genero: 'Terror', duracao: '173 mins', classificacao: 'A14'
  },
  {
    capa: 'https://a.ltrbxd.com/resized/sm/upload/5e/pw/vs/km/8CHJcVc5IGXS1sC5DyjeMwTDEQH-0-1000-0-1500-crop.jpg?v=ab64d75800', titulo: 'Fragmentado', genero: 'Thriller', duracao: '143 mins', classificacao: 'A14'
  },
  {
    capa: 'https://a.ltrbxd.com/resized/sm/upload/85/io/38/dz/vfzE3pjE5G7G7kcZWrA3fnbZo7V-0-1000-0-1500-crop.jpg?v=0d5de70f0d', titulo: 'Blade Runner', genero: 'Ficção Científica', duracao: '118 mins', classificacao: 'A14'
  },
  {
    capa: 'https://a.ltrbxd.com/resized/film-poster/8/0/0/8/5/8/800858-joker-folie-a-deux-0-1000-0-1500-crop.jpg?v=a4bf0389e2', titulo: 'Joker: Folie à Deux', genero: 'Drama', duracao: '138 mins', classificacao: 'A16'
  },
  {
    capa: 'https://a.ltrbxd.com/resized/sm/upload/5b/u9/av/il/ecoY7zJL6Ub3URP1oPhPfGflEjV-0-1000-0-1500-crop.jpg?v=8126850315', titulo: 'Psicopata Americano', genero: 'Thriller', duracao: '102 mins', classificacao: 'A18'
  },
  {
    capa: 'https://a.ltrbxd.com/resized/film-poster/4/2/6/4/0/6/426406-parasite-0-1000-0-1500-crop.jpg?v=8f5653f710', titulo: 'Parasita', genero: 'Drama', duracao: '133 mins', classificacao: 'A16'
  },
]

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const [filteredData, setfilteredData] = useState(DATA);

  const handleSearch = (text: string) => {
    setSearch(text);
    if (text) {
      const newData = DATA.filter(item => item.titulo.toLowerCase().includes(text.toLowerCase()))
      setfilteredData(newData);
    } else {
      setfilteredData(DATA);
    }
  };

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
              source={{ uri: item.capa }}
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
        keyExtractor={item => item.titulo}
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