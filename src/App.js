import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://randomuser.me/api/?page=${page}&results=10`
        );
        setUsers((users) => [...users, ...response.data.results]);
        setErrorMsg("");
      } catch (error) {
        setErrorMsg("Error while loading data. Try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    loadUsers();
  }, [page]);

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  return (
    <div className='main-section'>
      <Header />
      {isLoading && <Loader />}
      {errorMsg && <p className='errorMsg'>{errorMsg}</p>}
      <UsersList users={users} />
      <div className='load-more'>
        <button onClick={loadMore} className='btn-grad'>
          {isLoading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
}

export default App;
