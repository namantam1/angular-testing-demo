import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService((null as unknown as HttpClient));
    component = new TodosComponent(service);
  });

  it('should set todos property with the item return from the server', () => {
    spyOn(service, "getTodos").and.callFake(() => {
      return of([1, 2, 3] as any[]);
    });

    component.ngOnInit();

    expect(service.getTodos).toHaveBeenCalled()
    expect(component.todos.length).toBe(3);
  });

  it("should call a server to save changes when a new item is added", () => {
    spyOn(service, "add").and.callFake(of)

    component.add(10);

    expect(service.add).toHaveBeenCalledWith(10);
    expect(component.todos).toEqual([10]);
  });

  // it("should call a server to make changes when a new item is deleted", () => {
  //   component.todos = [1, 2, 3];
  //   spyOn(service, "delete").and.callFake(id => {
  //     component
  //   })

  //   component.delete(10);

  //   expect(service.add).toHaveBeenCalledWith(10);
  //   expect(component.todos).toEqual([10]);
  // });
});