<template>
    <div id="app">
    <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">Contacts</a>
    </nav>
  </header>
  <main class="container">
    <router-view/>
  </main>
  <footer class="footer">
    <div class="container">
      Contacts 2018.
    </div>
  </footer>
    </div>
</template>

<script>


export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navbar-brand{
  color: firebrick !important;
}
.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #f5f5f5;
}
main {
  margin-top: 100px;
}
</style>
