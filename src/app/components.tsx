import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { useApp } from "./context";

export const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <svg aria-hidden="true" className="icon" fill="none" viewBox="0 0 20 20">
    <path d={diagonal ? "M5 15 15 5M7 5h8v8" : "M3 10h14M12 5l5 5-5 5"} />
  </svg>
);

export const Play = () => (
  <svg aria-hidden="true" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
    <path d="m6 3 10 7-10 7V3Z" />
  </svg>
);

export function ButtonLink({
  to,
  children,
  tone = "acid",
  onClick,
}: {
  to: string;
  children: ReactNode;
  tone?: "acid" | "light" | "outline" | "blue";
  onClick?: () => void;
}) {
  return (
    <Link className={`button button-${tone}`} to={to} onClick={onClick}>
      {children}
      <Arrow />
    </Link>
  );
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Focus on Camera home">
      <span className="brand-mark">FOC</span>
      <span className="brand-rule" />
      <span className="brand-name">Focus on Camera</span>
    </Link>
  );
}

function ThemeSwitch() {
  const { dark, toggleTheme } = useApp();
  return (
    <button className="theme-switch" onClick={toggleTheme} aria-label="Switch color theme">
      <span className={!dark ? "active" : ""}>Bright</span>
      <span className="switch-track" aria-hidden="true">
        <span className="switch-knob" />
      </span>
      <span className={dark ? "active" : ""}>Dark</span>
    </button>
  );
}

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { dark } = useApp();
  const location = useLocation();
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className={dark ? "app theme-dark" : "app"}>
      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/membership">Membership</NavLink>
            <NavLink to="/member/studio">Studio</NavLink>
            <NavLink to="/member/live">Live</NavLink>
          </nav>
          <div className="header-actions">
            <ThemeSwitch />
            <ButtonLink to="/membership">Become a member</ButtonLink>
          </div>
          <button
            className="menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/membership">Membership</NavLink>
            <NavLink to="/member/studio">Studio</NavLink>
            <NavLink to="/member/live">Live</NavLink>
            <NavLink to="/member">Member area</NavLink>
            <ThemeSwitch />
          </nav>
        )}
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}

const memberLinks = [
  ["Overview", "/member"],
  ["Community", "/member/community"],
  ["Studio", "/member/studio"],
  ["Live", "/member/live"],
  ["My Calendar", "/member/calendar"],
  ["Academy", "/member/academy"],
  ["Partners", "/member/partners"],
];

export function MemberLayout() {
  const { access } = useApp();
  return (
    <>
      <div className="member-shell">
        <div className="member-bar">
          <span className="eyebrow">Member area</span>
          <nav aria-label="Member navigation">
            {memberLinks.map(([label, to]) => (
              <NavLink key={to} to={to} end={to === "/member"}>
                {label}
              </NavLink>
            ))}
          </nav>
          <span className="access-pill">
            <span />
            Previewing {access}
          </span>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export function PageHero({
  kicker,
  title,
  intro,
  accent,
}: {
  kicker: string;
  title: string;
  intro: string;
  accent?: string;
}) {
  return (
    <section className="page-hero">
      <div className="film-grain" />
      <div className="page-width page-hero-inner">
        <p className="section-kicker">{kicker}</p>
        <h1>
          {title} {accent && <em>{accent}</em>}
        </h1>
        <p className="page-intro">{intro}</p>
      </div>
    </section>
  );
}

export function Modal({
  open,
  onClose,
  children,
  label,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  label: string;
}) {
  if (!open) return null;
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={label}>
      <div className="modal-panel">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          Close
        </button>
        {children}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="page-width footer-grid">
        <div>
          <Brand />
          <p>Business skills for the working life behind the camera.</p>
        </div>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/charter-150">Charter 150</Link>
          <Link to="/member/community">Community</Link>
        </div>
        <div className="footer-bottom">
          <span>International learning community</span>
          <span>Focus on Camera</span>
        </div>
      </div>
    </footer>
  );
}
