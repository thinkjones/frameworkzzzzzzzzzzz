import {Injectable} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';

import {AppComponent} from './containers/App';

export const STATES = [
  {
    name: 'App',
    url: '/',
    component: AppComponent
  }
];

@Injectable()
export class MyUIRouterConfig {
  configure(uiRouter: UIRouter) {
    uiRouter.urlRouterProvider.otherwise(() => uiRouter.stateService.go('App'));
  }
}
