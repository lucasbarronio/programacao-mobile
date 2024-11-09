import { Ionicons } from '@expo/vector-icons';
import { View, ImageBackground, TouchableOpacity, Text, StyleSheet } from 'react-native';

type HeaderProps = {
    titulo: string
    image: any
}

const Header: React.FC<HeaderProps> = ({ titulo, image }) => {
    return (
        <ImageBackground
            style={styles.capa}
            source={image}>
            <View style={styles.containerCabecalho}>
                <Text style={styles.cabecalho}>{titulo}</Text>
            </View>
            <TouchableOpacity style={styles.botaoMenu}>
                <Ionicons name="menu" size={24} color="white" />
            </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
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
    containerCabecalho: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20
    },
    botaoMenu: {
        position: 'absolute',
        right: 20,
        top: 50,
        width: 60,
        height: 60,
        backgroundColor: '#A96036',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Header;