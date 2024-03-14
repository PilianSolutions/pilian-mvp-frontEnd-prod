import { Injectable } from "@angular/core";
import * as appInit from '../config/config.json';
import { ListarAppConfig } from "./shared/model/listarAppConfig.model";

@Injectable()
export class AppConfig {
    static settings: ListarAppConfig;
    constructor(){}

    listaUrlApi(){
        AppConfig.settings = (appInit as any).default
    }

}
