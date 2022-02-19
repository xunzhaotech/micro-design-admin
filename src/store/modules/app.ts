import storage from "store";
import {
  SIDEBAR_TYPE,
  TOGGLE_MOBILE_TYPE,
  TOGGLE_NAV_THEME,
  TOGGLE_LAYOUT,
  TOGGLE_FIXED_HEADER,
  TOGGLE_FIXED_SIDEBAR,
  TOGGLE_CONTENT_WIDTH,
  TOGGLE_HIDE_HEADER,
  TOGGLE_COLOR,
  TOGGLE_WEAK,
  TOGGLE_MULTI_TAB,
  // i18n
  APP_LANGUAGE,
} from "@/store/mutation-types";
const app = {
  state: {
    sideCollapsed: false,
    isMobile: false,
    theme: "dark",
    layout: "",
    contentWidth: "",
    fixedHeader: false,
    fixedSidebar: false,
    autoHideHeader: false,
    color: "",
    weak: false,
    multiTab: true,
    lang: "en-US",
    _antLocale: {},
  },
  mutations: {
    [SIDEBAR_TYPE]: (state: any, type: any) => {
      state.sideCollapsed = type;
      storage.set(SIDEBAR_TYPE, type);
    },
    [TOGGLE_MOBILE_TYPE]: (state: any, isMobile: any) => {
      state.isMobile = isMobile;
    },
    [TOGGLE_NAV_THEME]: (state: any, theme: any) => {
      state.theme = theme;
      storage.set(TOGGLE_NAV_THEME, theme);
    },
    [TOGGLE_LAYOUT]: (state: any, mode: any) => {
      state.layout = mode;
      storage.set(TOGGLE_LAYOUT, mode);
    },
    [TOGGLE_FIXED_HEADER]: (state: any, mode: any) => {
      state.fixedHeader = mode;
      storage.set(TOGGLE_FIXED_HEADER, mode);
    },
    [TOGGLE_FIXED_SIDEBAR]: (state: any, mode: any) => {
      state.fixedSidebar = mode;
      storage.set(TOGGLE_FIXED_SIDEBAR, mode);
    },
    [TOGGLE_CONTENT_WIDTH]: (state: any, type: any) => {
      state.contentWidth = type;
      storage.set(TOGGLE_CONTENT_WIDTH, type);
    },
    [TOGGLE_HIDE_HEADER]: (state: any, type: any) => {
      state.autoHideHeader = type;
      storage.set(TOGGLE_HIDE_HEADER, type);
    },
    [TOGGLE_COLOR]: (state: any, color: any) => {
      state.color = color;
      storage.set(TOGGLE_COLOR, color);
    },
    [TOGGLE_WEAK]: (state: any, mode: any) => {
      state.weak = mode;
      storage.set(TOGGLE_WEAK, mode);
    },
    [APP_LANGUAGE]: (state: any, lang: any, antd = {}) => {
      state.lang = lang;
      state._antLocale = antd;
      storage.set(APP_LANGUAGE, lang);
    },
    [TOGGLE_MULTI_TAB]: (state: any, bool: any) => {
      storage.set(TOGGLE_MULTI_TAB, bool);
      state.multiTab = bool;
    },
  },
  actions: {
    setLang(commit: any, lang: any) {
      return new Promise((resolve, reject) => {
        commit(APP_LANGUAGE, lang);
        console.log(resolve);
        console.log(reject);
        // loadLanguageAsync(lang).then(() => {
        //   resolve()
        // }).catch((e) => {
        //   reject(e)
        // })
      });
    },
  },
};

export default app;
