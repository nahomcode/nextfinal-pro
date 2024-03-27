import style from "../Style/nav-bar.module.css";
export const NavBar = () => {
  return (
    <>
      <ul className={style.navBarMain}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </>
  );
};
