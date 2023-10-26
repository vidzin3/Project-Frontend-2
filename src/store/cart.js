// define store cart

import {defineStore} from 'pinia'

export const useStoreCart = defineStore('cart',{
    state:() => ({
        cart:[],
        badgeContent: 0
    }),
    actions:{
        addToCart(products){
            this.cart.push(products)
            this.incresceItem()
        },
        incresceItem(){
            this.badgeContent++
        },
        totalItem(){
            return this.cart.reduce((acc) => acc + 1,0)
        },
        removeItem(id){
            const index = this.cart.findIndex(t => t.id === id)
            this.cart.splice(index,1)
        },
    }
})