import React, { useEffect, useState } from 'react';
import { fetchEmployees, deleteEmployee, Employee } from '../services/api';
import { useNavigate } from 'react-router-dom';
import './EmployeeList.css';

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

  //TODO 削除時React側でエラーが表示される、要修正
  const handleDelete = async (id: number) => {
    const confirmed = window.confirm("削除してもよろしいでしょうか？");
    if (confirmed) {
      try {
        await deleteEmployee(id);
        await loadEmployees();
        navigate('/');
      } catch (error) {
        console.error('削除中にエラーが発生しました:', error);
      }
    }
  };

  const handleAddEmployee = () => {
    navigate('/add-employee');
  };

  const handleEdit = (id: number) => {
    navigate(`/edit-employee/${id}`);
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
                {employee.id !== undefined && (
                  <div className="employee-actions">
                    <button className="edit-button" onClick={() => handleEdit(employee.id!)}>
                      Edit
                    </button>
                    <button className="delete-button" onClick={() => handleDelete(employee.id!)}>
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
