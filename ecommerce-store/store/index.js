import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/auth';

const createStore = () => {
  return new Vuex.Store({
    state: {
      session: false,
      products: []
    },
    mutations: {
      SET_SESSION(state, session) {
        state.session = session;
      },
      SET_PRODUCT(state, product) {
        state.products = product;
      }
    },
    getters: {
      session: state => state.session,
      products: state => state.products
    },
    actions: {
      setSession({ commit }) {
        firebase.auth().onAuthStateChanged(user => {
          commit('SET_SESSION', user || false);
        });
      },
      setProduct({ commit }, products) {
        commit('SET_PRODUCT', products);
      }
    }
  });
};

export default createStore;
