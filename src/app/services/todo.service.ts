import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Todo } from '../modules/todo';
const httpOption = {
  headers : new HttpHeaders({
    'content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = "https://jsonplaceholder.typicode.com/posts";
  todosLimit = '?_limit=5';

  constructor(private http:HttpClient) { }
  // Get Todo
  getTodos():Observable<Todo[]>{
   return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }
  //Delete Todo
  deleteTodo(todo:Todo):Observable<Todo>{
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.delete<Todo>(url,httpOption);
  }
  // Add Todo
  addTodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.todosUrl,todo,httpOption);
  }
  // toggle completed
  toggleCompleted(todo:Todo):Observable<any>{
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.put(url, todo, httpOption);
  }
}
