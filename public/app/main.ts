import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

//Call for production mode
// enableProdMode();

platform.bootstrapModule(AppModule);
