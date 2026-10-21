export const Logo = ({ className = "h-9 w-9 text-black" }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className={className}
    aria-hidden="true"
    data-testid="logo-mark"
  >
    <circle cx="32" cy="32" r="27" />
    <ellipse cx="32" cy="32" rx="27" ry="11" transform="rotate(45 32 32)" />
    <ellipse cx="32" cy="32" rx="27" ry="11" transform="rotate(-45 32 32)" />
  </svg>
);
