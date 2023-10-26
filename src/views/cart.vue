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
                <v-badge class="py-3" :content="cartItem.totalItem()" color="error">
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
                <v-row>
                    <v-col v-if="store.length > 0" cols="12" lg="8" md="8" sm="8">
                        <v-card title="Check Out Your Item"></v-card>
                        <v-card v-for="item in store" class="mt-4 d-flex" rounded="0" :elevation="3">
                            <v-avatar rounded="0" size="70" :image="item.thumbnail"></v-avatar>
                            <v-text class="d-flex align-center pa-3 w-100 justify-space-between">
                                <div>
                                    <p>{{ item.title }}</p>
                                    <p>{{ item.price }} $</p>
                                </div>
                                <v-icon @click="removeItem(item.id)" icon="mdi-close-circle"></v-icon>
                            </v-text>
                            <v-responsive class="">
                            </v-responsive>
                        </v-card>
                    </v-col>
                    <v-col v-else cols="12">
                        <v-card  title="Empty Products"></v-card>
                    </v-col>
                    <v-col v-if="store.length > 0" cols="12" lg="4" md="4" sm="4">
                        <v-card :title="`total Price : ${totalPirce} $`">
                            <v-divider></v-divider>
                            <v-sheet v-for="(p,index) in store" :key="index" class="px-4 py-2">
                                item {{index+1}} / {{ p.price }} $
                            </v-sheet>
                            <v-btn block color="light-green-accent-3">CHECK OUT</v-btn>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import {useTheme} from 'vuetify'
    import {ref} from 'vue'
    import { useStoreCart } from '../store/cart'
    import {storeToRefs} from 'pinia'
import { computed } from 'vue'

    export default {
        setup(){
            const drawer = ref(null)
            const theme = useTheme()
            const cartItem = useStoreCart()

            const { removeItem } = cartItem

            const store = ref(cartItem.cart)

            const totalPirce = computed(()=>{
                return store.value.reduce((acc,p)=>acc+p.price,0)
            })

            function toggleTheme(){
                theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
            }
        
            return{
                toggleTheme,
                theme,
                drawer,
                store,
                cartItem,
                removeItem,
                totalPirce
            }
        }

    }
</script>