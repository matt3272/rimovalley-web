export default function About() {
  return (
    <section id="about" className="sec">
      <div className="sec-inner">
        <div className="about-layout">
          <div>
            <div className="sec-header">
              <div className="sec-ey">About</div>
              <h2 className="sec-t">신뢰할 수 있는<br />기술 파트너</h2>
            </div>
            <p className="about-desc">
              리모밸리는 앱·웹 개발과 페이먼트 시스템 구축을 전문으로 하는 IT 기업입니다.
              고객의 비전을 기술로 실현하며, 안정적이고 확장 가능한 솔루션을 제공합니다.
            </p>
            <div className="about-list">
              <div className="about-item">
                <div className="about-idx">01</div>
                <div>
                  <h4>빠른 개발 사이클</h4>
                  <p>애자일 방법론 기반의 신속하고 유연한 개발 프로세스</p>
                </div>
              </div>
              <div className="about-item">
                <div className="about-idx">02</div>
                <div>
                  <h4>보안 최우선</h4>
                  <p>금융 수준의 보안 아키텍처와 데이터 보호 체계</p>
                </div>
              </div>
              <div className="about-item">
                <div className="about-idx">03</div>
                <div>
                  <h4>장기 파트너십</h4>
                  <p>단순 외주가 아닌, 함께 성장하는 기술 파트너</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="av-grid"></div>
            <div className="av-circle"></div>
            <div className="av-circle-inner"></div>
            <div className="av-square"></div>
            <div className="av-line-h"></div>
            <div className="av-line-h av-line-h2"></div>
            <div className="av-label">Since founding</div>
            <div className="av-big">
              Build<br />
              <span>the</span><br />
              Future
            </div>
            <p className="av-sub">기술로 비즈니스의 미래를 설계합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
