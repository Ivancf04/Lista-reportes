import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 2,
  },
  container: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },
  section: {
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  status: {
    marginTop: 8,
    fontSize: 15,
    color: "#555",
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    minHeight: 120,
    textAlignVertical: "top",
    padding: 10,
    fontSize: 15,
    backgroundColor: "#f9f9f9",
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: 45,
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    alignItems: "center",
  },
  buttonImg: {
    borderRadius: 10,
    width: "100%",
    height: 180,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
  },
  reportImg: {
    width: "100%", 
    height: "100%", 
    borderRadius: 10
  }
  ,
  buttonTextImg: {
    color: "Black",
    textAlign: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
  submitButton: {
    backgroundColor: "#28C74E",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 10,
  },
  submitText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  cameraContainer: {
    flex: 1,
    margin: 10,
    width: "95%",
    borderRadius: 10,
    minHeight: 600,
    overflow: "hidden",
    backgroundColor: "#ffffffff",
    marginBottom: 20,
    alignItems: "center",
    paddingTop: 20,
  },

  camera: {
    width: "100%",
    aspectRatio: 1,
  },

  cameraButtonContainer: {
    marginTop: 100,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  shutterButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 6,
    borderColor: "#5a5a5aff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },

  shutterInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#6e6e6eff",
  },
  cancelButton: {
    backgroundColor: "#ff4545ff",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 10,
    width: "30%"
  },
  cancelText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  }
});