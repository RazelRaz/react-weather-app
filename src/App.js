import './App.css';
import Current_weather from './components/Current_weather/Current_weather';
import Search from './components/Search/Search';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}></Search>
      <Current_weather></Current_weather>
    </div>
  );
}

export default App;
