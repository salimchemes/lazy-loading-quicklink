import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: 'dogs',
    loadChildren: () => import('./dogs/dogs.module').then((m) => m.DogsModule),
  },
  {
    path: 'cats',
    loadChildren: () => import('./cats/cats.module').then((m) => m.CatsModule),
    data: {
      preload: false,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
