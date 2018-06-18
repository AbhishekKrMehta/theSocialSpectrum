import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {

  constructor( private sanitizer:DomSanitizer ){}

  transform(data: string, args?: any): any {

    var htmlRegex = new RegExp("<[a-z][\s\S]*>");
     
    if (htmlRegex.test(data)) {
      return this.sanitizer.bypassSecurityTrustHtml(data);
    } else {
      return this.sanitizer.bypassSecurityTrustResourceUrl(data);
    }
    
  }

}
