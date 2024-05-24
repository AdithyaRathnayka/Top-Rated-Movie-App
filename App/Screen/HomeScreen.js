import React,{Component} from "react";
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image, SectionList, TouchableOpacity} from "react-native";

export default class HomeScreen extends Component{
  constructor(){
    super();
    this.state= {
      isLoading:true,
      dataSource:null,
    }
  }

  componentDidMount(){
    return fetch('https://api.themoviedb.org/3/movie/popular?api_key=59ba93e0e4dbd58d756c35aeb1dc9f22&language=en-US&page=1')
    .then(res => res.json())
    // .then(res => console.log(res.results))
    .then(res =>{
      this.setState({
        isLoading:false,
        dataSource:res.results,
      })
    })
    .catch((error) => {
      console.log(error)
    });
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={styles.container}>
          <ActivityIndicator/>
        </View>
      )
    }else{
      let movies = this.state.dataSource.map((val,key) =>{
        return <TouchableOpacity key={key} style={styles.item}
        onPress={()=> this.props.navigation.navigate('Movie Details', val)}
        >
          <Image source={{uri:"https://image.tmdb.org/t/p/w500/"+val.poster_path}} style={styles.movieImg}/>
          <Text style = {styles.movieTitle}>{val.title}</Text>
          <Text style = {styles.movieOverview}>{val. overview}</Text>
        </TouchableOpacity>
      });
      return(
        <ScrollView >
          {movies}
        </ScrollView>
      );
    }  
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle :{
    fontSize:24,
    color:'white'
  },
  item:{
    flex:1,
    alignSelf:'stretch',
    margin:10,
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:2,
    borderBottomColor:'#eee',
    borderRadius:4
  },
  movieImg:{
    width:350,
    height:400,
    resizeMethod:'auto',
    resizeMode:'contain',
    alignContent:'center',
    borderRadius:8,
    borderWidth:7,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
  }, 
  movieTitle: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#060807',
    fontSize: 20,
    fontWeight: 'bold',
  }, 

  movieOverview:{
    color: '#262b29',
    fontStyle: 'normal',
    
    

  }
})