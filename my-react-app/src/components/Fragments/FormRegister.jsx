import Button from "../Elements/button";
import InputForm from "../Elements/input";

const FormRegister = () => {
  return (
    <form action="" method="post">
      <InputForm
        label="Username"
        type="text"
        name="username"
        placeholder="your username"
      />
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
        placeholder="****"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        name="password"
        placeholder="****"
      />
      <Button classname="bg-blue-600  w-full">Register</Button>
    </form>
  );
};


export default FormRegister;