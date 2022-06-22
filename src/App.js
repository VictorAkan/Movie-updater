// import logo from './logo.svg';
import './App.css';
import useMovieDb from "./hooks/useMovie";
import AddMovie from './views/AddMovie';
import TableList from './views/TableList';

function App() {
  const { data, addMovie } = useMovieDb()
  return (
    <div className="App">
      <AddMovie addMovie={addMovie} />
      <TableList data={data} />
    </div>
  );
}

export default App;
