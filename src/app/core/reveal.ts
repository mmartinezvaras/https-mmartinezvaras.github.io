import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

// Hace aparecer el elemento la primera vez que entra en pantalla (clases .reveal / .in en styles.css).
// Un solo IntersectionObserver compartido para toda la página.
let observer: IntersectionObserver | null = null;

function shared(): IntersectionObserver | null {
  if (typeof IntersectionObserver === 'undefined') return null;
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          observer?.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.01 }
  );
  return observer;
}

@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal' }
})
export class Reveal implements OnInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>).nativeElement as HTMLElement;

  ngOnInit() {
    const io = shared();
    if (io) {
      io.observe(this.el);
    } else {
      this.el.classList.add('in');
    }
  }

  ngOnDestroy() {
    observer?.unobserve(this.el);
  }
}
