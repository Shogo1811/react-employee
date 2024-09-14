import React, { useState } from 'react';
import { createEmployee, Employee } from '../services/api';

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
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="text" name="gender" placeholder="Gender" onChange={handleChange}  required/>
      <input type="number" name="hire_year" placeholder="Hire Year" value={employee.hire_year} onChange={handleChange}  />
      <input type="text" name="address" placeholder="Address" onChange={handleChange}  />
      <input type="text" name="department" placeholder="Department" onChange={handleChange}  />
      <textarea name="others" placeholder="Others" onChange={handleChange} />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployee;
