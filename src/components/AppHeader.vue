<script>
export default {};
</script>

<template>
  <header class="bg-primary text-white">
    <div
      class="container d-flex justify-content-between align-items-center py-1"
    >
      <h1>Boolfolio</h1>
      <ul class="list-unstyled d-flex p-0 m-0 fs-4 gap-3">
        <li>
          <router-link :to="{ name: 'home' }" class="nav-link"
            >Home</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'about' }" class="nav-link"
            >About</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'projects' }" class="nav-link"
            >Projects</router-link
          >
        </li>
      </ul>
    </div>
  </header>
</template>
