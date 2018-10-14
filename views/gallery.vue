<template>
  <div>
    <h1>One Specific Gallery</h1>
    <ul>
      <li v-for="gallery in objects">
        {{gallery.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
      return {objects: [], gallery: ''};
    }
}
</script>

<style>
</style>
