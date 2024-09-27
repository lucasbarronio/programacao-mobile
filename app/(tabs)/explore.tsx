import { Button, FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.capa}
        source={require('@/assets/images/cadastroBanner.jpg')}>
        <View style={{ flex: 1, justifyContent: 'center', marginLeft: 20 }}><Text style={styles.cabecalho}>Cadastro</Text></View>
      </ImageBackground>

      <View style={{alignItems: 'center', paddingTop: 30}}>
        <View style={{ paddingBottom: 10}}>
          <Text style={styles.inputTitulos}>Título</Text>
          <TextInput
            inputMode='text'
            placeholder='Digite um item para adicionar a lista'
            placeholderTextColor={'#7c7c7c'}
            style={styles.inputEstilo}
          />
        </View>
        <View style={{ paddingBottom: 10}}>
        <Text style={styles.inputTitulos}>Genero</Text>
          <TextInput
            inputMode='text'
            placeholder='Digite um item para adicionar a lista'
            placeholderTextColor={'#7c7c7c'}
            style={styles.inputEstilo}
          />
        </View>
        <View style={{ paddingBottom: 10}}>
        <Text style={styles.inputTitulos}>Duracao</Text>
          <TextInput
            inputMode='text'
            placeholder='Digite um item para adicionar a lista'
            placeholderTextColor={'#7c7c7c'}
            style={styles.inputEstilo}
          />
        </View>
        <View style={{ paddingBottom: 30}}>
        <Text style={styles.inputTitulos}>Classificacao</Text>
          <TextInput
            inputMode='text'
            placeholder='Digite um item para adicionar a lista'
            placeholderTextColor={'#7c7c7c'}
            style={styles.inputEstilo}
          />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Button
          title='Cadastrar'
          color={'#35bf2e'}
        />
      </View>
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
    fontSize: 15
  },
  inputTitulos: {
    fontSize: 15,
    color: '#FFF',
    paddingBottom: 1,
    paddingLeft: 3
  },
  inputEstilo: {
    height: 40,
    padding: 10,
    color: '#000',
    backgroundColor: '#d9d9d9',
    width: 380
  },
  
});