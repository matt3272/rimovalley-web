export default function Business() {
  return (
    <section id="business" className="sec">
      <div className="sec-inner">
        <div className="sec-header c">
          <div className="sec-ey">Business</div>
          <h2 className="sec-t">사업영역</h2>
        </div>
        <div className="biz-grid">
          {/* Card 1 - App */}
          <div className="biz-card">
            <div className="biz-gfx biz-gfx-app">
              <div className="biz-gfx-bg"></div>
              <div className="phone">
                <div className="phone-screen">
                  <div className="phone-line"></div>
                  <div className="phone-line"></div>
                  <div className="phone-line"></div>
                  <div className="phone-block"></div>
                </div>
              </div>
              <div className="dots">
                <span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span>
              </div>
            </div>
            <div className="biz-body">
              <div className="biz-num">01</div>
              <h3>앱 개발</h3>
              <p>iOS, Android 네이티브 및 크로스플랫폼 앱 개발. UX 중심 설계부터 배포·유지보수까지 원스톱으로 제공합니다.</p>
              <div className="biz-tags">
                <span className="biz-tag">iOS</span>
                <span className="biz-tag">Android</span>
                <span className="biz-tag">Flutter</span>
                <span className="biz-tag">React Native</span>
              </div>
            </div>
          </div>

          {/* Card 2 - Payment */}
          <div className="biz-card">
            <div className="biz-gfx biz-gfx-pay">
              <div className="biz-gfx-bg"></div>
              <div className="card-mock">
                <div className="card-chip"></div>
                <div className="card-lines"><span></span><span></span></div>
              </div>
              <div className="shield"></div>
            </div>
            <div className="biz-body">
              <div className="biz-num">02</div>
              <h3>페이먼트 시스템</h3>
              <p>PCI DSS 준수 결제 시스템 설계·구축. PG 연동, 간편결제, 정기결제 등 안전한 결제 인프라를 구축합니다.</p>
              <div className="biz-tags">
                <span className="biz-tag">PG 연동</span>
                <span className="biz-tag">간편결제</span>
                <span className="biz-tag">정기결제</span>
                <span className="biz-tag">보안</span>
              </div>
            </div>
          </div>

          {/* Card 3 - Web */}
          <div className="biz-card">
            <div className="biz-gfx biz-gfx-web">
              <div className="biz-gfx-bg"></div>
              <div className="browser">
                <div className="browser-bar">
                  <span></span><span></span><span></span>
                </div>
                <div className="browser-body">
                  <div className="browser-side">
                    <span></span><span></span><span></span><span></span>
                  </div>
                  <div className="browser-main">
                    <div className="browser-block"></div>
                    <div className="browser-row">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="biz-body">
              <div className="biz-num">03</div>
              <h3>웹 개발</h3>
              <p>반응형 웹사이트, SaaS 플랫폼, 어드민 대시보드 등 목적에 최적화된 웹 솔루션을 구축합니다.</p>
              <div className="biz-tags">
                <span className="biz-tag">React</span>
                <span className="biz-tag">Next.js</span>
                <span className="biz-tag">SaaS</span>
                <span className="biz-tag">Dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
