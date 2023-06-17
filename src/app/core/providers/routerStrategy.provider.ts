import { Provider } from '@angular/core';
import { ActivatedRouteSnapshot, BaseRouteReuseStrategy, RouteReuseStrategy } from '@angular/router';


export class CustomReuseStrategy extends BaseRouteReuseStrategy {

  constructor(){
    super();
  }

  override shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return !!curr.queryParams['changeStrategy'] ? false : future.routeConfig === curr.routeConfig;
  }
}

export const CustomReuseStrategyProvider: Provider = {
  provide: RouteReuseStrategy,
  useClass: CustomReuseStrategy,
};
