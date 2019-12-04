const menuCollapse = {
    state: {
        menuCollapseStatus: false,
    },
    mutations: {
        CHANGE_MENU_COLLAPSE(state) {
            state.menuCollapseStatus = !state.menuCollapseStatus;
        }

    },
    actions: {
        switchMenuCollapse(state) {
            state.commit('CHANGE_MENU_COLLAPSE');
        },
    },
    getters: {
    },
};

export default menuCollapse;