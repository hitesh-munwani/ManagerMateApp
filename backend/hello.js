const handleLogin = () => {
    // Validate input fields here if needed
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
  
    axios
      .post("http://192.168.0.105:5000/login", { // Use your local IP address here
        email: email,
        password: password,
      })
      .then(response => {
        console.log(response.data);
        if (response.data.message === "Login successful") {
          // Navigate to HomeScreen upon successful login
          navigation.navigate("Home");
        } else {
          alert("Invalid email or password");
        }
      })
      .catch(error => {
        console.error("There was an error logging in!", error);
        if (error.response) {
          // The request was made and the server responded with a status code
          alert(`Error: ${error.response.data.message}`);
        } else if (error.request) {
          // The request was made but no response was received
          alert("No response received from server. Check if the server is running and reachable.");
        } else {
          // Something happened in setting up the request that triggered an Error
          alert("Error in setting up the request: " + error.message);
        }
      });
  };
  