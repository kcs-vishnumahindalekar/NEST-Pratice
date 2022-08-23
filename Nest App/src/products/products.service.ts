import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProduct } from './dto/create-product.dto';
import { Product } from './product.module';


@Injectable()
export class ProductsService {

    constructor(@InjectModel('Products') private readonly productModule : Model<Product>){}

    insertProduct(createProduct:CreateProduct) {
        const newProduct = new this.productModule(createProduct);
        return newProduct.save(); 
    }

    async getProducts(){
        const result = await this.productModule.find();
        return result;
    }

    getSingleProduct(prodId:string){
        return this.findProduct(prodId)
    }

    async updateProduct(prodId:string,createProduct:CreateProduct){
        const product =await this.findProduct(prodId)
        if(createProduct.title){
            product.title = createProduct.title
        }
        if(createProduct.desc){
            product.desc = createProduct.desc
        }
        if(createProduct.price){
            product.price = createProduct.price
        }
        product.save();
        return product;

        // await this.productModule.findByIdAndUpdate(prodId,createProduct)
        // return {Message:"Product Updated"}
        
    }

    async deletProduct(prodId:string){
        return this.productModule.findByIdAndDelete(prodId)
    }

    private async findProduct(id: string): Promise<Product> {
        try{
            const product =await this.productModule.findById(id)
            if (!product) {
                throw new NotFoundException('Could not find product.');
            }
            return product;
        }catch(err){
            throw new NotFoundException('Could not find product.');
        }
    }
}
