import {StyleSheet} from 'react-native';

import Description from "./componets/Description";
import Top from "./componets/Top";


export default function Home( {top, description, itens} ){
    return (
        <>
            <Top { ...top }/>
            <Description { ...description}/>
        </>
    )
}

