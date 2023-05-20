import './App.css';
import { List } from './components/list';
import { Watch } from './components/watch';
import { useAppDispatch, useAppSelector } from './hooks/store';
import { selectSettings, setLang } from './service/settings-slice';

function App() {
  const dispatch = useAppDispatch()
  const { lang } = useAppSelector(selectSettings);
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => dispatch(setLang(e.target.value));
  return (
    <div className="App">
      <header className="App-header flex flex-row justify-between p-8 items-center">
        <Watch />
        <div className='lang'>
          <select className='text-gray-600 text-md' onChange={handleSelect} value={lang} >
            <option value={'ru'}>RU</option>
            <option value={'en'}>EN</option>
          </select>
        </div>
      </header>
      <div className='content'>
        <List />
      </div>
    </div>
  );
}

export default App;
