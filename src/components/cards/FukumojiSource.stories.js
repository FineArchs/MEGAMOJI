import FukumojiSource from "./FukumojiSource.vue";

export default {
  title: "cards/organisms/FukumojiSource",
  component: FukumojiSource,
};

export const Base = (args) => ({
  components: { FukumojiSource },
  data: () => args,
  template: "<FukumojiSource :show='show' />",
});
Base.args = { show: true };
