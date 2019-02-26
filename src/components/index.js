import Vue from 'vue'
import Message from './Message'
import Modal from './Modal'

const component = {
    Message,
    Modal,
}

for (const [key, value] of Object.entries(component)) {
    Vue.component(key, value)
}