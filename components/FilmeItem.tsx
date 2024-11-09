import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

type FilmeItemProps = {
    id: string,
    titulo: string,
    capa: string,
    genero: string,
    duracao: string,
    classificacao: string,
    onDelete: (id: string) => void;
}

const FilmeItem: React.FC<FilmeItemProps> = ({ id, titulo, capa, genero, duracao, classificacao, onDelete }) => {
    return (
        <View style={styles.itemLista}>
            <Image
                style={styles.previewFilme}
                source={capa ? { uri: capa } : require('@/assets/images/noImage.jpg')}
            />
            <View style={styles.dadosFilme}>
                <View style={styles.footerFilme}>
                    <Text style={styles.cabecalhoItem}>{titulo}</Text>
                    <TouchableOpacity onPress={() => onDelete(id)}>
                        <Ionicons name="trash-outline" size={24} color="#a96036" />
                    </TouchableOpacity>
                </View>
                <View style={styles.footerFilme}>
                    <Text style={styles.textoItem}>{genero}</Text>
                    <View style={styles.iconTextContainer}>
                        <Ionicons name="time-outline" size={17} color="#a9bcc2" />
                        <Text style={styles.subtextoItem}>{duracao}min </Text>
                        <Ionicons name="ban-outline" size={16} color="#a9bcc2" />
                        <Text style={styles.subtextoItem}>{classificacao}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
});

export default FilmeItem;