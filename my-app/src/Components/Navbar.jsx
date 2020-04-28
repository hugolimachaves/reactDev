import React from "react";

function Nav(Props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href={"#card5"}>
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a
              class="nav-link"
              href="https://www.google.com/search?q=coronavirus+graph&oq=coro&aqs=chrome.0.69i59j69i57j69i59l2j69i60l3j69i65.1535j0j7&sourceid=chrome&ie=UTF-8"
            >
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.google.com/search?q=coronavirus+graph&oq=coro&aqs=chrome.0.69i59j69i57j69i59l2j69i60l3j69i65.1535j0j7&sourceid=chrome&ie=UTF-8"
            >
              Features
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.google.com/search?q=coronavirus+graph&oq=coro&aqs=chrome.0.69i59j69i57j69i59l2j69i60l3j69i65.1535j0j7&sourceid=chrome&ie=UTF-8"
            >
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="https://www.google.com/search?q=coronavirus+graph&oq=coro&aqs=chrome.0.69i59j69i57j69i59l2j69i60l3j69i65.1535j0j7&sourceid=chrome&ie=UTF-8"
            >
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
