import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CompanyController } from "src/controllers/company.controller";
import { CompanySchema } from "src/schemas/company.schema";
import { CompanyService } from "src/services/company.service";
import { TaskModule } from "./task.module";


@Module({
    imports: [TaskModule, MongooseModule.forFeature([{ name: 'company', schema: CompanySchema }])],
    controllers: [CompanyController],
    providers: [CompanyService],
    exports: [CompanyService]
})

export class CompanyModule { }