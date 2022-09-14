<template>
  <div>
    日志管理1
    <div>{{ routerLists }}---11</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "logsIndex",
  data() {
    return {};
  },
  computed: {
    ...mapState("route", ["routerLists"]),
  },
};
</script>   