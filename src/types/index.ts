export enum FieldInteractionType {
  Unveiled = 'UNVEILED',
  FlagAction = 'FLAG_ACTION',
  QuestionMarkAction = 'QUESTION_MARK_ACTION',
}

export enum ActionType {
  Placed = 'PLACED',
  Removed = 'REMOVED',
  NoChange = 'NO_CHANGE',
}

export enum FieldKey {
  FLAG = 'FLAG',
  QUESTION_MARK = 'QUESTION_MARK',
  BOMB = 'BOMB',
  BOMB_EXPLODE = 'BOMB_EXPLODE',
}

export interface FieldTarget {
  row: number;
  column: number;
}

export interface Interaction {
  type: FieldInteractionType;
  action?: ActionType;
  value?: number | string;
}

export interface GameModeConfiguration {
  columns: number;
  rows: number;
  bombs: number;
}
