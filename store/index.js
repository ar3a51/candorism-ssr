import Vuex from 'vuex';
import {home}   from './module/home';
import {main}   from './module/main';

const store = () => {
    return new Vuex.Store({
        modules: {
           home,
           main
        }
    })
}

export default store;