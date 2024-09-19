// vue - i18n.d.ts;

import { DefineComponent } from 'vue';
import { Composer } from 'vue-i18n';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $t: Composer['t'];
    $i18n: Composer;
  }
}

export {};
