function Eye({ side }) {
  return (
    <div className={`eye eye--${side}`} aria-hidden="true">
      <span className="eye__pupil" />
      <span className="eye__highlight" />
    </div>
  );
}

function App() {
  return (
    <main
      className="artwork"
      aria-label="검은 배경 위에서 깜빡이는 두 눈과 움직이는 컬러 음표"
    >
      <Eye side="left" />
      <Eye side="right" />

      <img className="note note--large" src="/assets/tear-large.svg" alt="" />
      <img className="note note--medium" src="/assets/tear-medium.svg" alt="" />
      <img className="note note--small" src="/assets/tear-small.svg" alt="" />
    </main>
  );
}

export default App;
