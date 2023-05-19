import { Cuenta } from "src/cuenta/entities/cuenta.entity";
import { BaseFactory } from "../Factory.class";
import {Connection} from 'typeorm'
import { Injectable } from "@nestjs/common";

@Injectable()
export class CuentasFactory extends BaseFactory<Cuenta>{
    constructor(connection:Connection){
        super(connection);
        this.repository = connection.getRepository(Cuenta);
    }
}