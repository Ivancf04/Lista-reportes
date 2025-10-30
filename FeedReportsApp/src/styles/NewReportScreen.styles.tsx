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
  button:{
    borderRadius: 10,
    width: "100%",
    height: 45,
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    alignItems: "center",
  },
  buttonImg:{
    borderRadius: 10,
    width: "100%",
    height: 180,
    paddingVertical: 15,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
  },
  buttonTextImg:{
    color: "Black",
    textAlign: "center",
    alignSelf: "center"
  },
  buttonText:{
    color: "white",
    fontSize: 14
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
});