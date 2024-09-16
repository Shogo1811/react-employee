import React, { useState } from 'react';
import { createEmployee, Employee } from '../services/api';
import './AddEmployee.css';

const AddEmployee: React.FC = () => {
  const [employee, setEmployee] = useState<Employee>({
    name: '',
    gender: '',
    hire_year: new Date().getFullYear(),
    address: '',
    department: '',
    others: '',
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createEmployee(employee);
    alert('Employee added!');
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>Add New Employee</h2>
      <div className="form-group">
        <label>Name</label>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Gender</label>
        <input type="text" name="gender" placeholder="Gender" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Hire Year</label>
        <input type="number" name="hire_year" placeholder="Hire Year" value={employee.hire_year} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input type="text" name="address" placeholder="Address" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Department</label>
        <input type="text" name="department" placeholder="Department" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Others</label>
        <textarea name="others" placeholder="Others" onChange={handleChange} />
      </div>
      <button className="submit-button" type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployee;
