export default function Contact() {
  return (
    <section id="contact" className="sec">
      <div className="sec-inner">
        <div className="contact-grid">
          <div>
            <div className="sec-header">
              <div className="sec-ey">Contact</div>
              <h2 className="sec-t">프로젝트를<br />시작해볼까요?</h2>
            </div>
            <p className="contact-desc">
              아이디어가 있다면 언제든 연락해 주세요.<br />
              최적의 솔루션을 함께 찾아드리겠습니다.
            </p>
            <div className="contact-rows">
              <div className="contact-row">
                <div>
                  <h4>이메일</h4>
                  <p>kanggadi@nate.com</p>
                </div>
              </div>
              <div className="contact-row">
                <div>
                  <h4>전화</h4>
                  <p>070-7655-4391</p>
                </div>
              </div>
              <div className="contact-row">
                <div>
                  <h4>주소</h4>
                  <p>서울특별시 강남구 개포로 623 (개포동, 태청타워 1924호)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <div className="fm">
              <label>이름</label>
              <input type="text" placeholder="홍길동" />
            </div>
            <div className="fm">
              <label>이메일</label>
              <input type="email" placeholder="example@email.com" />
            </div>
            <div className="fm">
              <label>프로젝트 내용</label>
              <textarea placeholder="프로젝트에 대해 간단히 알려주세요"></textarea>
            </div>
            <button className="fm-btn">문의 보내기</button>
          </div>
        </div>
      </div>
    </section>
  );
}
