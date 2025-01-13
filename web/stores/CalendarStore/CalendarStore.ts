import { makeAutoObservable } from "mobx";

export class CalendarStore {
    value: Date | null = new Date();

    constructor() {
        makeAutoObservable(this);
    }

    setValue(newValue: Date | null) {
        this.value = newValue;
    }
}

