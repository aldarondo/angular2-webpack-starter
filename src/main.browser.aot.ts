/*
 * Angular bootstraping
 */
import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';

/*
 * Bootstrap our Angular app with a top level NgModule
 */
platformBrowser()
  .bootstrapModuleFactory(AppModuleNgFactory)
  .catch(err => console.error(err));
