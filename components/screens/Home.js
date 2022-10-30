import { StyleSheet, Text, View,Dimensions,StatusBar, Image, TouchableOpacity, ImageBackground, Animated } from 'react-native'
import React from 'react'
import { locations } from './Data';
import MapView, { PROVIDER_GOOGLE ,Marker} from 'react-native-maps';

const {height,width}=Dimensions.get('window');


export default function Home() {

const [togglemenu,setTogglemenu]=React.useState(false);
const[homec,setHomec]=React.useState(false);
const[locationc,setLocationc]=React.useState(false);
const[profilec,setProfilec]=React.useState(false);
const[comapassc,setCompassc]=React.useState(false);
const[calendar,setCalendarc]=React.useState(false);
const [hs,setHs]=React.useState(false);
const [ws,setWs]=React.useState(false);
const [hi,setHi]=React.useState(false);
const [wi,setWi]=React.useState(false);
const [hf,setHf]=React.useState(false);
const [wf,setWf]=React.useState(false);
const [hm,setHm]=React.useState(false);
const [wm,setWm]=React.useState(false);
const [hc,setHc]=React.useState(false);
const [wc,setWc]=React.useState(false);
const [ha,setHa]=React.useState(false);
const [wa,setWa]=React.useState(false);
  return (

    <View style={styles.container}>
        <View style={styles.topcontainer}>
            <View style={styles.topcontainer1}>
            <Image source={require('../assets/logo.jpeg')} resizeMode='contain' style={{width:"16%", marginRight:width/24}}></Image>
            <Text style={styles.text}>Events Near You</Text>
            </View>
            <Image source={require('../assets/more.jpeg')}  resizeMode='contain' style={{width:"13%", borderRadius:10}}></Image>
        </View>
        <View style={styles.maincontainer}>
        <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={{width:width,height:height}}
       
        showsUserLocation={true}  
        zoomEnabled={true}  
        zoomControlEnabled={true}  
        initialRegion={{  
          latitude: 24.83073537,   
          longitude: 67.02129903,  
          latitudeDelta: 0.0922,  
          longitudeDelta: 0.0421,  
        }}
        
     >

{/* { locations.map(value=>(
        <Marker  
            coordinate={{ latitude:value.latitude, longitude:value.longitude }}  
            title={value.title}
            onPress={()=>{setTogglemenu(!togglemenu);
            }}>
            <Text style={{fontSize:10,zIndex:1,top:20,textAlign:'center',color:value.color=='darkblue'?"white":"black"}}>{value.title}</Text>
            <Image source={require('../assets/speech-bubble.png')} resizeMode='cover' tintColor={value.color} style={{width:w,height:h}}></Image >
          
          
            </Marker> 
))} */}

    <Marker  
            coordinate={{ latitude:locations[0].latitude, longitude:locations[0].longitude }}  
            title={locations[0].title}
            onPress={()=>{setTogglemenu(!togglemenu);
                setHs(!hs);
                setWs(!ws);
            }}>
            <Text style={{fontSize:10,zIndex:1,top:ws?30:20,textAlign:'center',color:locations[0].color=='darkblue'?"white":"black"}}>{locations[0].title}</Text>
            <Image source={require('../assets/speech-bubble.png')} resizeMode='cover' tintColor={locations[0].color} style={{width:ws?60:40,height:hs?60:40}}></Image >
    </Marker> 

    <Marker  
            coordinate={{ latitude:locations[1].latitude, longitude:locations[1].longitude }}  
            title={locations[1].title}
            onPress={()=>{setTogglemenu(!togglemenu);
                setHi(!hi);
                setWi(!wi);
            }}>
            <Text style={{fontSize:10,zIndex:1,top:wi?30:20,textAlign:'center',color:locations[1].color=='darkblue'?"white":"black"}}>{locations[1].title}</Text>
            <Image source={require('../assets/speech-bubble.png')} resizeMode='cover' tintColor={locations[1].color} style={{width:wi?60:40,height:hi?60:40}}></Image >
    </Marker> 

    <Marker  
            coordinate={{ latitude:locations[2].latitude, longitude:locations[2].longitude }}  
            title={locations[2].title}
            onPress={()=>{setTogglemenu(!togglemenu);
                setHm(!hm);
                setWm(!wm);
            }}>
            <Text style={{fontSize:10,zIndex:1,top:wm?30:20,textAlign:'center',color:locations[2].color=='darkblue'?"white":"black"}}>{locations[2].title}</Text>
            <Image source={require('../assets/speech-bubble.png')} resizeMode='cover' tintColor={locations[2].color} style={{width:wm?60:40,height:hm?60:40}}></Image >
    </Marker> 

    <Marker  
            coordinate={{ latitude:locations[3].latitude, longitude:locations[3].longitude }}  
            title={locations[3].title}
            onPress={()=>{setTogglemenu(!togglemenu);
                setHc(!hc);
                setWc(!wc);
            }}>
            <Text style={{fontSize:10,zIndex:1,top:wc?30:20,textAlign:'center',color:locations[3].color=='darkblue'?"white":"black"}}>{locations[3].title}</Text>
            <Image source={require('../assets/speech-bubble.png')} resizeMode='cover' tintColor={locations[3].color} style={{width:wc?60:40,height:hc?60:40}}></Image >
    </Marker> 

    <Marker  
            coordinate={{ latitude:locations[4].latitude, longitude:locations[4].longitude }}  
            title={locations[4].title}
            onPress={()=>{setTogglemenu(!togglemenu);
                setHa(!ha);
                setWa(!wa);
            }}>
            <Text style={{fontSize:10,zIndex:1,top:wa?30:20,textAlign:'center',color:locations[4].color=='darkblue'?"white":"black"}}>{locations[4].title}</Text>
            <Image source={require('../assets/speech-bubble.png')} resizeMode='cover' tintColor={locations[0].color} style={{width:wa?60:40,height:ha?60:40}}></Image >
    </Marker> 

    <Marker  
            coordinate={{ latitude:locations[5].latitude, longitude:locations[5].longitude }}  
            title={locations[5].title}
            onPress={()=>{setTogglemenu(!togglemenu);
                setHf(!hf);
                setWf(!wf);
            }}>
            <Text style={{fontSize:10,zIndex:1,top:wf?30:20,textAlign:'center',color:locations[5].color=='darkblue'?"white":"black"}}>{locations[5].title}</Text>
            <Image source={require('../assets/speech-bubble.png')} resizeMode='cover' tintColor={locations[5].color} style={{width:wf?60:40,height:hf?60:40}}></Image >
    </Marker> 






     </MapView>
        </View>
        <View style={styles.btmcontainer}>
            {togglemenu?<View style={styles.btmcard}>
                <View style={{height:"50%", backgroundColor:"teal",width:"90%", alignSelf:"center",bottom:width/12, borderRadius:20,flexDirection:"row", }}>
                    <View style={{width:"50%",backgroundColor:"yellow",borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
                        <ImageBackground source={require('../assets/dance.png')} resizeMode='cover' style={{width:"100%",height:"100%",}} imageStyle={{borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
                            <Text style={{alignSelf:"flex-end", margin:10, backgroundColor:"#14172A", borderRadius:5,padding:5 , fontWeight:"bold"}}>17 Dec</Text>
                        </ImageBackground>
                    </View>
                    <View style={{width:"50%",backgroundColor:"#14172A",borderTopRightRadius:20,borderBottomRightRadius:20,borderRightColor:"#AAA",borderBottomColor:"#AAA",borderTopColor:"#AAA",borderWidth:.5,flexDirection:"column",justifyContent:"space-evenly", paddingLeft:8}}>
                            <View>
                                <Text>Bastau Concert</Text>
                            </View>
                            <View style={{borderColor:"gold",borderWidth:1, borderRadius:15,padding:5,width:"34%"}}>
                                <Text style={{ textAlign:"center",fontWeight:"bold",fontSize:12,color:'gold'}}>Music</Text>
                            </View>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                    <Image source={require('../assets/User.png')} style={{width:25,height:25,zIndex:1}}></Image>
                                    <Image source={require('../assets/User.png')} style={{width:25,height:25,right:10}}></Image>
                                    <Image source={require('../assets/User.png')} style={{width:25,height:25,right:20}}></Image>
                                    <Text style={{fontSize:10,right:10}}>20k+ Going</Text>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:"space-around",}}>

                            <Image source={require('../assets/location-pin.png')} tintColor='lightgreen' style={{width:15,height:15}}></Image>
                            <Text style={{fontSize:10}}> Grand Aveneue, Indonesia</Text>
                            
                                <Image source={require('../assets/bookmark.png')} tintColor='lightgreen' style={{width:15,height:15}}></Image>
                                
                            </View>
                    </View>
                </View>
                </View>:null}

            <View style={styles.btminnner}>
                <TouchableOpacity style={[styles.btmimageop,{backgroundColor:homec?"green":"#1C203B"}]} onPress={()=>{
                    // setTogglemenu(!togglemenu);
                    // setHomec(!homec);
                }}>
            <Image source={require('../assets/home.png')} resizeMode='contain' style={styles.btmimage} tintColor='lightgreen'></Image>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btmimageop,{backgroundColor:comapassc?"green":"#1C203B"}]} onPress={()=>{
                    // setTogglemenu(!togglemenu);
                    // setCompassc(!comapassc);
                }}>
            <Image source={require('../assets/compass.png')} resizeMode='contain' style={styles.btmimage} tintColor="lightgreen"></Image>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btmimageop,{backgroundColor:"lightgreen"}]} onPress={()=>{
                    // setTogglemenu(!togglemenu);
                    // setLocationc(!locationc);
                }}>
            <Image source={require('../assets/location.png')} resizeMode='contain' style={styles.btmimage} tintColor="#14172A"></Image>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btmimageop,{backgroundColor:calendar?"green":"#1C203B"}]} onPress={()=>{
                    // setTogglemenu(!togglemenu);
                    // setCalendarc(!calendar);
                }}>
            <Image source={require('../assets/calendar.png')} resizeMode='contain' style={styles.btmimage} tintColor="lightgreen"></Image>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btmimageop,{backgroundColor:profilec?"green":"#1C203B"}]} onPress={()=>{
                    // setTogglemenu(!togglemenu);
                    // setProfilec(!profilec);
                }}>
            <Image source={require('../assets/profile.png')} resizeMode='contain' style={styles.btmimage} tintColor="lightgreen"></Image>
            </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // paddingTop:StatusBar.currentHeight-20,
        backgroundColor:"white"
    },
    topcontainer:{
        flex:1,
        backgroundColor:"#14172A",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:width/30      
    },
    topcontainer1:{
        width:"80%",
        flexDirection:"row",
        alignItems:"center",
    },
    text:{
        color:"white",
        fontSize:width/20,
        fontWeight:"bold",
    },
    maincontainer:{
        backgroundColor:"white",
        flex:8
    },
    btmcontainer:{
        // flex:1,
        height:(height/3)+10,
        
        justifyContent:"flex-end",
        
        // backgroundColor:"#14172A",
        // borderWidth:3,
        flexDirection:'column',
        
    },
    btmcard:{
        flex:5,
        backgroundColor:"#1C203B",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        // alignSelf:"center",
        justifyContent:"center",
        width:width,
        
    },
    btminnner:{
        
        position: 'absolute',
        backgroundColor:"#14172A",
        borderWidth:1,
        borderColor:"teal",
        height:height/11,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        width:width
    },
    btmimageop:{
        backgroundColor:"black",width:width/8, borderRadius:10, alignItems:"center"
    },
    btmimage:{
        width:25,
        height:50,
        color:"lightgreen",
    }
    
})