import { StyleSheet, Appearance, Platform, SafeAreaView , ScrollView, View, Text, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";

import { FlatList } from "react-native";

export default function MenuScreen() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme);

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;
    const separatorComp = <View style={styles.separator}/>
    // const headerComp = <Text style={styles.headerComp}>Top of List</Text>
    const footerComp = <Text style={styles.footerComp}>Bottom of Menu</Text>

    return (
        <Container style={styles.container}>
            <FlatList
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={separatorComp}
                // ListHeaderComponent={headerComp}
                ListEmptyComponent={<Text>No Items</Text>}
                ListFooterComponent={footerComp}
                renderItem={( {item} ) => (
                    <View style={styles.row}>
                        <View style={styles.menuTextRow}>
                            <Text style={[styles.menuItemTitle, styles.menuItemText]}>{item.title}</Text>
                            <Text style={styles.menuItemText}>{item.description}</Text>
                        </View>
                        <Image 
                            source={MENU_IMAGES[item.id - 1]}
                            style={styles.menuItemImage}
                        />
                    </View>
                )}
            />
        </Container>
    )
}


function createStyles(theme, colorScheme) {
    return StyleSheet.create({
        contentContainer: {
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            backgroundColor: theme.background
        },
        separator: {
            height: 1,
            width: '50%',
            backgroundColor: colorScheme === 'dark' ? 'papayawhip' : 'black',
            marginHorizontal: 'auto',
            maxWidth: 300,
            marginBottom: 10,
        },
        headerComp: {
            fontSize: 20,
            textAlign: 'center',
            color: theme.text,
            marginTop: 10
        },
        footerComp: {
            fontSize: 20,
            textAlign: 'center',
            color: theme.text,
            marginBottom: 10
        },
        row: {
            flexDirection: 'row',
            width: '100%',
            maxWidth: 600,
            height: 100,
            marginBottom: 10,
            borderStyle: 'solid',
            borderColor: colorScheme === 'dark' ? 'papayawhip' : 'black',
            borderWidth: 1,
            borderRadius: 20,
            overflow: 'hidden',
            marginHorizontal: 'auto',
        },
        menuTextRow: {
            width: '65%',
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 5,
            flexGrow: 1,
        },
        menuItemTitle: {
            fontSize: 18,
            textDecorationLine: 'underline',
        },
        menuItemText: {
            color: theme.text,
        },
        menuItemImage: {
            width: 100,
            height: 100
        },
    })
}