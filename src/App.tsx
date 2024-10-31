// src/App.jsx

import { useEffect, useState } from 'react';

interface Employee {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    medium: string; // ou 'large', dependendo do que você estiver usando
  };
}

interface EmployeeResponse {
  results: Employee[];
}

const App = () => {
  const [employeeData, setEmployeeData] = useState<EmployeeResponse | null>(null);

  useEffect(() => {
    fetch("http://localhost:3310/api/employees")
      .then(response => response.json())
      .then(data => {
        console.log(data); // Para verificar a resposta
        setEmployeeData(data); // Armazena os dados no estado
      })
      .catch(error => console.error("Erro ao buscar dados:", error));
  }, []); // [] significa que o efeito será executado apenas uma vez, quando o componente for montado.

  return (
    <div>
      <h1>Dados do Funcionário</h1>
      {employeeData ? (
        <div>
          <p>Nome: {employeeData.results[0].name.first} {employeeData.results[0].name.last}</p>
          <p>Email: {employeeData.results[0].email}</p>
          <img src={employeeData.results[0].picture.medium} alt="Employee" />
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default App;
