/* eslint-disable no-undef */
const header = {
  render() {
    return `
    <div class="inner">
      <h1 class="logo">
        <a href="/">web portfolio</a>
      </h1>

      <nav class="nav">
        <ul class="nav__menu">
          <li class="nav__menu--li">
            <a href="" class="active">Home</a>
          </li>
          <li class="nav__menu--li">
            <a href="">Work</a>
          </li>
          <li class="nav__menu--li">
            <a href="">Personal</a>
          </li>
          <li class="nav__menu--li">
            <a href="">Clone</a>
          </li>
        </ul>
      </nav>
    </div>
    `;
  }
};

export default header;
