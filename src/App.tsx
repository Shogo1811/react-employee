import React from 'react';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Employee Management</h1>
      <AddEmployee />
      <EmployeeList />
    </div>
  );
};

export default App;
