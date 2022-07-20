
import { reqCategoryList } from "@/api"

// home模块的小仓库
const state = {
    // state中的数据默认数据不要乱写，根据接口文档初始化定义
    categoryList: []
}

const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    }
}

const actions = {
    // 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}) {
        let result = await reqCategoryList()
        if(result.code === 200) {
            commit('CATEGORYLIST', result.data)
        }
        // console.log(result)
    }
}

const getters = {}

export default {
    state,
    mutations,
    actions,
    getters,
}