enum ActionType {
  Move,
  Emerge
}

interface Core {
  type: ActionType;
}

export { Core, ActionType };
