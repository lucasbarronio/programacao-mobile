import { TouchableOpacity, Text, StyleSheet } from "react-native"

type SubmitButtonProps = {
    onSubmit: () => void
    label: string
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onSubmit, label }) => {
    return (
        <TouchableOpacity
            style={styles.cadastrarBtn}
            onPress={onSubmit}>
            <Text style={styles.cadastrarText}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cadastrarBtn: {
        backgroundColor: '#859042',
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
})

export default SubmitButton;