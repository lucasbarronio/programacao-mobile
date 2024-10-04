import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.capa}
        source={require('@/assets/images/cadastroBanner.jpg')}>
        <View style={styles.containerCabecalho}>
          <Text style={styles.cabecalho}>Cadastro</Text>
        </View>
      </ImageBackground >

      <View style={styles.containerMain}>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Título</Text>
          <TextInput
            inputMode='text'
            style={styles.inputEstilo}
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Gênero</Text>
          <TextInput
            inputMode='text'
            style={styles.inputEstilo}
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Duração</Text>
          <TextInput
            inputMode='text'
            style={styles.inputEstilo}
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Classificação</Text>
          <TextInput
            inputMode='text'
            style={styles.inputEstilo}
          />
        </View>
      </View>
      <View style={styles.cadastrarBtn}>
        <Button
          title='Cadastrar'
          color={'#005671'}
        />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
    justifyContent: 'flex-start',
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
  containerMain: {
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  textoLista: {
    color: '#FFF',
    fontSize: 15,
  },
  inputLabel: {
    fontSize: 20,
    color: '#FFF',
    paddingBottom: 1,
    paddingLeft: 3,
    fontWeight: 'bold'
  },
  inputEstilo: {
    height: 40,
    padding: 5,
    color: '#000',
    backgroundColor: '#d9d9d9',
    fontSize: 20
  },
  inputBox: {
    paddingBottom: 30,
    width: '100%'
  },
  containerCabecalho: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
  },
  cadastrarBtn: {
    paddingHorizontal:10,
    paddingTop: 180
  }

});