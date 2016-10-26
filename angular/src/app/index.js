import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {UIView, UIRouterModule, provideUIRouter} from 'ui-router-ng2';
import {STATES, MyUIRouterConfig} from './routes';
import {store} from './reducers';

import {AppComponent} from './containers/App';
import {FooterComponent} from './components/Footer';
import {HeaderComponent} from './components/Header';
import {MainSectionComponent} from './components/MainSection';
import {TodoItemComponent} from './components/TodoItem';
import {TodoTextInputComponent} from './components/TodoTextInput';

@UIRouterModule({
  imports: [
    BrowserModule,
    FormsModule,
    store
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainSectionComponent,
    TodoItemComponent,
    TodoTextInputComponent
  ],
  providers: [
    provideUIRouter({configClass: MyUIRouterConfig})
  ],
  states: STATES,
  bootstrap: [UIView]
})
export class AppModule {}
