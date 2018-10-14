<template>
  <div>
    <h1>Gallery Listing</h1>
    <ul>
      <li v-for="object in objects">
        <a :href="'/object/'+object.id"> Work Title: {{object.title}}</a>
        <p><a :href = "object.url">URL to Main Page</a></p>
        <img id = "newImage" :src = "object.primaryimageurl" height = 400 width = 400></img>
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
