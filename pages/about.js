// 라우터를 별도 설정하지 않아도, 링크 끝에 /about을 붙이면 이 페이지가 보임

import Seo from '../components/Seo';

export default function Aboout() {
  return (
    <div>
      <Seo title="About" />
      <h1>About</h1>
    </div>
  );
}
