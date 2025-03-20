import { createSelector } from "@ngrx/store";
import { AppCounterState } from "./counter.state";


export const selectCounterState = (state: AppCounterState) => state.counter;

export const selectCount = createSelector(
    selectCounterState, 
    (state) => state.count
)
