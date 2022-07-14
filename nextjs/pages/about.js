import Head from "next/head";
const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="keywords" content="nextjs" />
      </Head>
      <h1>About</h1>
      <p>
        Annotation은 클래스와 메서드에 추가하여 다양한 기능을 부여하는 역할을
        합니다. Annotation을 활용하여 Spring Framework는 해당 클래스가 어떤
        역할인지 정하기도 하고, Bean을 주입하기도 하며, 자동으로 getter나
        setter를 생성하기도 합니다. 특별한 의미를 부여하거나 기능을 부여하는 등
        다양한 역할을 수행할 수 있습니다.
      </p>
    </div>
  );
};

export default About;
