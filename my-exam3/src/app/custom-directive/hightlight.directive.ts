import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

// [highlight] : 디렉티브를 속성처럼 사용한다.
// highlight : 디렉티브를 커스텀태그처럼 사용한다.
@Directive({
  selector: '[highlight]'
})
export class HightlightDirective {

  constructor(
    private el: ElementRef, // 실제 돔의 엘리먼트 참조 객체
    private renderer: Renderer // 엘리먼트 조작 객체
  ) { }

  // highlight 속성이 설정된 엘리먼트에서 해당 이벤트가 발생하면
  // 함수를 기동시킨다.
  @HostListener('focus')
  onFocus() {
    // 네이티브 엘리먼트 속성으로 style="background: yellow" 설정을 추가한다.
    this.renderer.setElementStyle(this.el.nativeElement,
      'background', 'yellow');
  }

  @HostListener('blur')
  onBlur() {
    this.renderer.setElementStyle(this.el.nativeElement,
      'background', 'white');
  }

}
