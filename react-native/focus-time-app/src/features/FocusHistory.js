import { View, Text, StyleSheet, FlatList } from 'react-native';

import { spacing } from '../utils/sizes';
import { colours } from '../utils/colours';
import { fontSize } from '../utils/sizes';

export function FocusHistory({ history }) {

    if (!history || !history.length) {
        return <Text style={{color: colours.white, fontSize: fontSize.md, textAlign: 'center'}}>We haven't focused on anything yet</Text>;
    }

    const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

    return (
        <View style={styles.container}>
            <Text style={{color: colours.white, fontSize: fontSize.md}}>Focus History</Text>
            <FlatList
                data={history}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        fontSize: fontSize.md,
        color: colours.white,
        paddingTop: spacing.sm,
    },
    container: {
        padding: spacing.md,        
        flex: 1,
    },
});