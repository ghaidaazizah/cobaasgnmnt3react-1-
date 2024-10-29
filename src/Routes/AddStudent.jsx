import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function AddStudent() {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    fullname: '',
    profilePicture: '',
    address: '',
    phoneNumber: '',
    birthDate: '',
    gender: '',
    programStudy: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const facultyMap = {
      Ekonomi: 'Fakultas Ekonomi',
      Manajemen: 'Fakultas Ekonomi',
      Akuntansi: 'Fakultas Ekonomi',
      'Administrasi Publik': 'Fakultas Ilmu Sosial dan Politik',
      'Administrasi Bisnis': 'Fakultas Ilmu Sosial dan Politik',
      'Hubungan Internasional': 'Fakultas Ilmu Sosial dan Politik',
      'Teknik Sipil': 'Fakultas Teknik',
      Arsitektur: 'Fakultas Teknik',
      Matematika: 'Fakultas Teknologi Informasi dan Sains',
      Fisika: 'Fakultas Teknologi Informasi dan Sains',
      Informatika: 'Fakultas Teknologi Informasi dan Sains'
    };
    const faculty = facultyMap[formData.programStudy] || '';
    
    await fetch('http://localhost:3001/student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData, faculty }),
    });

    navigate('/student'); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="fullname" 
        data-testid="name" 
        onChange={handleChange} 
        placeholder="Fullname" 
        required 
      />
      <input 
        type="text" 
        name="profilePicture" 
        data-testid="profilePicture" 
        onChange={handleChange} 
        placeholder="Profile Picture URL" 
        required 
      />
      <input 
        type="text" 
        name="address" 
        data-testid="address" 
        onChange={handleChange} 
        placeholder="Address" 
        required 
      />
      <input 
        type="text" 
        name="phoneNumber" 
        data-testid="phoneNumber" 
        onChange={handleChange} 
        placeholder="Phone Number" 
        required 
      />
      <input 
        type="date" 
        name="birthDate" 
        data-testid="date" 
        onChange={handleChange} 
        required 
      />
      <select name="gender" data-testid="gender" onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <select name="programStudy" data-testid="prody" onChange={handleChange} required>
        <option value="">Select Program Study</option>
        <option value="Ekonomi">Ekonomi</option>
        <option value="Manajemen">Manajemen</option>
        <option value="Akuntansi">Akuntansi</option>
        <option value="Administrasi Publik">Administrasi Publik</option>
        <option value="Administrasi Bisnis">Administrasi Bisnis</option>
        <option value="Hubungan Internasional">Hubungan Internasional</option>
        <option value="Teknik Sipil">Teknik Sipil</option>
        <option value="Arsitektur">Arsitektur</option>
        <option value="Matematika">Matematika</option>
        <option value="Fisika">Fisika</option>
        <option value="Informatika">Informatika</option>
      </select>
      <button type="submit" data-testid="add-btn">Add Student</button>
    </form>
  );
}

export default AddStudent;
