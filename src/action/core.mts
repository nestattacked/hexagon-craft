enum ActionType {
  Move,
  Enter,
  Leave
}

interface Core {
  type: ActionType;
  id: string;
}

export { ActionType, Core };
