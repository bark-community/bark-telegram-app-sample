<template>
  <div id="app">
    <header>
      <h1>BARK Protocol</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/payments">Payments</router-link>
        <router-link to="/swap">Swap</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/faq">FAQ</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <div class="social-icons">
        <ul>
          <li><a href="#"><i class="fab fa-twitter"></i></a></li>
          <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          <li><a href="#"><i class="fab fa-discord"></i></a></li>
          <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        </ul>
      </div>
      <div class="copyright">
        &copy; 2024 BARK Protocol. All rights reserved.
      </div>
      <div>
        <a href="#" class="terms-link">Terms of Use</a>
        <span>|</span>
        <a href="#" class="privacy-link">Privacy Policy</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* General Styles */
body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  color: #333;
}

header {
  background-color: #ffffff;
  color: #333;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

nav {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

nav a {
  color: #333;
  text-decoration: none;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  background-color: #f5f5f5;
  transition: background-color 0.3s ease;
  font-weight: 500;
}

nav a:hover {
  background-color: #f90;
  color: #fff;
}

main {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

.social-icons {
  margin-bottom: 20px;
}

.social-icons ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

.social-icons li {
  margin: 0 10px;
}

.social-icons a {
  color: #fff;
  text-decoration: none;
  font-size: 24px;
}

.terms-link, .privacy-link {
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s ease;
}

.terms-link:hover, .privacy-link:hover {
  color: #f90;
}

@media screen and (max-width: 600px) {
  nav {
    flex-wrap: wrap;
  }

  nav a {
    margin: 5px;
  }
}
</style>
