import Vue from 'vue'
import Vuex from 'vuex'
import tagsView from './modules/tagsView'
import menuCollapse from './modules/menuCollapse'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        tagsView,
        menuCollapse,
    },
})
