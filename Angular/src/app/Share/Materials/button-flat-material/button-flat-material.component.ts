import { Component, Input, OnInit } from '@angular/core';
/**
 * @title Button varieties
 */
@Component({
  selector: 'button-flat-material',
  templateUrl: 'button-flat-material.component.html',
  styleUrls: ['button-flat-material.component.css'],
})
export class ButtonFlatMaterialComponent implements OnInit {
  @Input() widthPara: string | undefined;
  @Input() heightPara: string | undefined;
  @Input() colorPara: string | undefined;
  @Input() backgroundPara: string | undefined;

  style: string = "";

  width: string = "auto";
  height: string = "auto";
  color: string = "#fff"
  background: string = "#007bff";

  constructor() {
  }
  ngOnInit(): void {
    if (this.widthPara !== undefined) this.width = this.widthPara;
    if (this.heightPara !== undefined) this.height = this.heightPara;
    if (this.colorPara !== undefined) this.color = this.colorPara;
    if (this.backgroundPara !== undefined) this.background = this.backgroundPara;

    this.style = "width: " + this.width + "; height: " + this.height + "; color: "
      + this.color + " ; background-color: " + this.background + ";";
  }
}

