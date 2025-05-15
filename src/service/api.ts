import axios from 'axios';
const URL = 'https://my-json-server.typicode.com/your/repo/services';

export const fetchServices = () => axios.get(URL);
export const addService = (svc: any) => axios.post(URL, svc);
export const updateService = (id: string, svc: any) => axios.put(`${URL}/${id}`, svc);
export const deleteService = (id: string) => axios.delete(`${URL}/${id}`);
