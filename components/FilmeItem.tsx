import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, Pressable } from 'react-native';

type FilmeItemProps = {
    id: string,
    titulo: string,
    capa: string,
    genero: string,
    duracao: string,
    classificacao: string,
    onDelete: (id: string) => void;
    onEdit: (id: string) => void;
    onTouch: () => void;
}

const FilmeItem: React.FC<FilmeItemProps> = ({ id, titulo, capa, genero, duracao, classificacao, onDelete, onEdit, onTouch }) => {
    const [expanded, setExpanded] = useState(false);

    const onItemPress = () => {
        setExpanded(!expanded);
    };

    return (
        <TouchableOpacity onPress={onItemPress} style={{ flexDirection: 'column', marginBottom: 10 }}>
            <View style={styles.itemLista}>
                <Image
                    style={styles.previewFilme}
                    source={capa ? { uri: capa } : require('@/assets/images/noImage.jpg')}
                />
                <View style={styles.dadosFilme}>
                    <Text style={styles.cabecalhoItem}>{titulo}</Text>
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
            {expanded && (
                <View style={styles.opcoes}>
                    <Pressable onPress={() => onEdit(id)} style={styles.botaoOpcao}>
                        <Ionicons name="create-outline" size={24} color="#859042" />
                        <Text style={{ color: '#859042', fontSize: 16 }}> EDITAR</Text>
                    </Pressable>
                    <Pressable onPress={() => onDelete(id)} style={styles.botaoOpcao}>
                        <Ionicons name="trash-outline" size={24} color="#a96036" />
                        <Text style={{ color: '#a96036', fontSize: 16 }}> EXCLUIR</Text>
                    </Pressable>
                </View>
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemLista: {
        backgroundColor: '#121212',
        flexDirection: 'row',
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
    opcoes: {
        flexDirection: 'column',
    },
    botaoOpcao: {
        paddingVertical: 10,
        backgroundColor: '#121212',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default FilmeItem;