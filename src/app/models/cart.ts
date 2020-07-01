import { Service } from './service';
import { Supplier } from './supplier';

export class Cart {
    constructor(
        public service: Service,
        public supplier: Supplier,
        public cuantity: number
    ){}
}
