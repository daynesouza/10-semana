import { Image, StyleSheet, Dimensions, Text } from 'react-native';
import Texto from '../../../../componets/Texto'
import banner from '../../../../../assets/banner/banner.png';

const width = Dimensions.get('screen').width;

export default function Top({titulo}){
    
    return (
        <>
            <Image source={banner} style={style.banner}/>
            <Texto style={style.title}> {titulo} </Texto>
        </>
    )
}

const style = StyleSheet.create({
    banner: {
        width: '100%',
        height: 400 / 980 * width,
        shadowColor: 'black',
    },
    title: {
        alignSelf: 'flex-start',
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 24,
        color:  'white',
        padding: 16, 
        margin: 16,
    },
})