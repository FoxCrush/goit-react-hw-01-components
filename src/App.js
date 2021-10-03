// import './App.css';
import userData from './json-data/user.json';
import CreateUserCard from './components/CreateUserCard';
import statisticsData from './json-data/statistical-data.json';
import StatisticList from './components/statisticList';
import { Fragment } from 'react';

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
