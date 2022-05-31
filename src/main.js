import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
    state() {
        return {
            counter: 0
        };
    },
    mutations: {
        increment(state, payload) {
            state.counter = state.counter + payload.value
        }
    }
});

createApp(App).use(store).mount('#app')
