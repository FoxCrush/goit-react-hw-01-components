// import './App.css';
import userData from './json-data/user.json';
import CreateUserCard from './components/usercard';
import statisticsData from './json-data/statistical-data.json';
import StatisticList from './components/statisticList/statisticList';
import { Fragment } from 'react';

// const colors = ['blue', 'purple', 'red', 'teal'];

function App() {
  return (
    <Fragment>
      <div>
        <CreateUserCard {...userData} />
      </div>
      ;
      <StatisticList items={statisticsData} />
    </Fragment>
  );
}

export default App;
