<template>
  <div class="main-layout">
    <header>
      <h1>My Application</h1>
    </header>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    <main>
      <slot />
    </main>
    <footer>
      <p>&copy; 2023 My Application</p>
    </footer>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
