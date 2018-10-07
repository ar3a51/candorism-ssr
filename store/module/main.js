export const main = {
    namespaced: true,
    state: {
        displayRegistration: false,
        registration: {
            idNo: "",
            username: "",
            name: "",
        },
    },

    mutations: {
        display(state, isDisplay) {

            state.displayRegistration = isDisplay;
            state.registration = {
                idNo: "",
                username: "",
                name: "",
            }
        },
        setIdNo(state, value) {
            state.registration.idNo = value;
        },
        setUsername(state, value) {
            state.registration.username = value;
        },
        setDetails(state, value){
            state.registration.name = value;
        }
    },

    actions: {
        setIdNo({commit}, value){
            commit("setIdNo",value);
        },
        setUsername({commit}, value){
            commit("setUsername", value);
            commit("setDetails",value);
        }
    },
    getters: {
        isDisplay: (state) => {
            return state.displayRegistration;
        }
    }
}



