export default function Strip() {
  return (
    <div className="strip">
      <div className="strip-inner">
        <div className="strip-grid">
          {/* Development */}
          <div className="strip-item strip-dev">
            <div className="code-lines">
              <div className="cl cl-1"></div>
              <div className="cl cl-2"></div>
              <div className="cl cl-3"></div>
              <div className="cl cl-4"></div>
              <div className="cl cl-5"></div>
              <div className="cl cl-6"></div>
              <div className="cl cl-7"></div>
              <div className="cl cl-8"></div>
              <div className="cl cl-9"></div>
              <div className="cl cl-10"></div>
              <div className="cl cl-11"></div>
              <div className="cl cl-12"></div>
            </div>
            <div className="bracket">{`{ }`}</div>
            <span className="strip-label">Development</span>
          </div>

          {/* Infrastructure */}
          <div className="strip-item strip-infra">
            <div className="nodes">
              <div className="node node-1"></div>
              <div className="node node-2"></div>
              <div className="node node-3"></div>
              <div className="node-center"></div>
              <div className="conn"></div>
              <div className="conn conn-2"></div>
            </div>
            <span className="strip-label">Infrastructure</span>
          </div>

          {/* Security */}
          <div className="strip-item strip-sec">
            <div className="hex"></div>
            <div className="lock">
              <div className="lock-arc"></div>
              <div className="lock-body">
                <div className="lock-dot"></div>
              </div>
            </div>
            <span className="strip-label">Security</span>
          </div>

          {/* Partnership */}
          <div className="strip-item strip-part">
            <div className="pulse-ring"></div>
            <div className="pulse-ring pulse-ring-2"></div>
            <div className="handshake">
              <div className="h-bar"></div>
              <div className="h-bar"></div>
            </div>
            <span className="strip-label">Partnership</span>
          </div>
        </div>
      </div>
    </div>
  );
}
