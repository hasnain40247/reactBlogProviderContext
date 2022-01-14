import React, { useContext, useState } from "react";
import {Button, View, Text, StyleSheet, TextInput } from "react-native";
import { NavigationContext } from "react-navigation";
import { Context } from "../context/BlogContext";

const CreateScreen = ({navigation}) => {
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const {addBlogPost}=useContext(Context)

  return (
    <View style={{paddingHorizontal:10}}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={(newtext)=> setTitle(newtext)}  />
      <Text  style={styles.label}>Enter Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={(newtext)=> setContent(newtext)}  />
      <Button
        title="Add Post"
        onPress={() => {
          addBlogPost(title,content,()=>{
              navigation.navigate('Index')
          });
        }}
      />


    </View>
  );
};
const styles = StyleSheet.create({
input:{
    fontSize:18,
    borderWidth:1,
    borderColor:'black',
    marginLeft:10,
    padding:8,
    marginBottom:9
},
label:{
    fontSize:20,
    marginBottom:10
}

});
export default CreateScreen;
