import swal from 'sweetalert2'

export default {
    install: (Vue) => {
        const mySwal = swal.mixin({
            type: 'warning',
            showCancelButton: true,
            heightAuto: false,
            confirmButtonColor: 'rgb(140,212,245)',
            cancelButtonColor: 'rgb(193,193,193)'
        })

        Vue.swal = mySwal
        Vue.prototype.$swal = mySwal
    }
}