export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-gfx">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-blob hero-blob-3"></div>
        <div className="hero-grid"></div>
        <div className="hero-ring hero-ring-1"></div>
        <div className="hero-ring hero-ring-2"></div>
        <div className="hero-dots"></div>
      </div>
      <div className="hero-inner">
        <div className="hero-label">Digital Innovation Partner</div>
        <h1>
          기술의 힘으로,<br />
          비즈니스를 앞으로 <em>— RimoValley</em>
        </h1>
        <p className="hero-desc">
          앱·웹 개발부터 페이먼트 시스템 구축까지,<br />
          비즈니스의 디지털 전환을 설계하고 실현합니다.
        </p>
        <div className="hero-actions">
          <a href="#business" className="btn-blue">사업영역 보기</a>
          <a href="#contact" className="btn-o">프로젝트 상담</a>
        </div>
      </div>
    </section>
  );
}
