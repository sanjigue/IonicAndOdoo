import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {SQLiteObject } from '@ionic-native/sqlite';
// import { resolveDefinition } from '@angular/core/src/view/util';

@Injectable()
export class IonicService {
    //serve
    public API = 'http://localhost:40000/shop';
    //sqlite
    private db: SQLiteObject;

    constructor(public http: HttpClient) {
     //storage: SQLite;
        console.log("Welcome to ionic-service");

    }
    //Users
    //get
    findAllUsers(): Observable<any> {
        return this.http.get(this.API + '/res_users');
    }
    //Add
    addUser(newUser: any) {
        console.log("Este es " + JSON.stringify(newUser));
        return this.http.post(this.API + '/res_users/create', newUser);
    }
    //remove
    removeOneUser(idDelete: number) {
        return this.http.delete(this.API + '/res_users/delete/' + idDelete);
    }
    //update
    // updateOne(updateUser:any){
    //     return this.http.post(this.API + '/res_users/create', updateUser);
    // }

    //Products
    findAllProducts(): Observable<any> {
        return this.http.get(this.API + '/product_template');
    }

    addProduct(newProduct: any) {
        console.log("Este es " + JSON.stringify(newProduct));
        return this.http.post(this.API + '/product_template/create', newProduct);
    }

    removeOneProduct(idDelete: number) {
        return this.http.delete(this.API + '/product_template/delete/' + idDelete);
    }

    //Comapany
    findAllCompany(): Observable<any> {
        return this.http.get(this.API + '/res_company');
    }

    removeOneCompany(idDelete: number) {
        return this.http.delete(this.API + '/res_company/delete/' + idDelete);
    }

    //     /*get(id : number) {
    //       return this.http.get(this.API+'/'+id);
    //     }*/

    //SQlite
    CreateImage(ruta: string) {
        return new Promise((resolve, reject) => {
            let sql = "INSERT INTO images(ruta) values (?)";
            this.db.executeSql(sql, [ruta]).then((data) => {
                resolve(data);
            }, (error) => {
                reject(error);
            });
        });
    }

    GetAllImages() {
        return new Promise((resolve, reject) => {
            this.db.executeSql("SELECT * FROM images", []).then((data) => {
                let arrayImages = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        arrayImages.push({
                            id: data.rows.item(i).id,
                            ruta: data.rows.item(1).ruta
                        });
                    }
                }
                resolve(arrayImages);
            }, (error) => {
                reject(error);
            });
        });
    }
}