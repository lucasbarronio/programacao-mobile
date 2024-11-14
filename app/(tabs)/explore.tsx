import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '@/components/Header';
import InputBox from '@/components/InputBox';
import SubmitButton from '@/components/SubmitButton';

export default function HomeScreen() {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [duracao, setDuracao] = useState('');
  const [classificacao, setClassificacao] = useState('');
  const [capa, setCapa] = useState('');

  const fetchCapa = async () => {
    if (titulo.trim() === '') return;
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.EXPO_PUBLIC_OMDB_KEY}&t=${titulo}`.replaceAll(/\s/g, '+'));
      const json = await response.json();
      setCapa(json.Poster);
    } catch (error) {
      console.error(error);
    }
  };

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
            "capa": capa
          })
        }
      )
      setTitulo('');
      setGenero('');
      setDuracao('');
      setClassificacao('');
      setCapa('');
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <View style={styles.container}>
      <Header
        titulo='Cadastro'
        image={require('@/assets/images/cadastroBanner.jpg')}
        path={'/(tabs)'}
      />

      <View style={styles.containerMain}>
        <InputBox
          label='Título'
          valor={titulo}
          onText={setTitulo}
          handleCapa={fetchCapa}
        />
        <InputBox
          label='Gênero'
          valor={genero}
          onText={setGenero}
        />
        <InputBox
          label='Duração'
          valor={duracao}
          onText={setDuracao}
        />
        <InputBox
          label='Classificação'
          valor={classificacao}
          onText={setClassificacao}
        />
      </View>
      <SubmitButton
        label='Cadastrar'
        onSubmit={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
    justifyContent: 'flex-start',
  },
  containerMain: {
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20
  }

});