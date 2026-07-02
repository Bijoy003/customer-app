import { createCustomElement } from '@angular/elements';
import { DashboardWidgetComponent } from './app/dashboard-widget/dashboard-widget.component';
import { createApplication } from '@angular/platform-browser';

(async () => {
  try {
    console.log('🔥 Starting Web Component init');

    const app = await createApplication();

    console.log('🔥 Angular application created');

    const element = createCustomElement(DashboardWidgetComponent, {
      injector: app.injector,
    });

    customElements.define('dashboard-widget', element);

    console.log('✅ dashboard-widget registered');

  } catch (err) {
    console.error('❌ Web Component bootstrap failed:', err);
  }
})();