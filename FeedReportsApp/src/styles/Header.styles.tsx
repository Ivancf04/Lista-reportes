import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#ffffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#70a9ffff',
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  linea: {
    height: 1,          
    backgroundColor: '#cccccc4d',
    width: '100%',      
  },
});