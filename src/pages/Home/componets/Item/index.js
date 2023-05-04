import { View, Image, StyleSheet } from 'react-native';
import Texto from '../../../../componets/Texto';

export default function Item({ item: { id, nome, photo } }) {
    return (
        <View style={style.item}>
            <Image source={photo} style={style.photo} />
            <Texto style={style.nome}> {nome} </Texto>
        </View>
    )
};

const style = StyleSheet.create({
    item: {
        alignItems: 'center',
        borderRadius: 10,
        borderBottomColor: "#ECECEC",
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '90%',
        margin: '5%'
    },
    photo: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        height: 46,
        width: 46,
    },
    nome: {
        fontSize: 20,
    },
});