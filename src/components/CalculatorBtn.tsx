import { Text, StyleSheet, TouchableOpacity } from 'react-native'

interface Props {
    text: string;
    color?: string;
    lg?: boolean;
    action: ( textNumber: string ) => void;
}

export default function CalculatorBtn({ text, color = '#2D2D2D', lg = false, action }: Props) {
  return (
    <TouchableOpacity
        style= {[ styles.btn , {
            backgroundColor: color,
            flex: (lg) ? 2 : 1
        }]}
        onPress={ () => action( text ) }
    >
        <Text style={[ styles.btnText, {
            color: ( color === '#2D2D2D') ? 'white' : 'black'
        }]}>{ text }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        borderRadius: 100,
        justifyContent: 'space-between',
        marginHorizontal: 5
    },
    btnText: {
        color: 'white',
        fontSize: 30,
        fontWeight: '300',
        padding: 10
    }
});