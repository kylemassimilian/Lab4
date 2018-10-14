<template>
  <div>
    <h1>One Specific Object</h1>
     <p>Object Name: {{title}}</p>
     <p>Description: {{description}}</p>
     <p>Accession Year: {{accessionyear}}</p>
     <p>Provenance {{provenance}} </p>
       <img id = "newImage" :src = "primaryimageurl" height = 400 width = 400></img>


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
