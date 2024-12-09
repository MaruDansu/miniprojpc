import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Admin = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const res = await fetch("/api/auth/checkUser");
      const data = await res.json();
      if (!data.user) {
        router.push("/login");
      } else {
        setUser(data.user);
      }
    };

    checkUser();
  }, []);

  return (
    <div>
      {user ? <h1>Welcome Admin </h1> : <p>Loading...</p>}
    </div>
  );
};

export default Admin;
