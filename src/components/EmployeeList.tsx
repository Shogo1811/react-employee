import React, { useEffect, useState } from 'react';
import { fetchEmployees, deleteEmployee, Employee } from '../services/api';

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await fetchEmployees();
    setEmployees(result.data);
  };

  const handleDelete = async (id: number) => {
    await deleteEmployee(id);
    loadEmployees();
  };

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name}
            {employee.gender}
            {employee.hire_year}
            {employee.address}
            {employee.department}
            {employee.others}
            {employee.image}
            {/* <button onClick={() => handleDelete(employee.id!)}>Delete</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
