
<template>
      <v-data-table
    @click:row="rowClick" item-key="first_name"
    :headers="headers"
    :items="clients"
    :items-per-page="25"
    show-select
    single-select
    class="elevation-1"
  ></v-data-table>

</template>

<script>

import { server } from "../helper";
import axios from "axios";
export default {
  data() {

    return {
      headers: [

          { text: 'Имя', value: 'first_name' },
          { text: 'Фамилия', value: 'last_name'},
          { text: 'Адрес', value: 'address'},
          { text: 'Телефон', value: 'phone'},
          { text: 'E-mail', value: 'email'},
          { text: 'Дата регистарции', value: 'datereg'}
        ],
      clients: []
    };
  },
  created() {
    this.fetchClients();
    
  },
  methods: {
    fetchClients() {
      axios
        .get(`${server.baseURL}/clients`)
        .then(data => (this.clients = data.data));
    },
    deleteClients(id) {
      axios
        .delete(`${server.baseURL}/clients/delete?clientID=${id}`)
        .then(data => {
          console.log(data);
          window.location.reload();
        });
    },
    editClients() {
      axios
        .get(`${server.baseURL}/clients`)
        .get(this.clients=server.data)
        .then(data => (this.clients = data.data));
    },
     rowClick: function (item, row) {      
      row.select(true);
      console.log(item);
      
    }
    
  }
};
</script>
