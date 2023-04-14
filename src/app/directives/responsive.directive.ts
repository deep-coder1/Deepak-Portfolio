import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResponsive]'
})
export class ResponsiveDirective {

  constructor(
    private element: ElementRef,
    private breakpointObserver: BreakpointObserver
    ) {

      this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe({
        next: (result: any) => {
          // console.log(result);
          for (let breakpoint of Object.keys(result.breakpoints)) {
            if (result.breakpoints[breakpoint]) {
              if (breakpoint === Breakpoints.HandsetPortrait) {
                // this.pcMode = false;
                this.element.nativeElement.classList.remove('pc');
              }
                
              if (breakpoint === Breakpoints.WebLandscape) {
                // this.pcMode = true;
                this.element.nativeElement.classList.add('pc');
              }
            }
          }
        },
      });
    }

}
