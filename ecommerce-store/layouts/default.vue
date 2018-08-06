<template>
  <v-app >
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-if="!mySession" @click="login()">Login</v-btn>
        <v-btn v-else @click="signout()">Logout</v-btn>
      </v-toolbar-items>

    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import { db } from '~/plugins/firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'shopping_cart',
          title: 'Checkout',
          to: '/Checkout'
        },
        {
          icon: 'security',
          title: 'Secret',
          to: '/secret'
        }
      ],
      miniVariant: false,
      title: 'Video Game Store'
    };
  },
  created() {
    this.$store.dispatch('setSession');
  },
  methods: {
    login() {
      console.log('login');
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          console.log(result);
          console.log('signed in');
        })
        .catch(function(error) {
          console.log('error');
        });
    },
    signout() {
      console.log('signout');
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log('sign out');
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    mySession() {
      return this.$store.getters.session;
    }
  }
};
</script>
