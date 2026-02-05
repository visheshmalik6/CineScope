import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Vishesh Malik. All rights reserved.
      </p>
      <p>
        Built by{" "}
        <a
          href="https://visheshmalik6.github.io/MyPortfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vishesh Malik (Portfolio)
        </a>
      </p>
    </footer>
  );
}
