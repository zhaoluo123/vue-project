import Vue from 'vue'
import VueI18n from 'vue-i18n'

import ElementLocale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

import zh from "./zh.js"
import en from "./en.js"

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'zh',
    messages: {
        'zh': {...zh,...zhLocale},
        'en': {...en,...enLocale}
    }
});
ElementLocale.i18n((key, value) => i18n.t(key, value));

export default i18n