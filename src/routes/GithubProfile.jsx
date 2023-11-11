import { useState, useEffect } from "react";
import debounce from "lodash/debounce";
import CustomInput from "../components/Input";

const GithubProfile = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);

  // Create a debounced function to delay API requests
  const fetchGithubData = debounce((inputUsername) => {
    if (inputUsername) {
      fetch(`https://api.github.com/users/${inputUsername}`)
        .then((res) => res.json())
        .then((userData) => {setData(userData)
        console.log(userData);});
    }
  }, 500); // Adjust the debounce delay as needed (e.g., 500ms)

  useEffect(() => {
    // Call the debounced function when the input changes
    fetchGithubData(username);
  }, [username, fetchGithubData]);

  return (
    <div className="h-screen p-4 rounded-lg shadow-lg text-center">
      <h1 className="text-2xl font-bold mb-4">GitHub Profile</h1>
      <div className="mb-4">
        <CustomInput
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter a GitHub username"
          className="w-full border p-2 rounded-lg"
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={() => fetchGithubData(username)}
      >
        Search
      </button>
      {data && (
        <div className="mt-4">
          <div className="mx-auto w-20 h-20 rounded-full overflow-hidden">
            <img
              src={data.avatar_url}
              alt="User avatar"
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-xl font-semibold mt-2">{data.name}</p>
          <p className="text-gray-600">@{data.login}</p>
        </div>
      )}
    </div>
  );
};

export default GithubProfile;
