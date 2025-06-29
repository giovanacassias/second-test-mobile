import React from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";

type MyModalProps = {
  visibility: boolean;
  onClose: () => void;
};

export default function MyModal({ visibility, onClose }: MyModalProps) {
  return (
    <Modal
      visible={visibility}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.text}>
            Welcome to Dolera, your app to track expenses while traveling
          </Text>
          <Button color={"#FA9984"} title="got it" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "white",
    padding: 24,
    borderRadius: 12,
    width: "80%",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
    color: "#233329",
  },

  button: {
    backgroundColor: "#FA9984",
  },
});
