import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import './index.css';
import appStore from './utils/redux-store/appStore';

function App() {
  return (
    <Provider store={appStore}><Body /></Provider>
  );
}


export default App;
