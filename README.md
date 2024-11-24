# RealEstateFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Backend Configuration

The backend should be running on a separate port. Ensure that the correct API URL is set in the `PropertyService` file located at:

`src/app/services/property.service.ts`

By default, the API URL is set to:

```typescript
private apiUrl = 'http://127.0.0.1:8000';
```
