import React,{Component} from "react";
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image, SectionList} from "react-native";

export default class MovieScreen extends Component{
 
  render(){

    const title = this.props.route.params.title;
    const overview = this.props.route.params.overview;
    const poster_path = this.props.route.params.poster_path;
    const original_language = this.props.route.params.original_language; 
    const popularity = this.props.route.params.popularity;
    const release_date = this.props.route.params.release_date;

   

    return (
      <View style ={styles.container}>

        <Text style = {styles.titleStyle}>{title}</Text>


        <Image style={styles.movieImg} source={{uri:"https://image.tmdb.org/t/p/w500/"+poster_path}}></Image>

        <Text style = {styles.overviewStyle}>{overview}</Text>
        <Text style = {styles.languageStyle}>{original_language}</Text>
        <Text style = {styles.populrityNStyle}>{(popularity/100).toFixed(0)}%</Text>
        <Text style = {styles.dateStyle}>{release_date}</Text>

      </View>
    )
  }

  }

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center'
  },
  textStyle :{
    fontSize:14,
    color: 'black',
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
    height:370,
    resizeMode:'contain',
    
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
  },

  titleStyle:{
    marginTop: 5,
    fontSize: 22,
    color: 'black',
  },

  overviewStyle:{
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 14,
  },

  languageStyle: {
    fontSize: 24, 

  },

  populrityNStyle:{
    fontSize: 22,
  }, 


  dateStyle:{
    fontSize: 22,
  }
 
})