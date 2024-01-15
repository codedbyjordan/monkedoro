export type ClassnameProp = {
  className?: string;
};

export type InputChangeEvent = Event & {
  currentTarget: HTMLInputElement;
  target: HTMLInputElement;
};
