import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

declare var $: any;


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    $("#editbar").hide()

  }

  next() {
    $("#sidebar").hide()
    // $(".ro").removeClass("row")
    // $("#mainside").removeClass("col-md-9")
    // $("#mainside").addClass("w-100")
    $("#editbar").show()
  }
  event: any
  change(x: any) {
    this.event = x.target;
    console.log(this.event)
    $("#date").val($(this.event).text());
    $("#date").keyup(() => {
      $(this.event).text($("#date").val())
    })

    $("#color").val($(this.event).css("color"));
    $("#color").keyup(() => {
      $(this.event).css("color", $("#color").val())
    })

  



    $("#back").val($(this.event).css("background-color"));
    $("#back").keyup(() => {
      $(this.event).css("background-color", $("#back").val())
    })




  }

  finsh() {


    $("#sidebar").hide()
    $(".ro").removeClass("row")
    $("#mainside").removeClass("col-md-9")
    $("#mainside").addClass("w-100")
    $("#editbar").hide()
    $("mat-stepper").slideUp(1000)
  }


  back()
  {

    $("#sidebar").show()
    // $(".ro").removeClass("row")
    // $("#mainside").removeClass("col-md-9")
    // $("#mainside").addClass("w-100")
    $("#editbar").hide()

  }

  temp: any = `<div class="h-50"></div>`

  isTemp1: boolean = false;
  isTemp2: boolean = false;
  isTemp3: boolean = false;

  imgTemp1: any = `<div class="25">
  <img src="../../assets/image/newsTemp1.png" class="w-100">
  </div>`

  items = [this.imgTemp1];
  basket = [this.temp];

  drop(event: CdkDragDrop<any[]>) {
    if (this.basket.length == 1) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
        if (this.basket[1] == this.imgTemp1) {
          this.isTemp1 = true;
        }
      }
    } else {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(
          this.basket,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
        this.basket[0] = this.temp;
        if ((this.basket[0] == this.temp) && (this.basket[1] == undefined)) {
          this.isTemp1 = false;
          this.isTemp2 = false;
          this.items[0] = this.imgTemp1;
        }
      }
    }
  }
 


}
