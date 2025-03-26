import List from "./Components/List";
import Details from "./Components/Details";
import { useEffect, useRef, useState } from "react";

function App() {
  const [info, setInfo] = useState([]);
  const [details, setDetails] = useState({});
  const [id, setId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const timestampRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
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
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (id === null) return;
    const fetchData = async () => {
      const timestamp = Date.now();
      timestampRef.current = timestamp;
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        if (timestampRef.current === timestamp) {
          const detail = await response.json();
          setDetails(detail);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      {isLoading && (
        <div className="wrapper-loading">
          <div className="loading">...Loading...</div>
        </div>
      )}
      <div className="container">
        <List info={info} setId={setId} />
        <Details details={details} />
      </div>
    </>
  );
}

export default App;
