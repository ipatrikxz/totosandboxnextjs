"use client";

import style from "../styles/Navbar.module.css";
import Link from "next/link";
import UserProfileButton from "../components/UserProfileButton";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className={style.navRoot}>
      <div className={style.navItems}>
        <div className={style.navItemsLeft}>
          <div className={style.navItem}>
            <Link href="/">Home</Link>
          </div>

          {session && (
            <>
              <div className={style.navItem}>
                <Link href="/bets">Bets</Link>
              </div>
              <div className={style.navItem}>
                <Link href="/leaderboard">Leaderboard</Link>
              </div>
            </>
          )}
        </div>

        <div className={style.navItemsRight}>
          <UserProfileButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
