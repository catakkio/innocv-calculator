<template>
  <p
    class="flex justify-center items-center h-20 border-2 border-solid rounded-full text-2xl cursor-pointer bg-gray-200 hover:bg-gray-300 active:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-500"
    :class="size === 'double' ? 'w-72' : 'w-20'"
  >
    {{ value }}
  </p>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      required: false,
    },
  },
};
</script>
