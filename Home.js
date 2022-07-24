import React, { Component } from 'react';
import { 
    Text, 
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar, 
} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Home Screen!</Text>
            </View>
        )
    }
}
export default class HomeScreen extends Component {
    render() {
        return(
            <View style = { styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style= {styles.titleBar}>
                    <Text styles = { styles.titleText}>Stellar</Text>
                    <Text styles = {styles.titleText}>App</Text>
               </View>
               <TouchableOpacity style= {styles.routeCard}>
                   <Text style= {styles.routeText}>Spacecrafts</Text>
               </TouchableOpacity>
               <TouchableOpacity style= {styles.routeCard}>
                   <Text style= {styles.routeText}>Star Map</Text>
               </TouchableOpacity>
               <TouchableOpacity style= {styles.routeCard}>
                   <Text style= {styles.routeText}>Daily Pictues</Text>
                   </TouchableOpacity>
            </View>
        )
    }
}
const styles= StyleSheet.create({
container:{
    flex:1
},
droidSafeArea: {
margin: Platform.OS === "android" ? StatusBar.currentHeight: 0
},
routeCard: {
flex:0.12,
justifyContent: "center",
alignItems:"center",
margin:10,
marginLeft:30,
marginRight:30,
borderRadius:100,
backgroundColor:"white"
},
titleBar:{ 
flex:0.5,
justifyContent: "center",
alignItems:"center"
},
titleText:{
fontSize: 40,
fontWeight: "bold",
color:"white"
},
routeText:{
    fontSize:25,
    fontWeight:"bold",
    color: "#D11583",
    justifyContent:"center",
    alignItems:"center"
}
});
