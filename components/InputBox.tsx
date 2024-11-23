import { View, Text, TextInput, StyleSheet } from "react-native";

type InputBoxProps = {
    label: string,
    valor: string,
    onText: (value: string) => void,
    handleCapa?: () => void,
    keyType?: any
    inputRef?: React.RefObject<TextInput>
    onSubmit?: () => void
}

const InputBox: React.FC<InputBoxProps> = ({ label, valor, onText, handleCapa, keyType, inputRef, onSubmit}) => {
    return (
        <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput
                inputMode={keyType || 'text'}
                style={styles.inputEstilo}
                value={valor}
                onChangeText={onText}
                onBlur={handleCapa}
                onSubmitEditing={onSubmit}
                returnKeyType="next"
                ref={inputRef}
            />
        </View>
    )

}

const styles = StyleSheet.create({
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
    }
})

export default InputBox;