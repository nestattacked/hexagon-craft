enum OrderType {
  Move,
  Start
}

interface Core {
  type: OrderType;
  commander: number;
}

export { OrderType, Core };
