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
        <v-main class="main">
            <v-container v-if="justStore" fluid>
                <v-row>
                    <v-col cols="12">
                        <v-card>
                            <v-carousel hide-delimiters :height="400">
                                <v-carousel-item
                                    v-for="(item,i) in justStore.images"
                                    :key="i"
                                    :src="justStore.images[i]"
                                ></v-carousel-item>
                            </v-carousel>
                            <!-- <v-img :height="300" :src="justStore.thumbnail"></v-img> -->
                            <v-card-title>{{ justStore.title }}</v-card-title>
                            <v-responsive class="pa-4">
                                <p class="">{{ justStore.description }}</p>
                                <p>BRAND : {{ justStore.brand }}</p>
                                <p>RATE : {{ justStore.rating }}</p>
                                <div class="d-flex py-4">
                                    <p class="text-decoration-line-through pr-3">{{ justStore.price }} $ </p>
                                    <p class="text-red">{{ justStore.discountPercentage }} $</p>
                                </div>
                                <v-btn @click="addToCart(justStore)"
                                prepend-icon="mdi-check-circle"
                                >
                                <template v-slot:prepend>
                                    <v-icon color="success"></v-icon>
                                </template>
                                BUY NOW
                                </v-btn>
                                <v-btn class="ml-3" :to="`/products`">GO BACK</v-btn>
                                <v-btn class="ml-3" color="red" :to="`/cart`">GO CART</v-btn>
                            </v-responsive>
                        </v-card>
                    </v-col>
                </v-row> 
                <v-snackbar
                v-model="snackbar"
                >
                    <p>THANK YOU FOR BUYING , GO TO CART CHECKOUT</p>

                    <template v-slot:actions>
                        <v-btn
                        color="red"
                        variant="text"
                        @click="snackbar = false"
                        >
                        Close
                        </v-btn>
                    </template>
                </v-snackbar>
            </v-container>
            <div class="preview" v-else>
                <v-progress-circular indeterminate></v-progress-circular>
            </div>
        </v-main>
    </v-app>
    <div>
        
    </div>
</template>

<script>
    import { useRoute } from 'vue-router';
    import { products } from '../store/store';
    import {computed,onMounted,ref} from 'vue'
    import {useTheme} from 'vuetify'
    import { useStoreCart } from '../store/cart'

    export default {
        setup(){

            const route = useRoute()
            const storePro = products()
            const pre = parseInt(route.params.id)
            const justStore = ref(null)
            const cart = useStoreCart()

            const snackbar = ref(false)

            const addToCart = (products) => {
                cart.addToCart(products)
                snackbar.value = true
            }

            const drawer = ref(null)
            const theme = useTheme()

            function toggleTheme(){
                theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
            }

            onMounted(async () => {
                await storePro.getApi()
                justStore.value = storePro.products.find(product => product.id === pre)
            })

            return{
                justStore,
                drawer,
                toggleTheme,
                theme,
                snackbar,
                addToCart,
                cart,
            }
        }
    }
</script>

<style scoped>

    .preview{
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
</style>