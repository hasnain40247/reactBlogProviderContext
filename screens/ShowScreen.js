import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import {Feather} from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );
  return (
   <View style={styles.rview}> 
   <View style={styles.view}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
    </View>
  );
};

ShowScreen.navigationOptions=({navigation})=>{
    return{
title: "Your Blog",
headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Edit',{id:navigation.getParam('id')})}>
      <Feather name="edit-2" size={26} />
    </TouchableOpacity>
  ),
    };
}
const styles = StyleSheet.create({
    rview:{
        padding:10,
   
    },
    view:{
        padding:10,
        borderColor:"black",
        borderWidth:2,
    },
    title:{
        fontSize:35,
        fontWeight:"bold"
    },
    content:{
        fontSize:30,
        
    }
});
export default ShowScreen;
