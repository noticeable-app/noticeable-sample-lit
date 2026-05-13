interface Window {
  noticeable: {
    render(
      component: 'widget',
      widgetId: string,
      options?: { selector?: string; root?: Element | ShadowRoot },
    ): Promise<void>
    destroy(component: 'widget', widgetId: string): Promise<void>
  }
}
