import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BiHomeHeart } from "react-icons/bi";
import { MdOutlineEditNote } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";

const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <Link to="/">
        <BiHomeHeart />
        ホーム
      </Link>

      {!isAuth ? (
        <Link to="/login">
          <AiOutlineLogin />
          ログイン
        </Link>
      ) : (
        <>
          <Link to="/createpost">
            <MdOutlineEditNote />
            記事投稿
          </Link>
          <Link to="/logout">
            <AiOutlineLogin />
            ログアウト
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
