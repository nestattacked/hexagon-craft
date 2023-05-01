enum OrderType {
  Move
}

interface Core {
  type: OrderType;
  commander: number;
}

export { OrderType, Core };
