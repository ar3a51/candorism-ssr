import Vuex from 'vuex';
import {home}   from './module/home';

const store = () => {
    return new Vuex.Store({
        modules: {
           home
        }
    })
}

export default store;