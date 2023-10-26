// define store

import {defineStore} from 'pinia'
import axios from 'axios'

export const products = defineStore('products',{
    state:()=>({
        products:[]
    }),
    getters:{
        smartphones(){
            return this.products.filter(t => t.category === "smartphones")
        },
        laptops(){
            return this.products.filter(l => l.category === 'laptops')
        },
        fragrances(){
            return this.products.filter(f => f.category === 'fragrances')
        },
        skincare(){
            return this.products.filter(s => s.category === 'skincare')
        },
        groceries(){
            return this.products.filter(g => g.category === 'groceries')
        },
        homeDecoration(){
            return this.products.filter(h => h.category === 'home-decoration')
        }
    },
    actions:{
        async getApi(){
            try{
                const res = await axios.get('http://localhost:3000/products')
                this.products = res.data
            }catch (error){
                console.log(error)
            }    
        },
    }
})