<template>
  <div>
    <h1>One Specific Gallery</h1>
    <ul>
      <li v-for="object in gallery">
        {{object.name}}
      </li>
    </ul>
  </div>
  <!-- I could not figure out the syntax for a conditional for posting comment --> 
  <!-- <div v-if object = object.id
  			post comment
  	</div> 

  	<div v-else>
  		nothing

  	</div> 

  	method = POST 
  --> 

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
