import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/services/gallery';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-gallery-details',
  templateUrl: './gallery-details.component.html',
  styleUrls: ['./gallery-details.component.scss'],
})
export class GalleryDetailsComponent implements OnInit {
  gallery: Gallery = {
    id: '',
    imageUrl: '',
    imageTitle: '',
    imageDescription: '',
    uploaded: null,
  };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.getGalleryDetails(this.route.snapshot.paramMap.get('id'));
  }

  getGalleryDetails(id: string): void {
    this.api.getGalleryById(id).subscribe((data: any) => {
      this.gallery = data;
      console.log(this.gallery);
      this.isLoadingResults = false;
    });
  }
}
