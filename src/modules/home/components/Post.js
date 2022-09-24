import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Icon from "@expo/vector-icons/Ionicons"
import { helpers } from "../../../theme/helpers"
import { theme } from "../../../theme/theme"

const Post = () => {
  return (
    <View style={styles.container}>
      <View style={[helpers.row, styles.header]}>
        <View style={styles.image}></View>
        <View>
          <Text style={[styles.username, theme.textWhite]}>@timothy</Text>
          <View style={helpers.row}>
            <Icon name='location-outline' style={[helpers.pr_1, theme.textWhite]} size={17}/>
            <Text style={theme.textWhite}>Toronto, Canada</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}></View>
      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <Icon name='heart-outline' size={17} style={[helpers.pr_1, theme.textWhite]} />
          <Icon name='chatbubble' size={17} style={[helpers.pr_1, theme.textWhite]} />
          <Icon name='bookmark-outline' size={17} style={theme.textWhite} />
        </View>
        <View>
          <Icon name='navigate' size={17} style={theme.textWhite} />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={theme.textWhite}>view 23 comments...</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 25
  },
  header: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  image: {
    marginRight: 20,
    height: 45,
    width: 45,
    borderRadius: 45,
    backgroundColor: "#D9D9D9",
  },
  username: {
    fontWeight: "600",
    paddingVertical: 5,
  },
  body: {
    height: 350,
    maxHeight: 350,
    margin: 15,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: "#D9D9D9",
  },
  actions: {
    padding: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  leftActions: {
    flexDirection: 'row'
  },
  footer: {
    marginVertical: 7,
    marginHorizontal: 15,
  },
})

export default Post
