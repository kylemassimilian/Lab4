<template>
  <div>
    <h1>Gallery Listing</h1>
    <ul>
      <li v-for="gallery in galleries">
        {{gallery.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
      return {};
    }
}
</script>

<style>
</style>
