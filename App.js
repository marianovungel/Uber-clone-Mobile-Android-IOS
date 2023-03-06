import { Text, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import Home from "./Screens/Home";
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

