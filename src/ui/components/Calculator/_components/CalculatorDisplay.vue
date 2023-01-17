<template>
  <div class="flex items-end justify-end mb-5 px-5">
    <p class="text-6xl">
      {{ value }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String || Number,
      required: true,
    },
  },
  // methods: {
  //   onClickButton(event) {
  //     if(typeof value === Number){
  //       this.$emit("number", value);
  //     }
  //   },
  // },
};
</script>

<style></style>
