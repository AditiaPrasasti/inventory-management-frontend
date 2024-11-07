<template>
  <div class="transaction-form">
    <form @submit.prevent="submitForm" class="mb-3">
      <h2 class="text-center">Pengembalian Barang</h2>

      <div class="mb-3">
        <label for="kode" class="form-label">Kode Barang:</label>
        <input type="text" v-model="form.kode" id="kode" class="form-control" :disabled="true" />
      </div>

      <div class="mb-3">
        <label for="nama" class="form-label">Nama Produk:</label>
        <input type="text" v-model="form.nama" id="nama" class="form-control" :disabled="true" />
      </div>

      <div class="mb-3">
        <label for="tanggal_pinjam" class="form-label">Tanggal Pinjam:</label>
        <input
          type="date"
          v-model="form.tanggal_pinjam"
          id="tanggal_pinjam"
          class="form-control"
          :disabled="true"
        />
      </div>

      <div class="mb-3">
        <label for="tanggal_kembali" class="form-label">Tanggal Kembali:</label>
        <input type="date" v-model="form.tanggal_kembali" id="tanggal_kembali" class="form-control" />
      </div>

      <div class="mb-3">
        <label for="jumlah_pinjam" class="form-label">Jumlah Pinjam:</label>
        <input type="number" v-model="form.jumlah_pinjam" id="jumlah_pinjam" class="form-control" :disabled="true" />
      </div>

      <div class="d-flex justify-content-between mt-3">
        <button type="button" class="btn btn-danger" @click="cancelForm">Batal</button>
        <button type="submit" class="btn btn-success">Ajukan</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    transaction: Object,
  },
  data() {
    return {
      form: {
        kode: this.transaction ? this.transaction.kode : "",
        nama: this.transaction ? this.transaction.namaBarang : "",
        tanggal_pinjam: this.transaction ? this.transaction.tanggalPinjam : "",
        tanggal_kembali: "",
        jumlah_pinjam: this.transaction ? this.transaction.jumlahPinjam : 1,
      },
    };
  },
  methods: {
    submitForm() {
      this.$emit("submit", { ...this.form });
    },
    cancelForm() {
      this.$emit("cancel");
    },
  },
  watch: {
    transaction(newTransaction) {
      if (newTransaction) {
        this.form.kode = newTransaction.kode;
        this.form.nama = newTransaction.namaBarang;
        this.form.tanggal_pinjam = newTransaction.tanggalPinjam;
        this.form.jumlah_pinjam = newTransaction.jumlahPinjam;
      }
    },
  },
};
</script>

<style scoped>
.transaction-form {
  max-width: 400px;
  margin: auto;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
