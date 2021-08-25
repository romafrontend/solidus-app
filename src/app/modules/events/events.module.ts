import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AgGridModule} from 'ag-grid-angular';

import {eventsRoutes} from './events.routing';

import {EventsService} from './services/events.service';

import {EventsContainerComponent} from './components/events-container.component';
import {EventsDataviewComponent} from './components/events-dataview.component';
import {EventPropertiesComponent} from './components/event-properties.component';

@NgModule({
    declarations: [EventsContainerComponent, EventsDataviewComponent, EventPropertiesComponent],
    imports: [CommonModule, RouterModule.forChild(eventsRoutes), AgGridModule.withComponents([])],
    providers: [EventsService]
})
export class EventsModule {}