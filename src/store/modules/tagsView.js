const tagsView = {
    state: {
        cachedViews: [],
        visitedViews: [],
    },
    mutations: {
        ADD_CACHED_VIEW(state, view) {
            if(state.cachedViews.includes(view.name)) return;
            //判断路由meta配置是否需要缓存
            state.cachedViews.push(view.name)
        },
        ADD_VISITED_VIEW(state, view) {
            if(state.visitedViews.some(visited => visited.route.path === view.path)) return;
            state.visitedViews.push({
                type: 'info',//element-ui tag样式定义
                label: view.meta.menuName,
                effect: 'plain',
                visiting: false,
                showTagMenu: false,
                route: view
            })
        },
        UPDATE_VISITED_VIEW(state, view) {
            for(let item of state.visitedViews) {
                if(item.route.path === view.path) {
                    item.type = 'primary';//element-ui tag样式定义
                    item.effect = 'dark';
                    item.visiting = true;
                }else {
                    item.type = 'info';//element-ui tag样式定义
                    item.effect = 'plain';
                    item.visiting = false;
                }
            }
        },
        DELETE_CACHED_VIEW(state, view) {
            for(let [index, value] of state.cachedViews.entries()) {
                if(value === view.name) {
                    state.cachedViews.splice(index, 1);
                    break;
                }
            }
        },
        DELETE_VISITED_VIEW(state, view) {
            for(let [index, value] of state.visitedViews.entries()) {
                if(value.route.path === view.path) {
                    state.visitedViews.splice(index, 1);
                    break;
                }
            }
        },
        DELETE_OTHERS_CACHED_VIEW(state, view) {
            state.cachedViews = state.cachedViews.filter(cachedView => cachedView.name === view.name || cachedView.name === 'main-index');
        },
        DELETE_OTHERS_VISITED_VIEW(state, view) {
            state.visitedViews = state.visitedViews.filter(visitedView => visitedView.route.path === view.path || visitedView.route.meta.fixed);
        },
        DELETE_All_CACHED_VIEW(state) {
            state.cachedViews = state.cachedViews.filter(cachedView => cachedView.name === 'main-index');
        },
        DELETE_All_VISITED_VIEW(state) {
            state.visitedViews = state.visitedViews.filter(visitedView => visitedView.route.meta.fixed);
        },

    },
    actions: {
        addView(state, view) {
            state.dispatch('addCachedView', view);
            state.dispatch('addVisitedView', view);
        },
        addCachedView(state, view) {
            state.commit('ADD_CACHED_VIEW', view);
        },
        addVisitedView(state, view) {
            state.commit('ADD_VISITED_VIEW', view);
        },
        updateVisitedView(state, view) {
            state.commit('UPDATE_VISITED_VIEW', view);
        },
        deleteView(state, view) {
            state.dispatch('deleteCachedView', view);
            state.dispatch('deleteVisitedView', view);
        },
        deleteCachedView(state, view) {
            state.commit('DELETE_CACHED_VIEW', view);
        },
        deleteVisitedView(state, view) {
            state.commit('DELETE_VISITED_VIEW', view);
        },
        deleteOthersView(state, view) {
            state.dispatch('deleteOthersCachedView', view);
            state.dispatch('deleteOthersVisitedView', view);
        },
        deleteOthersCachedView(state, view) {
            state.commit("DELETE_OTHERS_CACHED_VIEW", view);
        },
        deleteOthersVisitedView(state, view) {
            state.commit("DELETE_OTHERS_VISITED_VIEW", view);
        },
        deleteAllView(state, view) {
            state.dispatch('deleteAllCachedView', view);
            state.dispatch('deleteAllVisitedView', view);
        },
        deleteAllCachedView(state) {
            state.commit("DELETE_All_CACHED_VIEW");
        },
        deleteAllVisitedView(state) {
            state.commit("DELETE_All_VISITED_VIEW");
        }

    },
    getters: {
    },
};

export default tagsView;