import { Button, FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

const DATA = [
  {
    titulo: 'Vertigo', genero: 'Romance', duracao: '129mins', classificacao: 'A14'
  },
  {
    titulo: 'Ran', genero: 'História', duracao: '168mins', classificacao: 'A14'
  },
  {
    titulo: 'Aliens', genero: 'Ficção Científica', duracao: '154mins', classificacao: 'A14'
  },
  {
    titulo: 'Oppenheimer', genero: 'História', duracao: '167mins', classificacao: 'A14'
  },
  {
    titulo: 'O Sexto Sentido', genero: 'Terror', duracao: '173mins', classificacao: 'A14'
  },
  {
    titulo: 'Fragmentado', genero: 'Thriller', duracao: '143mins', classificacao: 'A14'
  },
]

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.capa}
        source={require('@/assets/images/listaBanner.jpg')}>
        <View style={{ flex: 1, justifyContent: 'center', marginLeft: 20 }}><Text style={styles.cabecalho}>Filmes</Text></View>
      </ImageBackground>

      <View style={{padding: 20, paddingBottom: 0}}>
        <Button
          title='Cadastrar'
          color={'#2177e8'}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, paddingBottom: 0}}>
        <TextInput
          inputMode='text'
          placeholder='Digite um item para adicionar a lista'
          placeholderTextColor={'#7c7c7c'}
          style={styles.inputEstilo}
        />
        <Button
          title='Buscar'
          color={'#35bf2e'}
        />
      </View>

      <FlatList
        style={styles.containerLista}
        data={DATA}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.textoLista}>• {item.titulo} - {item.genero} - {item.duracao} - {item.classificacao}</Text>
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
    backgroundColor: '#3c3c3b',
    justifyContent: 'flex-start',
    marginTop: 40
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
    alignItems: 'center'
  },
  containerLista: {
    padding: 20
  },
  textoLista: {
    color: '#FFF',
    fontSize: 20,
    paddingBottom: 10
  },
  inputEstilo: {
    height: 40,
    color: '#000',
    backgroundColor: '#d9d9d9',
    width: '80%'
  }
});