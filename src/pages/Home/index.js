import { FlatList, StyleSheet } from 'react-native';

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
                keyExtractor={({ nome }) => nome}
                ListHeaderComponent={() => {
                    return (
                        <>
                            <Top {...top} />
                            <Description {...description} />
                            <Texto style={style.title}>{itens.title}</Texto>
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
    }
})
