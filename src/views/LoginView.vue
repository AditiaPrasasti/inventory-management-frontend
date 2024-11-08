<template>
  <div class="container mt-5">
    <div class="card p-4 shadow-sm" style="max-width: 400px; margin: 0 auto;">
      <h3 class="text-center mb-4">Login</h3>
      <form @submit.prevent="login">
        <!-- Role Selection -->
        <div class="mb-3">
          <label for="role" class="form-label">Pilih Peran</label>
          <select v-model="role" id="role" class="form-select">
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        <!-- Login Button -->
        <div class="d-grid">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      role: "admin",
    };
  },
  methods: {
    login() {
      localStorage.setItem("auth", true);
      localStorage.setItem("role", this.role);
      this.$router.push({ name: this.role, params: { component: "items" } });
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 10px;
}
</style>
