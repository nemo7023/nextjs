import styles from "../../styles/nextjs.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { nextjs: data },
  };
};

const Index = ({ nextjs }) => {
  return (
    <div>
      <h1>All Index</h1>
      {nextjs.map((indexlist) => (
        <Link href={"/nextjs/" + indexlist.id} key={indexlist.id}>
          <a className={styles.single}>
            <h3>{indexlist.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Index;
