declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
// src/shims-md.d.ts
declare module '*.md' {
    import { ComponentOptions } from 'vue'
    const component: ComponentOptions
    export default component
}
