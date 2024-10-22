import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "../services/api.service";

@Injectable({
  providedIn: "root",
})
export class EditorGuard implements CanActivate {
  constructor(private apiService: ApiService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const VERSION = route.queryParams["VERSION"];
    console.log("VERSION", VERSION);
    this.apiService.createNewApi(VERSION);
    return true;
  }
}
