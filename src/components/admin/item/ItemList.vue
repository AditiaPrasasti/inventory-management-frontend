<template>
  <div class="item-list">
    <div class="header">
      <h2>Daftar Barang</h2>
      <button class="add-btn" @click="showAddForm">Tambah Item</button>
    </div>

    <div class="item-cards">
      <ItemCard
        v-for="item in items"
        :key="item.kode"
        :item="item"
        @edit-item="editItem"
        @delete-item="deleteItem"
      />
    </div>
    <Modal :visible="showForm" @close="cancelEditForm">
      <ItemForm :item="selectedItem" :isEdit="isEdit" @submit="handleSubmit" />
    </Modal>
  </div>
</template>

<script>

import ItemCard from "./ItemCard.vue";
import Modal from "../../Modal.vue";
import ItemForm from "./ItemForm.vue";

export default {
  components: {
    ItemCard,
    Modal,
    ItemForm,
  },
  data() {
    return {
      items: [
        {
          kode: "2024001",
          nama: "Acer Nitro 15 AN515-58",
          deskripsi: "Intel Core i5 12500H, RTX 3050, RAM 8GB DDR4, LAYAR 15.6",
          stok: 80,
        },
        {
          kode: "2024002",
          nama: "Lenovo LOQ 15 15IRH8",
          deskripsi: "Intel Core i5 13450H, RTX 3050, RAM 8GB DDR4, LAYAR 15.6",
          stok: 80,
        },
      ],
      showForm: false,
      selectedItem: null,
      isEdit: false,
    };
  },
  methods: {
    showAddForm() {
      this.selectedItem = { kode: "", nama: "", deskripsi: "", stok: 0 };
      this.isEdit = false;
      this.showForm = true;
    },

    editItem(item) {
      this.selectedItem = { ...item };
      this.isEdit = true;
      this.showForm = true;
    },

    handleSubmit(item) {
      if (
        item.kode &&
        item.nama &&
        item.deskripsi &&
        item.stok !== null &&
        !isNaN(item.stok)
      ) {
        if (this.isEdit) {
          const index = this.items.findIndex((i) => i.kode === item.kode);
          if (index !== -1) {
            this.items[index] = item;
          }
        } else {
          this.items.push(item);
        }
      }
      this.showForm = false;
    },

    cancelEditForm() {
      this.showForm = false;
    },

    deleteItem(kode) {
      this.items = this.items.filter((item) => item.kode !== kode);
    },
  },
};
</script>

<style scoped>
.item-list {
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

h2 {
  color: #4b3f6b;
  font-size: 24px;
}

.add-btn {
  background-color: #754bc5;
  color: white;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
}

.add-btn:hover {
  background-color: #5a37a0;
}

.item-cards {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
