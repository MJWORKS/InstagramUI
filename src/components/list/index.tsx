import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function List(props: any) {
  function setHeartIcon(liked: any) {
    return liked
      ? require("../../media/likeada.png")
      : require("../../media/like.png");
  }

  function setNumberLikes(numberLikes: any) {
    if (numberLikes === 0) {
      return;
    }

    return (
      <Text style={styles.likes}>
        {""} {numberLikes} {numberLikes > 1 ? "curtidas" : "curtida"} {""}
      </Text>
    );
  }

  return (
    <View>
      <View style={styles.profile}>
        <Image
          source={{ uri: props.posts.imgperfil }}
          style={styles.profileImg}
        />
        <Text style={styles.userName}>{props.posts.nome}</Text>
      </View>
      <Image
        resizeMode="cover"
        style={styles.imgPublication}
        source={{ uri: props.posts.imgPublicacao }}
      />

      <View style={styles.actionsArea}>
        <TouchableOpacity style={styles.send}>
          <Image
            style={styles.like}
            source={setHeartIcon(props.posts.likeada)}
          />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.send}>
          <Image style={styles.like} source={require("../../media/send.png")} />
        </TouchableOpacity>
      </View>

      {setNumberLikes(props.posts.likers)}

      <Text style={styles.nameFooter}> {props.posts.nome} </Text>
      <Text style={styles.descriptionFooter}> {props.posts.descricao} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    paddingLeft: 12,
    fontSize: 22,
    color: "#000",
  },
  imgPublication: {
    height: 400,
    alignItems: "center",
  },
  actionsArea: {
    flexDirection: "row",
    padding: 5,
  },
  like: {
    width: 25,
    height: 25,
  },
  send: {
    paddingLeft: 8,
  },
  likes: {
    fontWeight: "bold",
    margin: 8,
  },
  nameFooter: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 5,
  },
  descriptionFooter: {
    paddingLeft: 5,
    paddingBottom: 10,
    fontSize: 15,
  },
});
