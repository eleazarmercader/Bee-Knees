const fakeCredentials = {
    username: "mimo_123",
    password: "MyVerySecurePassw0rd",
  };
  
  const successMessage = "Credentials are valid.";
  const errorMessage = "Credentials do not match any users.";
  
  const FakeAPI = {
    login: (username, password) => {
      let valid =
        username === fakeCredentials.username &&
        password === fakeCredentials.password;
      let message = successMessage;
      if (!valid) message = errorMessage;
      return {
        valid,
        message,
      };
    },
  };
  
  export default FakeAPI;
  export { fakeCredentials, successMessage, errorMessage };