import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private clientId = '61179eeac24bed071f90';
    private clientSecret = 'fe221eaa5d0fc5b47256f389e32fd32884a18809';
    constructor(private _http: Http){
        console.log("Github service ready");
        this.username = "pgytis1";
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.clientId
        +'&client_secret='+this.clientSecret)
        .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.clientId
        +'&client_secret='+this.clientSecret)
        .map(res => res.json());
    }

    updateUser(username:string){
        this.username = username;
    }
}