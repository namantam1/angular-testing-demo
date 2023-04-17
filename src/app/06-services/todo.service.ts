
import { HttpClient } from '@angular/common/http';

export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo: any) {
    return this.http.post<any>('...', todo)
  }

  getTodos() { 
    return this.http.get<any[]>('...')
  }

  delete(id?: string | number) {
    return this.http.delete('...')
  }
}