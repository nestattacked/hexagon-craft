import { MoveAction } from './move.mjs';
import { SeeAction } from './see.mjs';
import { UnseeAction } from './unsee.mjs';

type Action = MoveAction | SeeAction | UnseeAction;

export { Action };
