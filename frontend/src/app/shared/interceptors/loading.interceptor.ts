import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from 'src/app/services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private pendingRequests = 0;

  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.showLoading();
    return next.handle(request).pipe(
      finalize(() => this.hideLoading())
    );
  }

  private showLoading(): void {
    if (this.pendingRequests === 0) {
      this.loadingService.showLoading();
    }
    this.pendingRequests++;
  }

  private hideLoading(): void {
    this.pendingRequests--;
    if (this.pendingRequests === 0) {
      this.loadingService.hideLoading();
    }
  }
}
