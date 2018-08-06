export default function({ store, redirect }) {
  if (!store.getters.session) {
    return redirect('/');
  }
}
