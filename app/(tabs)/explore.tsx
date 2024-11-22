import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useRouter, useGlobalSearchParams } from 'expo-router';
import Header from '@/components/Header';
import InputBox from '@/components/InputBox';
import SubmitButton from '@/components/SubmitButton';

export default function HomeScreen() {
  const router = useRouter();
  const params = useGlobalSearchParams<{ id?: string }>();
  const [filmeId, setFilmeId] = useState<string | undefined>(params.id);
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

  useEffect(() => {
    if (params.id) {
      setFilmeId(params.id);
      const fetchFilme = async () => {
        try {
          const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/filmes/${params.id}`);
          if (response.ok) {
            const filmeDados = await response.json();
            setTitulo(filmeDados.titulo || '');
            setGenero(filmeDados.genero || '');
            setDuracao(filmeDados.duracao || '');
            setClassificacao(filmeDados.classificacao || '');
            setCapa(filmeDados.capa || '');
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchFilme();
    } else {
      setFilmeId(undefined);
      setTitulo('');
      setGenero('');
      setDuracao('');
      setClassificacao('');
      setCapa('');
    };
  }, [params.id]);

  const handleSubmit = async () => {
    const method = filmeId ? 'PUT' : 'POST';
    const url = filmeId ? `${process.env.EXPO_PUBLIC_API_URL}/filmes/${filmeId}` : `${process.env.EXPO_PUBLIC_API_URL}/filmes`
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ titulo, genero, duracao, classificacao, capa })
      });
      if (response.ok) {
        setFilmeId(undefined);
        setTitulo('');
        setGenero('');
        setDuracao('');
        setClassificacao('');
        setCapa('');
        router.replace('/(tabs)');
      }

    } catch (error) {
      console.error(error);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header
        titulo={params.id ? 'Edição' : 'Cadastro'}
        image={params.id ? require('@/assets/images/editarBanner.jpg') : require('@/assets/images/cadastroBanner.jpg')}
        path={'/(tabs)'}
      />
      <ScrollView contentContainerStyle={styles.scrollArea}>
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
          label={params.id ? 'Atualizar' : 'Cadastrar'}
          onSubmit={handleSubmit}
        />
      </ScrollView>
    </SafeAreaView>
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
    paddingHorizontal: 20,
  },
  scrollArea: {
    paddingTop: 20,
    paddingBottom: 20
  }

});