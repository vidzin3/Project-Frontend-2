<template>
    <v-app>
        <v-app-bar>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title>Shopping</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn @click="toggleTheme">{{ theme.global.name.value }} Mode</v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer">
            <v-list-item to="/">Home</v-list-item>
            <v-list-item to="/products">Products</v-list-item>
            <v-list-item to="/cart">
                <v-badge class="py-3" :content="cart.totalItem()" color="error">
                    <v-icon>mdi-store-outline</v-icon>
                </v-badge>
            </v-list-item>
            <template v-slot:append>
                <div class="pa-3">
                    <v-btn block color="blue">Build By David</v-btn>
                </div>
            </template>
        </v-navigation-drawer>
     
        <v-main>
            <v-container fluid>
                <Transition>
                    <productsVue />
                </Transition>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import {useTheme} from 'vuetify'
    import productsVue from '../components/products.vue'
    import {products} from '../store/store'
    import {useStoreCart} from '../store/cart'
    import { onMounted } from 'vue'
    import {Transition} from 'vue'

    export default {
        setup(){
            const theme = useTheme()

            const pro = products()

            const cart = useStoreCart()

            function toggleTheme () {
                theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
            }

            onMounted(async ()=>{
                await pro.getApi()
            })

            return{
                toggleTheme,
                theme,
                pro,
                Transition,
                cart
            }
        },
        components:{
            productsVue
        },
        props:['content'],
        data(){
            return{
                drawer: null,
            }
        },
        methods:{
            
        }
    }
</script>