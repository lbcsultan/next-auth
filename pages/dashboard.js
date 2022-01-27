import { useSession } from "next-auth/react";
import Image from "next/image";

const Dashboard = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      return <h3> You cannot access this information... </h3>;
    },
  });

  if (status === "authenticated") {
    return (
      <div>
        <h1>Dashboard Page</h1>
        <hr />
        {session && (
          <>
            <h3>Name: {session.user.name}</h3>
            <p>Email: {session.user.email}</p>
            <p>Expires: {session.expires}</p>
            <Image src={session.user.image} alt="" width={100} height={100} />
          </>
        )}
      </div>
    );
  }

  return (
    <div>
      <h1>Dashboard Page</h1>
      <hr />
      <h3>You cannot access this information </h3>
    </div>
  );
};

export default Dashboard;
