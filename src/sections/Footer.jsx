const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/Badr-Ahmed12" className="social-icon" target="_blank" rel="noopener noreferrer">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a href="https://x.com/badr_iso37339/" className="social-icon" target="_blank" rel="noopener noreferrer">
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </a>
        <a href="https://www.linkedin.com/in/badr-ahmed-872541338/" className="social-icon" target="_blank" rel="noopener noreferrer">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
      </div>

      <time className="text-white-500" dateTime={new Date().getFullYear()}>
        © {new Date().getFullYear()} Badr Ahmed. All rights reserved.
      </time>
    </footer>
  );
};

export default Footer;

