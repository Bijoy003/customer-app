import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-web-component-demo',
  templateUrl: './web-component-demo.component.html',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WebComponentDemoComponent implements OnInit {
  isLoaded = false;

  ngOnInit() {
  if (!customElements.get('dashboard-widget')) {

    const script = document.createElement('script');

    script.type = 'module'; // ✅ required
    // script.src = 'http://localhost:4202/main-3YCKUCHO.js';
    script.src = 'http://localhost:4202/main.js';

    script.onload = () => {
      console.log('✅ Script loaded');

      // 🔥 Wait until Angular inside module finishes bootstrap
      const check = setInterval(() => {
        if (customElements.get('dashboard-widget')) {
          console.log('✅ Web Component registered');
          clearInterval(check);
          this.isLoaded = true;
        }
      }, 50);
    };

    script.onerror = () => {
      console.error('❌ Failed to load script');
    };

    document.body.appendChild(script);

  } else {
    this.isLoaded = true;
  }
}
}
