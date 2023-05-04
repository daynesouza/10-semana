import { Image, View, StyleSheet,Dimensions } from 'react-native';
import Texto from '../../../../componets/Texto';
import logo from '../../../../../assets/joystick2.png';

const width = Dimensions.get('screen').width;

export default function Description({ title, titleSecond, description }) {

    console.log(logo);

    return (
        <View style={style.description}>
            <View style={style.description__container}>
                <Image style={style.logo} source={logo}/>
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
       justifyContent: 'center',
       padding: '5%',
       width: '100%', 
       rowGap: 15,
    },
    description__container:{
        alignItems:'center',
        flexDirection: 'row',
        justifyContent:'flex-start',
        width:'100%',
    },
    logo:{
        width: 100,
        height: 100,
    },
    title:{
        fontSize: 24,
    },
    titleSecond:{
        fontSize:16,
    },
    text:{
        fontSize:16,
    }
})
