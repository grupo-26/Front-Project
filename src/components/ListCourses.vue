<script>
import axios from "axios";

axios
  .get("https://api.github.com/users/wkfilipedavi")
  .then((res) => {
          console.log(res.data)
  })
  .catch((error) => {
          console.log(error);
  });
</script>

<template>
    <h1>Courses List</h1>
</template>