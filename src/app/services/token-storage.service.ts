import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'user_email';
const Nom = 'user_nicename';

const USER_Data = 'user_data';
const Total = null;
const Discount=null;

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private route:Router) { }

  signOut() {
    window.localStorage.clear();
  }

  public saveToken(token: string,email :string,user_nicename :string, ) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
    window.localStorage.setItem(USER_KEY, email);
    window.localStorage.setItem(Nom, user_nicename);

  }
  public saveUserData(id:string) {
    window.localStorage.removeItem(USER_Data);
    window.localStorage.setItem(USER_Data, id);
  }
  public saveTotal(total: any) {
    window.localStorage.removeItem("Total");
    window.localStorage.setItem("Total", total);
  }
  public saveTotalbeforedis(TotalBDisc: any) {
    window.localStorage.removeItem("TotalBDisc");
    window.localStorage.setItem("TotalBDisc", TotalBDisc);
  }
  public getTotalbeforedis() {

    return localStorage.getItem("TotalBDisc");
  }

  public saveItem(item:any) {

    window.localStorage.setItem('Item',JSON.stringify(item))
  }
  public getItem(){

    return window.localStorage.getItem("Item")
  }
  public getTotal() {

    return localStorage.getItem("Total");
  }
  public getCaissier() {

    return localStorage.getItem("user_nicename");
  }

  public saveDiscount(Discount: any) {
    window.localStorage.removeItem("Discount");
    window.localStorage.setItem("Discount", Discount);
  }
  public getDiscount() {

    return localStorage.getItem("Discount");
  }
  public getUserData(){

      return localStorage.getItem('roles');
  }
  


 
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    this.route.navigate(["login"]);
  }
}
