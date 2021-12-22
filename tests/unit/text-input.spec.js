import { shallowMount } from "@vue/test-utils";
import TextInput from "@/components/TextInput.vue";

const wrapper = shallowMount(TextInput);

describe("TextInput.vue", () => {
  it("is render the HTML", () => {
    wrapper.find(".text-input").setValue("Test Text");
    wrapper.find(".btn").trigger("click");
  });
  it("Clear the input", () => {
    wrapper.find(".btn").trigger("click");
    expect(wrapper.find(".text-input").element.value).toBe("");
  });
});
