import { Component, OnInit, OnDestroy } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'websiteBuilder';

  ngOnInit() {
    $(document).ready(function () {
      $("#loading .sk-chase").fadeOut(1000, () => {
        $("#loading .sk-chase").parent().fadeOut(300, ()=>{
          $("#loading").remove();
          $("body").css("overflow-y", "auto");
        });
      });
    })

  }

  ngOnDestroy() { }
}

