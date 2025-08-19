
import './App.css'
import { BarChart } from './components/BarChart'
import { CounterAtom } from './components/CounterAtom'
import { CounterAtomChild } from './components/CounterAtomChild'
import { DropdownMenu } from './components/DropdownMenu';
import { FetchFact } from './components/FetchFact';
import { PropComponent } from './components/PropComponent';
import { SearchBar } from './components/SearchBar';
import { Tabs } from './components/Tabs';
import { ToDoList } from './components/ToDoList';

function App() {

  const data = [12, 25, 6, 30, 18, 22];

  const myData = "test";

  const menuItems = ["Home", "About", "Contact"]

  const tabs = [
    { label: 'Tab 1', content: <div>Content of Tab 1</div> },
    { label: 'Tab 2', content: <div>Content of Tab 2</div> },
    { label: 'Tab 3', content: <div>Content of Tab 3</div> },
  ];

  return (
    <>
      <h1>Hello World!</h1>
      <CounterAtom />
      <CounterAtomChild />
      <div style={{marginTop: "20px"}}>
      <BarChart data={data} width={500} height={300} />
      <ToDoList />
      </div>
      <PropComponent text={myData} />
      <FetchFact />
      <SearchBar />
      <DropdownMenu navItems={menuItems} />
      <Tabs tabs = {tabs} />
    </>
  )
}

export default App
