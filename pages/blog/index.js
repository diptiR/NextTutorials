import styles from "./blog.module.css";

function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li className={styles.li} key={post.id}><a href={`posts/${post.id}`}>{post.title}</a></li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    revalidate: 10,
    props: {
      posts,
    }
  };
}

export default Blog;
