import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it("check counter after increment button is pressed", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.vm.counter).toBe(0);
    wrapper.find("button").trigger("click");
    expect(wrapper.vm.counter).toBe(1);
  });

  it("check increment method", () => {
    const wrapper = shallowMount(HelloWorld);
    wrapper.vm.increment();
    expect(wrapper.vm.counter).toBe(1);
  });
});
