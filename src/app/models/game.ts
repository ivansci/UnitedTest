export class Game {

    categories: Array<string>;
    features: Array<any>;
    themes: Array<any>;
    icons: Array<any>;
    backgrounds: Array<any>;
    id: string;
    server_game_id: string;
    extearnal_game_id: string;
    front_game_id: string;
    name: string;
    title: string;
    ratio: string;
    status: string;
    provider: string;
    show_as_provider: string;
    provider_title: string;
    game_options: null;
    blocked_countries: Array<string>;
    has_age_restriction: number;
    icon_2: string;
    background: string;
    types: {
        realMode: number;
        funMode: number;
    };
    game_skin_id: string;
    cats: [
        {
            id: number,
            title: string;
            type: string;
        }
    ];
    feats?: Array<string>;
    thms?: Array<string>;
    active: string;
}
