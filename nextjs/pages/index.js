import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name="keywords" content="nextjs" />
      </Head>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        정규표현식 문자열의 data가 주어지고 해당 data 안에 특정 문자 또는 단어,
        문장과 같은 내용에 접근해야할때 정규표현식을 사용할 수 있다. 간단하게
        문자열을 변형하는 함수 구현에선 단순히 backtick, '', ""를 사용하여
        접근하고 싶은 문자열을 직접 입력할 수 있지만 많은 양의 문장 또는 글에서
        찾아야하는 문자를 일일이 입력하고 또 그에 따른 조건문도 늘어 직접
        입력하기엔 단순 노동이 될 수 있다. 물론 아직 내 얕은 지식으로 알지
        못하는 다른 방법 또한 존재할 수도 있겠지만 일단은 정규표현식 패턴을
        활용하면 이러한 번거로움을 줄일 수 있다
      </p>
      <Link href="/nextjs">
        <a className={styles.btn}>go to Index</a>
      </Link>
    </div>
  );
}
