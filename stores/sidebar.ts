import { acceptHMRUpdate, defineStore } from 'pinia'

export const useSidebar = defineStore('sidebar', {
    state: () => ({
        isOpen: true,
    }),

    actions: {
        toggle() {
            this.isOpen = !this.isOpen
        },
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSidebar, import.meta.hot))
}
