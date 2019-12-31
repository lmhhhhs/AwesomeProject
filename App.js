import React,{Component} from 'react';
import {
    Alert,
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    Button,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView,
    FlatList,
    SectionList
} from 'react-native';


export default class HelloWorldApp extends Component{
    state={
        data:[]
    }

    componentDidMount() {
        fetch('http://mhlovexh.cn:8081/test.php',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            }
        }).then((res)=>res.json())
            .then(data=>this.setState({data}))
    }

    render() {
    return(
        <View>
            <FlatList
            data={this.state.data}
            renderItem={({item})=>{
                return(
                    <View key={item.title} style={{flexDirection:'row '}}>
                        <Text>{item.title}</Text>
                        <Text>{item.score}</Text>
                    </View>
                )
            }}
            />
        </View>
    )
  }
}

