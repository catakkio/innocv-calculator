<template>
  <div>
    <div class="flex space-x-4 px-5 py-3">
      <btn-operator value="AC" />
      <btn-operator value="%" />
      <btn-operator value="," />
      <btn-operator value="÷" />
    </div>

    <div class="flex space-x-4 px-5 py-3">
      <btn-number :value="7" />
      <btn-number :value="8" />
      <btn-number :value="9" />
      <btn-operator value="x" />
    </div>

    <div class="flex space-x-4 px-5 py-3">
      <btn-number :value="4" />
      <btn-number :value="5" />
      <btn-number :value="6" />
      <btn-operator value="-" />
    </div>

    <div class="flex space-x-4 px-5 py-3">
      <btn-number :value="1" />
      <btn-number :value="2" />
      <btn-number :value="3" />
      <btn-operator value="+" />
    </div>
    <div class="flex space-x-4 px-5 py-3">
      <btn-number :value="0" size="large" />
      <btn-operator class="items-right" value="=" />
    </div>
  </div>
</template>

<script>
import BtnNumber from "./BtnNumber.vue";
import BtnOperator from "./BtnOperator.vue";

export default {
  components: { BtnNumber, BtnOperator },
};
</script>

<style></style>
