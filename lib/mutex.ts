import { warn } from "console";

export class Mutex {
    private _locked: boolean;
    private _queue: ((value: this) => void)[];

    constructor() {
        this._locked = false;
        this._queue = [];
    }

    get locked(): boolean {
        return this._locked;
    }

    syncAcquire(): this | null | undefined {
        if (this._locked) {
            return null;
        }
        this._locked = true;
        return this;
    }

    async acquire(): Promise<void> {
        if (this._locked) {
            await new Promise<this>(resolve => this._queue.push(resolve));
        }
        this._locked = true;
    }

    release(): void {
        if (!this._locked) {
            console.warn("Lock is not acquired");
            return;
        }
        this._locked = false;
        if (this._queue.length > 0) {
            const resolve = this._queue.shift();
            if (resolve) {
                resolve(this);
            }
        }
    }
}
