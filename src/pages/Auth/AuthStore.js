import StorageHelper from "../../helpers/StorageHelper";

export const authStore = {
  state: {
    Auth: {
      User: StorageHelper.load("_User") || null,
      Token:
        StorageHelper.load("_Token") ||
        "",
    },
  },
  getters: {
    Auth: ({ state }) => {
      return state.Auth;
    },
  },
  actions: {
    setToken: ({ state }, { Token, User }) => {
      StorageHelper.add("_Token", Token);
      StorageHelper.add("_User", User);
      state.Auth = {
        ...state.Auth,
        Token: Token,
        User: User,
      };
    },
    setLogout: ({ state }) => {
      StorageHelper.remove("_Token");
      StorageHelper.remove("_User");
      state.Auth = {
        ...state.Auth,
        Token: "",
        User: "",
      };
    },
  },
};
