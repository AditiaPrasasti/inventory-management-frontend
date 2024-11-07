<template>
  <div class="transaction-list container">
    <h2 class="mb-4">Daftar Transaksi</h2>
    <div class="table-responsive">
      <table class="table table-bordered text-center">
        <thead class="table">
          <tr>
            <th>ID</th>
            <th>Nama User</th>
            <th>Nama Barang</th>
            <th>Jumlah Pinjam</th>
            <th>Tanggal Pinjam</th>
            <th>Tanggal Pengembalian</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id">
            <td>{{ transaction.id }}</td>
            <td>{{ transaction.namaUser }}</td>
            <td>{{ transaction.namaBarang }}</td>
            <td>{{ transaction.jumlahPinjam }}</td>
            <td>{{ transaction.tanggalPinjam }}</td>
            <td>{{ transaction.tanggalPengembalian }}</td>
            <td>{{ transaction.status }}</td>
            <td>
              <button
                class="btn btn-primary"
                @click="openReturnForm(transaction)"
                :disabled="transaction.status === 'Returned'"
              >
                {{ transaction.status === "Returned" ? "Verifikasi" : "Verifikasi" }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <Modal :visible="showForm" @close="cancelReturnForm">
      <TransactionForm :transaction="selectedTransaction" @submit="handleReturn" @cancel="cancelReturnForm" />
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import TransactionForm from "@/components/admin/transaction/TransactionForm.vue";

export default {
  components: { Modal, TransactionForm },
  data() {
    return {
      transactions: [
        { id: "2024001", namaUser: "John Doe", namaBarang: "Acer Nitro 15 AN515-58", jumlahPinjam: 1, tanggalPinjam: "2022-10-10", tanggalPengembalian: "2022-10-17", status: "Borrowed" },
        { id: "2024002", namaUser: "Jane Smith", namaBarang: "Lenovo LOQ 15 15IRH8", jumlahPinjam: 1, tanggalPinjam: "2022-10-10", tanggalPengembalian: "2022-10-17", status: "Borrowed" },
      ],
      showForm: false,
      selectedTransaction: null,
    };
  },
  methods: {
    openReturnForm(transaction) {
      this.selectedTransaction = { ...transaction };
      this.showForm = true;
    },
    handleReturn(updatedTransaction) {
      const index = this.transactions.findIndex((t) => t.id === updatedTransaction.id);
      if (index !== -1) {
        this.transactions[index] = { ...updatedTransaction, status: "Returned" };
      }
      this.cancelReturnForm();
    },
    cancelReturnForm() {
      this.showForm = false;
      this.selectedTransaction = null;
    },
  },
};
</script>

<style scoped>
.table thead th {
  background-color: #4b3f6b !important; /* Mengubah warna background */
  color: white !important; /* Mengubah teks menjadi putih untuk kontras */
}

.table tbody tr:nth-child(even) {
  background-color: #f2f2f2; /* Warna alternatif untuk baris genap */
}

.table tbody tr:nth-child(odd) {
  background-color: white; /* Warna alternatif untuk baris ganjil */
}
.transaction-list {
  background-color: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
