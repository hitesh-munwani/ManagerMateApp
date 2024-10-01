import axios from "axios"; // Make sure to import axios at the top

const handleLogin = () => {
  // Check if email and password are provided
  if (!email.trim()) {
    alert("Please enter your email address.");
    return;
  }

  if (!password.trim()) {
    alert("Please enter your password.");
    return;
  }

  // If email and password are provided, proceed with the login request
  axios
    .post("http://192.168.1.100:5000/login", {
      email: email,
      password: password,
    })
    .then((response) => {
      console.log(response.data);
      if (response.data.message === "Login successful") {
        // Navigate to HomeScreen upon successful login
        navigation.navigate("Home");
      } else {
        alert("Invalid email or password.");
      }
    })
    .catch((error) => {
      console.error("There was an error logging in!", error.message);
      alert("An error occurred. Please check the console for more details.");
    });
};
