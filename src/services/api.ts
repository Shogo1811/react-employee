import axios from 'axios';

const API_URL = 'http://localhost:8081/index';

export interface Employee {
  id?: number;
  name: string;
  gender: string;
  hire_year: number;
  address: string;
  department: string;
  others: string;
  image: string;
}

export const fetchEmployees = () => axios.get<Employee[]>(`${API_URL}`);
export const createEmployee = (employee: Employee) => axios.post(`${API_URL}/create`, employee);
export const updateEmployee = (id: number, employee: Employee) => axios.put(`${API_URL}/update?id=${id}`, employee);
export const deleteEmployee = (id: number) => axios.delete(`${API_URL}/delete?id=${id}`);
export const fetchEmployeeById = (id: number) => axios.get<Employee>(`${API_URL}/detail?id=${id}`);
