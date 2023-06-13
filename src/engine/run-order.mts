import { ActionType } from '../action/core.mjs';
import { EnterAction } from '../action/enter.mjs';
import { Action } from '../action/index.mjs';
import { LeaveAction } from '../action/leave.mjs';
import { Game } from '../game/index.mjs';
import { Order, execute } from '../order/index.mjs';
import { View, getView } from './get-view.mjs';
import { tick } from './tick.mjs';

interface Operation {
  steps: Action[][];
}

const runOrder = (game: Game, order: Order, players: number[]): Operation[] => {
  const executor = execute(game, order);
  let views: View[] = getViews(game, players);
  const operations: Operation[] = players.map(() => ({ steps: [] }));

  while (true) {
    const { value, done } = executor.next();

    if (done) {
      break;
    }

    tick(game, value);
    const newViews = getViews(game, players);
    players.forEach((player) => {
      operations[player].steps.push(
        watch(value, views[player], newViews[player])
      );
    });
    views = newViews;
  }

  return operations;
};

const getViews = (game: Game, players: number[]) => {
  return players.map((player) => getView(game, player));
};

const watch = (step: Action[], preView: View, postView: View): Action[] => {
  const insightEntities = preView.filter((preEntity) => {
    return postView.includes(preEntity);
  });
  const enterEntities = postView.filter((postEntity) => {
    return !preView.includes(postEntity);
  });
  const leaveEntities = preView.filter((preEntity) => {
    return !postView.includes(preEntity);
  });
  const insightActions = step.filter((action) => {
    return insightEntities.some((insightEntity) => {
      return insightEntity.id === action.id;
    });
  });
  const enterActions: EnterAction[] = enterEntities.map((enterEntity) => ({
    type: ActionType.Enter,
    id: '',
    entity: enterEntity
  }));
  const leaveActions: LeaveAction[] = leaveEntities.map((leaveEntity) => ({
    type: ActionType.Leave,
    id: leaveEntity.id
  }));
  return [...insightActions, ...enterActions, ...leaveActions];
};

export { runOrder };
