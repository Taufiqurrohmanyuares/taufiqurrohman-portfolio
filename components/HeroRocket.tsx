/** Roket kecil yang lepas landas dari kiri bawah ke kanan atas, berulang. Murni CSS (lihat ".rocket-lane" di globals.css). */
export default function HeroRocket() {
  return (
    <div className="rocket-lane" aria-hidden="true">
      <span className="puff" /><span className="puff" /><span className="puff" />
      <div className="rk-x"><div className="rk-y"><div className="rk-rot">
        <span className="rk-flame" />
        <svg viewBox="0 0 48 24" fill="none">
          <path className="rk-b" d="M16 6 6 1l4 11-4 11 10-5Z" />
          <path className="rk-b" d="M45 12C39 3 29 3 13 5v14c16 2 26 2 32-7Z" />
          <circle className="rk-w" cx="30" cy="12" r="3" />
        </svg>
      </div></div></div>
    </div>
  );
}