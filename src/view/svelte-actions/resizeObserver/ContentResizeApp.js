import { SvelteApp }          from '#runtime/svelte/application';

import ContentResizeAppShell  from './ContentResizeAppShell.svelte';

export class ContentResizeApp extends SvelteApp
{
   static get defaultOptions()
   {
      return foundry.utils.mergeObject(super.defaultOptions, {
         title: 'EssentialESM.apps.actions.content-resize-observer.title',
         resizable: true,
         height: 'auto',

         svelte: {
            class: ContentResizeAppShell,
            target: document.body,
         }
      });
   }
}
