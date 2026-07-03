import { HttpInterceptorFn } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError, timer } from 'rxjs';

// Add authorization headers
// Global Error Handling
// Error Logging
// Retry, etc.

export const retryInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('HTTP request:', req.url);

  return next(req).pipe(
    retry({
      count: 3,
      delay: (error, retryCount) => {
        console.log(`retry #${retryCount}`, error.status);

        // retry only for network / server errors
        if (error.status === 0 || error.status >= 500) {
          return timer(1000); // MUST return Observable
        }

        throw error;
      }
    }),
    catchError(error => {
      console.error('failed after retries');
      return throwError(() => error);
    })
  );
};

