<template>
    <v-progress-linear v-if="loading" indeterminate></v-progress-linear>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-btn class="mr-4 mt-lg-0 mt-4" @click="filter = 'all'">all</v-btn>
                <v-btn class="mr-4 mt-lg-0 mt-4" @click="filter = 'smartphones'">smartPhone</v-btn>
                <v-btn class="mr-4 mt-lg-0 mt-4" @click="filter = 'laptops'">laptops</v-btn>
                <v-btn class="mr-4 mt-lg-0 mt-4" @click="filter = 'fragrances'">fragrances</v-btn>
                <v-btn class="mr-4 mt-lg-0 mt-4" @click="filter = 'skincare'">skincare</v-btn>
                <v-btn class="mr-4 mt-lg-0 mt-4" @click="filter = 'groceries'">groceries</v-btn>
                <v-btn class="mr-4 mt-lg-0 mt-4" @click="filter = 'homeDecoration'">homeDecoration</v-btn>
            </v-col>
        </v-row>
        <v-row v-if="filter === 'all'">
            <v-col v-for="pro in product.products" :key="pro.id" cols="12" lg="3" md="4" sm="6" xs="12">
                <v-card>
                    <v-img 
                    :src="pro.thumbnail" 
                    cover
                    :height="200"
                    aspect-ratio="16/9"
                    ></v-img>
                    <v-responsive class="border pa-4">
                        <p>{{ pro.title }}</p>
                        <p class="text-red">{{ pro.price }} $</p>
                        <v-btn @click="router.push(`/products/${pro.id}`)" class="mr-4">Preview</v-btn>
                        <v-btn @click="addToCart(pro)" color="green">BUY</v-btn>
                    </v-responsive>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-else-if="filter === 'smartphones'">
            <v-col v-for="pro in product.smartphones" :key="pro.id" cols="12" lg="3" md="4" sm="6" xs="12">
                <v-card>
                    <v-img 
                    :src="pro.thumbnail" 
                    cover
                    :height="200"
                    aspect-ratio="16/9"
                    ></v-img>
                    <v-responsive class="border pa-4">
                        <p>{{ pro.title }}</p>
                        <p>{{ pro.price }} $</p>
                        <v-btn @click="router.push(`/products/${pro.id}`)" class="mr-4">Preview</v-btn>
                        <v-btn @click="addToCart(pro)" color="green">BUY</v-btn>
                    </v-responsive>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-else-if="filter === 'laptops'">
            <v-col v-for="pro in product.laptops" :key="pro.id" cols="12" lg="3" md="4" sm="6" xs="12">
                <v-card>
                    <v-img 
                    :src="pro.thumbnail" 
                    cover
                    :height="200"
                    aspect-ratio="16/9"
                    ></v-img>
                    <v-responsive class="border pa-4">
                        <p>{{ pro.title }}</p>
                        <p>{{ pro.price }} $</p>
                        <v-btn @click="router.push(`/products/${pro.id}`)" class="mr-4">Preview</v-btn>
                        <v-btn @click="addToCart(pro)" color="green">BUY</v-btn>
                    </v-responsive>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-else-if="filter === 'fragrances'">
            <v-col v-for="pro in product.fragrances" :key="pro.id" cols="12" lg="3" md="4" sm="6" xs="12">
                <v-card>
                    <v-img 
                    :src="pro.thumbnail" 
                    cover
                    :height="200"
                    aspect-ratio="16/9"
                    ></v-img>
                    <v-responsive class="border pa-4">
                        <p>{{ pro.title }}</p>
                        <p>{{ pro.price }} $</p>
                        <v-btn @click="router.push(`/products/${pro.id}`)" class="mr-4">Preview</v-btn>
                        <v-btn @click="addToCart(pro)" color="green">BUY</v-btn>
                    </v-responsive>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-else-if="filter === 'skincare'">
            <v-col v-for="pro in product.skincare" :key="pro.id" cols="12" lg="3" md="4" sm="6" xs="12">
                <v-card>
                    <v-img 
                    :src="pro.thumbnail" 
                    cover
                    :height="200"
                    aspect-ratio="16/9"
                    ></v-img>
                    <v-responsive class="border pa-4">
                        <p>{{ pro.title }}</p>
                        <p>{{ pro.price }} $</p>
                        <v-btn @click="router.push(`/products/${pro.id}`)" class="mr-4">Preview</v-btn>
                        <v-btn @click="addToCart(pro)" color="green">BUY</v-btn>
                    </v-responsive>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-else-if="filter === 'groceries'">
            <v-col v-for="pro in product.groceries" :key="pro.id" cols="12" lg="3" md="4" sm="6" xs="12">
                <v-card>
                    <v-img 
                    :src="pro.thumbnail" 
                    cover
                    :height="200"
                    aspect-ratio="16/9"
                    ></v-img>
                    <v-responsive class="border pa-4">
                        <p>{{ pro.title }}</p>
                        <p>{{ pro.price }} $</p>
                        <v-btn @click="router.push(`/products/${pro.id}`)" class="mr-4">Preview</v-btn>
                        <v-btn @click="addToCart(pro)" color="green">BUY</v-btn>
                    </v-responsive>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-else-if="filter === 'homeDecoration'">
            <v-col v-for="pro in product.homeDecoration" :key="pro.id" cols="12" lg="3" md="4" sm="6" xs="12">
                <v-card>
                    <v-img 
                    :src="pro.thumbnail" 
                    cover
                    :height="200"
                    aspect-ratio="16/9"
                    ></v-img>
                    <v-responsive class="border pa-4">
                        <p>{{ pro.title }}</p>
                        <p>{{ pro.price }} $</p>
                        <v-btn @click="router.push(`/products/${pro.id}`)" class="mr-4">Preview</v-btn>
                        <v-btn @click="addToCart(pro)" color="green">BUY</v-btn>
                    </v-responsive>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { onMounted } from 'vue';
import { products } from '../store/store';
import { ref } from 'vue';
import {useRouter} from 'vue-router'
import { useStoreCart } from '../store/cart';

    export default {
        setup(){
            const router = useRouter()

            const product = products()

            const cart = useStoreCart()

            const {addToCart} = cart

            const filter = ref('all')

            const loading = ref(true)

            onMounted(async()=>{
                try{
                    await product.getApi()
                }catch (error){
                    console.log(error)
                }finally{
                    loading.value = false
                }
            })    
            return {
                product,
                products,
                filter,
                router,
                loading,
                addToCart
            }
        },  
    }
</script>