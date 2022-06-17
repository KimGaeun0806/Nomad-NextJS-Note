import NavBar from './NavBar';

// _app.js가 너무 커지지 않게 하기 위해서

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
