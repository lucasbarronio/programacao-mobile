import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [duracao, setDuracao] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const handleSubmit = async () => {
    try {
      await fetch(`${process.env.EXPO_PUBLIC_API_URL}/filmes`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "titulo": titulo,
            "genero": genero,
            "duracao": duracao,
            "classificacao": classificacao,
          })
        }
      )
      setTitulo('');
      setGenero('');
      setDuracao('');
      setClassificacao('');
    } catch (error) {
      console.error(error);
    }
  }
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
            value={titulo}
            onChangeText={setTitulo}
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Gênero</Text>
          <TextInput
            inputMode='text'
            style={styles.inputEstilo}
            value={genero}
            onChangeText={setGenero}
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Duração</Text>
          <TextInput
            inputMode='text'
            style={styles.inputEstilo}
            value={duracao}
            onChangeText={setDuracao}
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Classificação</Text>
          <TextInput
            inputMode='text'
            style={styles.inputEstilo}
            value={classificacao}
            onChangeText={setClassificacao}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.cadastrarBtn}
        onPress={handleSubmit}>
        <Text style={styles.cadastrarText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
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
    letterSpacing: 5
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
    fontWeight: 'bold',
    letterSpacing: 2
  },
  inputEstilo: {
    height: 40,
    padding: 5,
    color: '#000',
    backgroundColor: '#d9d9d9',
    fontSize: 20,
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
    backgroundColor: '#2d6d7c',
    padding: 10,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  cadastrarText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 5
  }

});