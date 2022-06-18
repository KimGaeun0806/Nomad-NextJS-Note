import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();

  return (
    // Link는 앱 내에서 페이지를 navigate할 때 사용하는 컴포넌트. Next.js 앱의 client side navigation을 제공함.
    // Link에는 href만 넣을 수 있고, style이나 className같은 것들을 전달할 수 x. 나머지는 모두 a 태그에 넣어야 함.

    // Styled jsx 방식
    <nav>
      <Link href="/">
        <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
      {/* 다른 컴포넌트와 className이 중복돼도 상관 x */}
      {/* 스타일이 컴포넌트 내부로 범위가 한정됨 */}
      {/* color: ${props.color}; 처럼 props를 사용할 수 있음 */}
      {/* <style jsx global>과 같이 쓰면 glbal style이 적용되지만, 다른 페이지에는 적용되지 않음 (그 페이지 안의 컴포넌트에만 적용됨) */}
    </nav>

    // CSS Modules 방식
    // <nav className={styles.nav}>
    //   <Link href="/">
    //     <a className={`${styles.link} ${router.pathname === '/' ? styles.active : ''}`}>
    //       Home
    //     </a>
    //     {/* className={`${} ${}`} 형식으로 className 여러 개 적용 */}
    //   </Link>
    //   <Link href="/about">
    //     <a className={[styles.link, router.pathname === '/about' ? styles.active : '',].join(' ')}>
    //       About
    //     </a>
    //     {/* 배열에 className을 넣은 후 join(' ') 사용 */}
    //   </Link>
    // </nav>
  );
}
