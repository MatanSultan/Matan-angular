import { Todo } from './../model/Todo';
import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';



@Component({
  selector: 'drag-drop-example',
  templateUrl: "drag-drop.component.html",
  styleUrls: ["drag-drop.component.scss"]
})
export class DragDropComponent {

  Todo = [
    {
      id: 1,
      'description': 'להוציא את הכלב מהחדר הנגיש ביותר',
    
    },
    {
      id: 2,
      'description': 'להוציא את הכלב לטיול ',
   
    },
    {
      id: 3,
      'description': 'להאכיל את הכלב ',
   
    },
    {
      id: 4,
      'description': 'למזוג מים לריו ',

    },
    {
      id: 5,
      'description': 'לקנות שקית אוכל לכלב ',
     
    },
    {
      id: 6,
      'description': 'נקיון המלונה ',
    
    },
   
  ];

  done = [];

    dropMultiList(event: CdkDragDrop<Todo[]>) {

        if (event.previousContainer == event.container) {
            moveItemInArray(this.Todo, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex

            );
        }

    }


    drop(event: CdkDragDrop<Todo[]>) {

        console.log("previousIndex = ", event.previousIndex);

        console.log("currentIndex = " + event.currentIndex);

        moveItemInArray(this.Todo, event.previousIndex, event.currentIndex);

    }
}
