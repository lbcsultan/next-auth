import { getSession, useSession } from "next-auth/react";

const Blog = ({ data }) => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      return <h3> You cannot access this information... </h3>;
    },
  });

  return (
    <div>
      <h1>Blog Page</h1>
      <h3>{data}</h3>
    </div>
  );
};

export default Blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callback=/blog`,
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: session ? "List of 100 personalized blogs" : "List of free blogs",
    },
  };
}
