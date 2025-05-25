<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav-list">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/skills">Skills</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/experience">Experience</router-link></li>
        <li><router-link to="/education">Education</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: transparent;
  z-index: 1000;
}

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0; /* Only vertical padding */
}

.nav-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 auto;
  padding: 1rem 2rem;
  gap: 1rem;

  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.nav-list li {
  margin: 0;
}

.nav-list a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-list a:hover {
  color: #007bff;
}

</style>

