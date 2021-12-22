import { mount } from "@vue/test-utils";
import TodoApp from "@/components/TodoApp.vue";

describe("TodoApp.vue", () => {  // block the contains all the test to this component
  let wrapper;
  beforeEach(() => {   //  runs before each test 
    wrapper = mount(TodoApp);
  });
  it("should render the todos", () => {  // test/it are the same it is the block of test
    const todo = wrapper.get('[data-test= "todo"]');
    expect(todo.text()).toBe("Learn Test driven development");
  });
  it("should add new todo", async () => {
    expect(wrapper.findAll('[data-test= "todo"]')).toHaveLength(1);
    await wrapper.get('[data-test= "new-todo"]').setValue("New Todo");
    await wrapper.get('[data-test= "form"]').trigger("submit");
    await wrapper.get('[data-test= "new-todo"]').setValue("");
    expect(wrapper.findAll('[data-test= "todo" ]')).toHaveLength(2);
  });
  it("should be able to complete todo", async () => {
    await wrapper.get('[data-test= "todo-checkbox"]').setChecked(true);
    expect(wrapper.get('[data-test= "todo"]').classes()).toContain("completed");
  });
});
