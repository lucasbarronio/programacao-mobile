import { View, TextInput, StyleSheet } from "react-native";

type SearchInputProps = {
    onSearch: (value: string) => void,
    value: string
}
const SearchInput: React.FC<SearchInputProps> = ({ value, onSearch }) => {
    return (
        <View style={styles.containerPesquisa}>
            <TextInput
                inputMode='text'
                value={value}
                placeholder='Busque por um filme'
                placeholderTextColor={'#7c7c7c'}
                style={styles.inputEstilo}
                onChangeText={onSearch}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    inputEstilo: {
        height: 40,
        color: '#000',
        backgroundColor: '#d9d9d9',
        width: '100%',
        fontSize: 20,
        paddingLeft: 10
    },
    containerPesquisa: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        paddingBottom: 0
    }
});

export default SearchInput