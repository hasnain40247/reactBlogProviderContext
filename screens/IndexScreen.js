import React, { useContext, useEffect, useReducer } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Context, Provider } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({navigation}) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);
useEffect(()=>{
getBlogPosts();
const listener=navigation.addListener('didFocus',()=>{
  getBlogPosts();
})


return ()=>{
  listener.remove()
}
},[])
  return (
    <View style={{ flex: 1 }}>
 
      <FlatList
        data={state}
        keyExtractor={(data) => data.title}
        renderItem={({ item }) => {
          return (

            <TouchableOpacity onPress={()=>{
                navigation.navigate('Show',{id:item.id})
            }}>
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  console.log(item.id);
                  deleteBlogPost(item.id);
                }}
              >
                <Feather style={styles.icon} name="trash" />
              </TouchableOpacity>
            </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions=({navigation})=>{
    return{
      
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
              <Feather name="plus" size={30} />
            </TouchableOpacity>
          ),
    };
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
    borderColor: "#EBECF0",
    borderBottomWidth: 1,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
