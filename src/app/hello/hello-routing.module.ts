import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';

const appRoutes : Routes = [
    {path : 'hello' , component : HelloComponent}
];

@NgModule({
    imports : [RouterModule.forChild(appRoutes)],
    exports : [RouterModule]
})
export class HelloRoutingModule {}