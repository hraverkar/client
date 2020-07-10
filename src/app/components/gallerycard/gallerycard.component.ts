import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Gallery } from 'src/app/services/gallery';

@Component({
  selector: 'app-gallerycard',
  templateUrl: './gallerycard.component.html',
  styleUrls: ['./gallerycard.component.scss'],
})
export class GallerycardComponent implements OnInit {
  gallerys: Gallery = {
    id: '',
    imageUrl: '',
    imageTitle: '',
    imageDescription: '',
    uploaded: null,
  };
  isLoadingResults = true;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getAllGalleryItems();
  }

  getAllGalleryItems(): void {
    this.api.getAllGalleryItem().subscribe((data: any) => {
      this.gallerys = data;
      this.isLoadingResults = false;
    });
  }
}
