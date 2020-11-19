import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { param } = router.query;

  return (
    <div>
      <p>Post: {param}</p>
    </div>
  );
};

export default Post;
