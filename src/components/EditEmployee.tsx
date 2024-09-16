import React, { useEffect, useState } from 'react';
import { fetchEmployeeById, updateEmployee, Employee } from '../services/api';
import { useParams, useNavigate } from 'react-router-dom';
import './EditEmployee.css'; // CSSファイルをインポート

const EditEmployee: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    const loadEmployee = async () => {
      const result = await fetchEmployeeById(Number(id));
      setEmployee(result.data);
    };
    loadEmployee();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (employee) {
      setEmployee({ ...employee, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (employee) {
      await updateEmployee(Number(id), employee);
      navigate('/');
    }
  };

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>Edit Employee</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={employee.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <input type="text" name="gender" value={employee.gender} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="hire_year">Hire Year</label>
        <input type="number" name="hire_year" value={employee.hire_year} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input type="text" name="address" value={employee.address} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="department">Department</label>
        <input type="text" name="department" value={employee.department} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="others">Others</label>
        <textarea name="others" value={employee.others} onChange={handleChange} />
      </div>
      <button className="submit-button" type="submit">Update Employee</button>
    </form>
  );
};

export default EditEmployee;
