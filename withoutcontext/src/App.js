import './App.css';
import MyPage from './components/without_context/MyPage';
import MyPageContext from './components/with_context/MyPageContext'

function App() {
  return (
    <div className='App'>
      <h1>React Context API</h1>
      <hr />
      <a href='http://es.reactjs.org/docs/context.html'></a>
      <div><MyPage /></div>
      <hr />
      <div><MyPageContext /></div>
    </div>
  );
}

export default App;
