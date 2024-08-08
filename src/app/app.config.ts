import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { ReducerType } from './Models/User.model';
import { store_Reducers } from './Store/Store';
import { UsersEffect } from './Store/Effects/Users.Effect';

export const appConfig: ApplicationConfig = {
  providers: [
                provideZoneChangeDetection({ eventCoalescing: true }), 
                provideRouter(routes), 
                provideAnimationsAsync(),
                provideHttpClient(),
                provideStore<ReducerType>(store_Reducers),
                provideEffects([UsersEffect])
              ]
};
