import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path: 'events', loadChildren: () => import ('./modules/events/events.module').then(m => m.EventsModule)},
    {path: '**', redirectTo: 'events'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}