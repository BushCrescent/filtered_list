import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    axios
      .get("https://random-data-api.com/api/users/random_user?size=100")
      .then((res) => {
        console.log("data", res);
        setEmployees(res.data);
      });
  }, []);

  const renderEmployees = () => {
    let result = null;

    console.log(employees);

    if (employees) {
      result = employees.map((employee) => {
        return <div>{employee.first_name}</div>;
      });
    }

    return result;
  };

  return (
    <div className="App">
      <>{renderEmployees()}</>
    </div>
  );
}

export default App;