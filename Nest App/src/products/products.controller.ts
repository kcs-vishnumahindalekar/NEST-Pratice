import { Controller,Post,Body,Get,Param,Patch,Delete} from '@nestjs/common';
import { CreateProduct } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsServices:ProductsService){}

    @Post()
    addProduct(@Body() createProduct:CreateProduct) {
        return this.productsServices.insertProduct(createProduct);
    }

    @Get()
    getAllProducts(){
        return this.productsServices.getProducts();
    }
    
    @Get(':id')
    getProduct(@Param('id') prodId:string){
        return this.productsServices.getSingleProduct(prodId);
    }

    @Patch(':id')
    updateProduct(@Param('id') prodId:string,@Body() createProduct:CreateProduct ){
        return this.productsServices.updateProduct(prodId,createProduct)
    }

    @Delete(':id')
    removeProduct(@Param('id') prodId:string){
        return this.productsServices.deletProduct(prodId);
    }
}
