import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import CalculatorBtn from '../components/CalculatorBtn';
import useCalculator from '../hooks/useCalculator';

export default function CalculatorScreen() {

    const {
        lastNumber,
        number,
        clean,
        positiveNegative,
        btnDel,
        btnDivide,
        popNumber,
        btnMultiply,
        btnSubtract,
        btnAdd,
        calculate
    } = useCalculator();

    return (
        <View style={ styles.calculatorContainer }>
            {
                ( lastNumber !== '0') && (
                    <Text style={ styles.smallResult }>{ lastNumber }</Text>
                )
            }
            
            <Text
                style={ styles.result }
                numberOfLines={1}
                adjustsFontSizeToFit
            >{ number }</Text>

            <View style={styles.calculatorRow}>
                <CalculatorBtn text="C" color="#9B9B9B" action={ clean } />
                <CalculatorBtn text="+/-" color="#9B9B9B" action={ positiveNegative } />
                <CalculatorBtn text="del" color="#9B9B9B" action={ btnDel } />
                <CalculatorBtn text="/" color="#FF9427" action={ btnDivide } />
            </View>

            <View style={styles.calculatorRow}>
                <CalculatorBtn text="7" action={ popNumber } />
                <CalculatorBtn text="8" action={ popNumber } />
                <CalculatorBtn text="9" action={ popNumber } />
                <CalculatorBtn text="x" color="#FF9427" action={ btnMultiply } />
            </View>

            <View style={styles.calculatorRow}>
                <CalculatorBtn text="4" action={ popNumber } />
                <CalculatorBtn text="5" action={ popNumber } />
                <CalculatorBtn text="6" action={ popNumber } />
                <CalculatorBtn text="-" color="#FF9427" action={ btnSubtract } />
            </View>

            <View style={styles.calculatorRow}>
                <CalculatorBtn text="1" action={ popNumber } />
                <CalculatorBtn text="2" action={ popNumber } />
                <CalculatorBtn text="3" action={ popNumber } />
                <CalculatorBtn text="+" color="#FF9427" action={ btnAdd } />
            </View>

            <View style={styles.calculatorRow}>
                <CalculatorBtn text="0" lg action={ popNumber } />
                <CalculatorBtn text="." action={ popNumber } />
                <CalculatorBtn text="=" color="#FF9427" action={ calculate } />
            </View>


        </View>
    )
}