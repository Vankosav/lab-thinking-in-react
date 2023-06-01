// App.js
import './App.css';
import ProductsPage from './components/ProductsPage';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';


function App() {
  return (
    <div className="App">
      <ProductsPage />
      <SearchBar/>
      <ProductTable/>
    </div>
  );
}

export default App;
