import Button from "../Elements/button";
import InputForm from "../Elements/input";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    console.log("login");
    window.location.href = "/products";
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@mail.com"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="password"
      />
      <Button classname="bg-blue-600  w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
