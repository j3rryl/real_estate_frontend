import { Component, inject } from '@angular/core';
import { PropertyService } from '../services/property.service';
import { Property } from '../interfaces/Property';
import { SkeletonLoaderComponent } from '../skeleton-loader/skeleton-loader.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [SkeletonLoaderComponent, FormsModule],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss',
})
export class PropertiesComponent {
  title = 'properties';
  searchQuery: string = '';
  propertyService = inject(PropertyService);
  properties: Property[] = [];
  isLoading = false;

  constructor() {
    this.isLoading = true;
    this.propertyService.getProperties().subscribe({
      next: (data) => {
        this.properties = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      },
    });
  }

  onSearch(event: Event) {
    event.preventDefault();
    this.isLoading = true;

    this.propertyService.getPropertiesWithParams(this.searchQuery).subscribe({
      next: (data) => {
        this.properties = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      },
    });
  }
  addPost() {
    this.propertyService
      .createProperty({
        title: 'Hello there',
        body: 'Pleasure to meet ya',
      })
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
