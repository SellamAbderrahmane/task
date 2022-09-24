import React, { useState } from "react"
import { BlurView } from "expo-blur"
import { LinearGradient } from "expo-linear-gradient"
import Dialog, { DialogContent } from "react-native-popup-dialog"
import { Dimensions, ScrollView, StyleSheet } from "react-native"

import Post from "./components/Post"
import Button from "../../components/Button"
import ScreenContainer from "../../components/ScreenContainer"

const { width, height } = Dimensions.get("screen")

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <ScreenContainer>
      <Button
        title='View Photos'
        style={styles.topBtn}
        onPress={() => setModalVisible(!modalVisible)}
      />

      <Dialog
        hasOverlay={false}
        visible={modalVisible}
        height={height / 1.4}
        width={width / 1.2}
        dialogStyle={styles.dialog}
        onTouchOutside={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <DialogContent style={styles.modalContent}>
          <ScrollView>
            <LinearGradient
              colors={["transparent", "#C03EFE", "transparent"]}
              locations={[1, 0.1, 0]}
              start={{ x: 0, y: 0.1 }}
              end={{ x: 1, y: 0.5 }}
              style={styles.modalContainer}
            >
              <BlurView intensity={50}>
                <Post />
                <Post />
              </BlurView>
            </LinearGradient>
          </ScrollView>
        </DialogContent>
      </Dialog>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  topBtn: {
    marginTop: 60,
    marginBottom: 20,
    marginHorizontal: 40,
  },
  dialog: {
    top: 50,
    backgroundColor: "transparent",
    borderRadius: 17,
  },
  modalContent: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  modalContainer: {},
})
