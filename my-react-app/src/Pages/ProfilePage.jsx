import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();
  return (
    <div className="">
      <h1>Hello World</h1>
      <h1>{username}</h1>
    </div>
  );
};

export default ProfilePage;
