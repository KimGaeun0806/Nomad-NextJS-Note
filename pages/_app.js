import '../styles/globals.css';
import Layout from '../components/Layout';
// import NavBar from '../components/NavBar';

// Global Styles 적용
// NextJS는 다른 페이지들을 확인하기 이전에 _app.js를 확인함 -> _app.js 확인 후 다른 페이지들 내용 렌더링

export default function App({ Component, pageProps }) {
  // Component는 렌더링하기를 원하는 페이지
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

    // <Layout>적용하기 이전
    // <>
    //   {/* 모든 페이지에 보여짐, 모든 페이지에 적용됨 */}
    //   <NavBar />
    //   <Component {...pageProps} />
    //   <style jsx global>{`
    //     a {
    //       color: white;
    //     }
    //   `}</style>
    // </>
  );
}
