export class GetFilteredGameList {
    static readonly type = '[Games API] Get Filtered List';
    constructor(public payload: string) { }
}

export class GetSearchedGameList {
    static readonly type = '[Games API] Get Searched List';
    constructor(public payload: string) { }
}

export class GetGamesList {
    static readonly type = '[Games API] Get Game List';
    constructor() { }
}

export class GetGameById {
    static readonly type = '[Games API] Get Game By Id';
    constructor(public payload: number) { }
}

export class GetGameListFailed {
    static readonly type = '[Games API] Get Game List Failed';
    constructor(public payload?: any) { }
}
