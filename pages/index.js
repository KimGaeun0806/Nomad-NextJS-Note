import { useEffect, useState } from 'react';
import Seo from '../components/Seo';

// 라이브러리 -> 내가 사용하는 것. 내가 라이브러리를 불러오고 사용하는 것. 원하는 대로 코드를 작성할 수 있음. 자유도 높음.
// 프레임워크 -> 프레임워크가 내 코드를 불러옴. 내가 적절한 위치에 코드를 적기만 하면, 프레임워크는 내 코드를 불러와서 동작시킴. 특정한 규칙 존재.

// ReactJS -> CSR(Client Side Rendering). 브라우저(client side의 JS)가 유저가 보는 모든 UI를 만듦. 연결이 느리다면 처음에는 흰 화면만 보일 수 있음.
// NextJs -> SSR(Server Side Rendering). 연결이 느리거나 JS가 비활성화되어 있어도 html 요소들은 보임.

// import react from "react"; 쓸 필요 x
// index 폴더는 앱의 홈
// 앱의 페이지들이 미리 렌더링(pre-rendering)됨. 정적(static)으로 생성됨.
// hydration -> Next.js는 React.js를 백엔드에서 동작시켜서 페이지를 미리 만들고, 이게 컴포넌트들을 렌더함. 렌더링이 끝나면 html이 되고 Next.js는 그 html을 페이지의 소스코드에 넣음.

const API_KEY = '0918740fd7853b6d014ebaa5fe8f061c';

export default function Home() {
  // 파일 이름은 url에 그대로 들어가지만, 컴포넌트 이름은 중요하지 않음
  // export default를 하지 않으면 에러 발생

  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      // 가져온 데이터 객체에서 results를 사용하기 위해 { results }라고 씀
      setMovies(results);
    })();
  }, []);

  return (
    <div className="container">
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {/* movies가 존재하지 않을 때 Loading... 띄움 */}
      {movies?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      {/* ? 를 넣어서 movies가 존재하지 않으면 map이 실행되지 않도록 함 */}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
