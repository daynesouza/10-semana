import { Image, View, StyleSheet } from 'react-native';
import Texto from '../../../../componets/Texto';
import logo from '../../../../../assets/joystick.png';

export default function Description({ title, titleSecond, description }) {

    console.log(logo);

    return (
        <View style={style.description}>
            <View style={style.description__container}>
                <Image source={logo}/>
                <Texto style={style.title}> {title} </Texto>
            </View>
            <Texto style={style.titleSecond}> {titleSecond} </Texto>
            <Texto style={style.text}> {description} </Texto>
        </View>
    )
}

const style = StyleSheet.create({
    description:{
       alignItems: 'center',
       flexDirection: 'column',
       width: '100%', 
       justifyContent: 'center',
       padding: '5%'
    },
    description__container:{},
    title:{
        fontSize: 24,
    },
    titleSecond:{},
    text:{}
})
