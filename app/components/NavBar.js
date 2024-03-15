import style from "../Style/nav-bar.module.css";
export const NavBar = () => {
  return (
    <>
      <ul className={style.navBarMain}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
        </ul>
      </div>
    </>
  );
};
