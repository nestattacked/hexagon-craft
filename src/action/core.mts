enum ActionType {
  Move,
  See,
  Unsee
}

interface Core {
  type: ActionType;
}

export { ActionType, Core };
