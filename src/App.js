import { useState } from 'react';
import SearchBar from './components/searchBar';
import style from './AppStyle.css'

const homeworks = [
  {id: "Tarea-01", title: "Bañarte y cambiarte"},
  {id: "Tarea-02", title: "Comer"},
  {id: "Tarea-03", title: "Hacer la tarea"},
  {id: "Tarea-04", title: "Ayudar en el aseo"},
  {id: "Tarea-05", title: "Jugar xbox 1 hora"},
  {id: "Tarea-06", title: "Ir al gym"},
  {id: "Tarea-07", title: "Terminar el proyecto"},
  {id: "Tarea-08", title: "Traer las cosas para la cena"},
  {id: "Tarea-09", title: "Hacer la cena"},
  {id: "Tarea-10", title: "Dormir"},
];

const movies = [
  {id: "movie-01", title: "Secreto En La Montaña"},
  {id: "movie-02", title: "¿Podrias perdonarme algun dia?"},
  {id: "movie-03", title: "Rojo Blanco, Sangre Azul"},
  {id: "movie-04", title: "Fire Island"},
  {id: "movie-05", title: "Yo Antes De Ti"},
  {id: "movie-06", title: "TransAmerica"},
  {id: "movie-07", title: "Precious"},
  {id: "movie-08", title: "Plegarias Para Bobbie"},
  {id: "movie-09", title: "No me quiero ir solito"},
  {id: "movie-10", title: "El Diablo Viste A La Moda"},
];

const songs = [
  {id: "song-01", title: "Born This Way"},
  {id: "song-02", title: "Firework"},
  {id: "song-03", title: "Express Your Self"},
  {id: "song-04", title: "Vogue"},
  {id: "song-05", title: "Bad Romance"},
  {id: "song-06", title: "Poker Face"},
  {id: "song-07", title: "Someone Like You"},
  {id: "song-08", title: "SkyFall"},
  {id: "song-09", title: "Hung Up"},
  {id: "song-10", title: "Wide Awake"},
]


function App() {
  const [data, setData] = useState([...homeworks, ...movies, ...songs]);

  const [selection, setSelection] = useState(null);

  const [currentOption, setCurrentOption] = useState('all');

  const [count, setCount] = useState(0);

  function handleClick(e) {
    const op = e.target.name;

    switch (op) {
      case "all" :
        setData([...homeworks, ...movies, ...songs]);
        setCurrentOption('all');
        break;

      case "homeworks":
        setData([...homeworks]);
        setCurrentOption('homeworks');
        break;
        
      case "movies":
          setData([ ...movies]);
          setCurrentOption('movies');
          break;

      case "songs":
            setData([...songs]);
            setCurrentOption('songs');
            break;

            default:
    }
  }

  function handleItemSelected(item) {
    setSelection(item);
  }

  return (
    <div className='container-btn'>
      <button className='btn-all' style={style} onClick={handleClick} name='all' >All</button>
      <button className='btn-homework' style={style} onClick={handleClick} name='homeworks' >Homeworks</button>
      <button className='btn-movie' style={style} onClick={handleClick} name='movies' >Movies</button>
      <button className='btn-song' style={style} onClick={handleClick} name='songs' >Songs</button>
      {selection ? <div>Seleccionaste: {selection.title}</div> : ''}
      <SearchBar items={data} onItemSelected={handleItemSelected}/>


    </div>
  );
}

export default App;
