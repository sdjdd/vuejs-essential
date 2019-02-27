import Vue from 'vue'
import Message from './Message'
import Modal from './Modal'
import Pagination from './Pagination'

const component = {
    Message,
    Modal,
    Pagination,
}

for (const [key, value] of Object.entries(component)) {
    Vue.component(key, value)
}