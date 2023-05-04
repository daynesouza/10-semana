import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import Description from "./componets/Description";
import Top from "./componets/Top";
import Item from './componets/Item';
import Texto from '../../componets/Texto';


export default function Home({ top, description, itens }) {
    return (
        <>
            <FlatList
                data={itens.list}
                renderItem={Item}
                keyExtractor={({ id }) => id }
                ListHeaderComponent={() => {
                    return (
                        <>
                            <Top {...top} />
                            <Description {...description} />
                            <Texto style={style.title}>{itens.title}</Texto>
                        </>
                    )
                }}
                ListFooterComponent={() => {
                    return (
                        <>
                            <TouchableOpacity style={style.botao} onPress={() => { }}>
                                <Texto style={style.textoBotao}>Comprar</Texto>
                            </TouchableOpacity>
                        </>
                    )
                }}
            />
        </>
    )
}

const style = StyleSheet.create({
    title: {
        fontSize: 24,
        textAlign: 'center',
        width: '100%'
    },
    botao: {
        alignSelf: 'center',
        marginTop: 16,
        backgroundColor: "#000000",
        paddingVertical: 16,
        borderRadius: 6,
        width:'80%'
    },
    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
})
