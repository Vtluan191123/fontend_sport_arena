import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../service/auth.service';

export const customInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService);
  const token = localStorage.getItem('token');
  // Danh sách các URL không cần set header
  const excludedUrls = [
    'http://localhost:8080/api/v1/auth/login',
    'http://localhost:8080/api/v1/auth/refresh_token',
    'http://localhost:8080/api/v1/football_field',
    'http://localhost:8080/api/v1/auth/register',

  ];






  // Kiểm tra URL có thuộc danh sách excludedUrls không
  const shouldExclude = excludedUrls.some((url) => req.url.startsWith(url));

  // Nếu URL thuộc danh sách excludedUrls, không thêm Authorization
  if (shouldExclude) {
    console.log('check', req.url);
    console.log('check', shouldExclude);

    return next(req);
  }

  return next(addTokenInHeader(req, token!!)).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        return authService.refreshToken().pipe(
          switchMap((data: any) => {
            const newToken = data.data.token.accessToken; // Giả sử backend trả về token mới
            console.log('Token mới:', newToken);

            // Lưu token mới vào localStorage
            localStorage.setItem('token', newToken);

            // Gửi lại request với token mới
            const retryReq = addTokenInHeader(req, newToken);
            return next(retryReq);
          })
        )
      }
      return throwError(error);
    })
  )
};

function addTokenInHeader(req: HttpRequest<unknown>, token: string) {
  const cloneReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  })
  return cloneReq;
}

