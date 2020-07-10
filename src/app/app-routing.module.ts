import { GalleryDetailsComponent } from './components/gallery-details/gallery-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GallerycardComponent } from './components/gallerycard/gallerycard.component';

const routes: Routes = [
  {
    path: 'gallery',
    component: GalleryComponent,
    data: { title: 'Gallery' },
  },
  {
    path: 'gallery-details/:id',
    component: GalleryDetailsComponent,
    data: { title: 'Gallery Details' },
  },
  {
    path: '',
    redirectTo: '/gallery',
    pathMatch: 'full',
  },
  {
    path: 'gallerycard',
    component: GallerycardComponent,
    data: { title: 'Gallery card' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
