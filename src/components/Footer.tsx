export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot__inner">
        <div className="foot__left">
          <span className="google-dots" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span>© {new Date().getFullYear()} EverKrypton — crafted with Chrome energy</span>
        </div>
        <p className="foot__right">
          Built with React · Vite · TypeScript · <a className="foot__top" href="#top">Back to top</a>
        </p>
      </div>
    </footer>
  );
}
