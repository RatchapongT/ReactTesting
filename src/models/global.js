export default {
  namespace: "global",

  reducers: {
    changeLayoutCollapsed (state, { payload }) {
      return {
        ...state,
        collapsed: payload
      };
    }
  },

  state: {
    collapsed: false
  },

  subscriptions: {
    setup ({ history }) {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      return history.listen(({ pathname, search }) => {
        if (typeof window.ga !== "undefined") {
          window.ga("send", "pageview", pathname + search);
        }
      });
    }
  }
};
