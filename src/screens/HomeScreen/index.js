import React from 'react';
import {FlatList, Image, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RemixIcon from 'react-native-remix-icon';
const HomeScreen = () => {
  const [state, setState] = React.useState(true);
  const data = [{
    id:0,
    name:'Unik',
    img: 'https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/9da40e3c-5846-4359-bb41-05c27b09a8f5.jpeg?im_w=960'
  },{
    id:1,
    name:'Kamar kos',
    img: 'https://www.99.co/blog/indonesia/wp-content/uploads/2021/11/sindonewscom.jpg'
  },{
    id:2,
    name:'Hotel',
    img: 'https://a0.muscache.com/im/pictures/1c72ac7f-6015-48ef-8a76-080542bb6240.jpg?im_w=960'
  },{
    id:3,
    name:'Villa',
    img: 'https://a0.muscache.com/im/pictures/1c72ac7f-6015-48ef-8a76-080542bb6240.jpg?im_w=960'
  },{
    id:4,
    name:'Apartment',
    img: 'https://a0.muscache.com/im/pictures/1c72ac7f-6015-48ef-8a76-080542bb6240.jpg?im_w=960'
  }]
  return (
  <>
    <View
      style={{
        flex: 1,
        backgroundColor:'#fff'
      }}>
          <ImageBackground source={{
            uri: 'https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/9da40e3c-5846-4359-bb41-05c27b09a8f5.jpeg?im_w=960'
          }}>
            <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.6)',  '#000']} style={{
              padding:20,
            }}>
              <View style={{
                flexDirection:'row',
                marginBottom:20,
                justifyContent:'space-between'
              }}>
              <View>
                <Text style={{
                  color:'#fff',
                  fontSize:18,
                  marginBottom:5,
                }}>Hai, Jan!</Text>
                <Text style={{
                  color:'#fff',
                  fontSize:24,
                }}>{`Ayo jelajahi dunia\nbersama kami`}</Text>
              </View>
              <View style={{
                width: 50,
                height: 50,
                borderRadius:15,
                backgroundColor:'red'
              }}>
              </View>
            </View>
            <View style={{
              height: 60,
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'center',
              borderRadius:20,
              backgroundColor:'#f2f2f2'
            }}>
              <RemixIcon name="search-line"/>
              <Text style={{
                color:'#000',
                marginLeft:5,
                fontSize:14
              }}>Kamu mau pergi kemana?</Text>
            </View>
            </LinearGradient>
          </ImageBackground>
        <View style={{
          padding:20,
          paddingBottom:0
        }}>
          <Text style={{
            color:'#000',
            fontSize:24,
            fontWeight:'bold'
          }}>Blablablalbalba..</Text>
          <Text style={{
            color:'#000',
            marginBottom:20,
          }}>Lorem ipsum dolor sit amet.</Text>
          <FlatList data={[{
            name:'Penerjemah'
          },{
            name:'Tour Guide'
          }]} horizontal
          renderItem={({item}) => <View style={{
            width: 80,
            height: 80,
            marginRight:10,
            backgroundColor:'red'
          }}></View>}
          >

          </FlatList>
        </View>
        <View style={{
          padding:20
        }}>
        <Text style={{
          color:'#000',
          fontSize:24,
          fontWeight:'bold',
        }}>Butuh penginapan?</Text>
        <Text style={{
          color:'#000',
          marginBottom:20,
        }}>Lorem ipsum dolor sit amet.</Text>
        <FlatList data={data} horizontal renderItem={({item}) => (  
            <TouchableOpacity style={{
              width: 180,
              height: 180,
              marginRight:20,
              borderRadius:20,
            }}>
                <Image style={{
                  flex:1,
                  borderRadius:10
                }} source={{
                  uri : item.img
                }}/>
                
              <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.6)',  '#000']} style={{
                borderBottomRightRadius:10,
                padding:10,
                width: '100%',
                position: 'absolute',
                bottom:0,
                borderBottomLeftRadius:10,
              }}>
              <Text style={{
                color:'#fff',
                fontSize:18,
                fontWeight:'bold',
                marginBottom:2
              }}>{item.name}</Text>
              <Text style={{
                color:'#fff',
                fontSize:12
              }}>Lorem ipsum dolor sit amet.</Text>
              </LinearGradient>
            </TouchableOpacity>
        )}>
        </FlatList>
        </View>
    </View>
    <View style={{
      height: 60,
      borderTopWidth:1,
      flexDirection:'row',
      borderColor:'#f2f2f2',
      backgroundColor:'#fff'
    }}>
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      }}>
        <RemixIcon name="home-line" size={30} color="#000"/>
      </View>
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      }}>
      <RemixIcon name="film-line" size={30} color="#eee"/>
      </View>
      
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      }}>
      <RemixIcon name="chat-1-line" size={30} color="#eee"/>
      </View>
      
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      }}>
        <View style={{
          width: 40,
          height: 40,
          borderRadius:20,
          backgroundColor:'red'
        }}>

        </View>
      </View>
    </View>
  </>
  );
};

export default HomeScreen;
