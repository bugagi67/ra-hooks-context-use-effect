import List from "./Components/List";
import Details from "./Components/Details";
import { useEffect, useState } from "react";

function App() {
  const [info, setInfo] = useState([]);
  const [details, setDetails] = useState({});
  const [id, setId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json`
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const list = await response.json();
        setInfo(list);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (id === null) return;
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const detail = await response.json();
        setDetails(detail);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="container">
      <List info={info} setId={setId} />
      <Details details={details} />
    </div>
  );
}

export default App;
