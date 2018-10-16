<template>
  <div>
    <h1>One Specific Gallery</h1>
    <ul>
      <li v-for="object in gallery">
        {{object.name}}
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
