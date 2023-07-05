import Link from "next/link";
import Component from "./LoginBtn"
import style from "../styles/Navbar.module.css";
import LoginBtn from "./LoginBtn";

const Navbar = () => {

  return (
    <nav className={style.nav}>
      <ul className={style.navItemsLeft}>
        <li className={style.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={style.navItem}>
          <Link href="/bets">Bets</Link>
        </li>
        <li className={style.navItem}>
          <Link href="/leaderboard">Leaderboard</Link>
        </li>
      </ul>
      <ul className={style.navItemsLeft}>
        <li className={style.navItem}>
          <LoginBtn />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;