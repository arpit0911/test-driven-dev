<template>
  <div>
    <input class="text-input" type="text" v-model="textValue" />
    <button class="btn" @click="clearValue">Clear Field</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textValue: "",
    };
  },
  methods: {
    clearValue() {
      this.textValue = "";
    },
  },
};
</script>

<style></style>
