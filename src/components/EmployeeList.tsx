import React, { useEffect, useState } from 'react';
import { fetchEmployees, deleteEmployee, Employee } from '../services/api';
import { useNavigate } from 'react-router-dom';
import './EmployeeList.css'; // 外部CSSファイルをインポート

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const navigate = useNavigate();

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

  const handleAddEmployee = () => {
    navigate('/add-employee');
  };

  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <button className="add-button" onClick={handleAddEmployee}>
        Add Employee
      </button>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Hire Year</th>
            <th>Address</th>
            <th>Department</th>
            <th>Others</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.gender}</td>
              <td>{employee.hire_year}</td>
              <td>{employee.address}</td>
              <td>{employee.department}</td>
              <td>{employee.others}</td>
              <td>
                <img src={employee.image} alt={employee.name} className="employee-image" />
              </td>
              <td>
                <button className="delete-button" onClick={() => handleDelete(employee.id!)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
