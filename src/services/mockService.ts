export const mockService = {
  getDemoData: () =>
    Promise.resolve([
      { id: 1, title: 'Демо 1', description: 'Описание 1' },
      { id: 2, title: 'Демо 2', description: 'Описание 2' },
    ]),
}
