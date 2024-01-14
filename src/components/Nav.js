function Nav(pr) {
  return (
    <nav className="main-nav">
      <ul>
        <li>{pr.value1}</li>
        <li>{pr.value2}</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
export default Nav;
