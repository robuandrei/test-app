// Interface with data what will be displayed on DOM
export interface Entry {
  target: {
    file?: {
      name: string;
    },
    folder?: {
      name: string;
    }
  }
}
