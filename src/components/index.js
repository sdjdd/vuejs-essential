import Vue from 'vue'
import Message from './Message'
import Modal from './Modal'
import Pagination from './Pagination'
import Slider from './Slider'

const component = {
    Message,
    Modal,
    Pagination,
    Slider,
}

for (const [key, value] of Object.entries(component)) {
    Vue.component(key, value)
}