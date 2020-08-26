export class Game {

    categories: Array<any>;
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
    width?: string;
    height?: string;
    ratio?: string;
    status: string;
    provider: string;
    show_as_provider: string;
    provider_title: string;
    game_options?: any;
    blocked_countries: Array<string>;
    has_age_restriction: number;
    icon_2: string;
    icon_3?: string;
    background?: string;
    types: {
        realMode: number;
        funMode?: number;
        viewMode?: number;
        is_target?: number;
    };
    game_skin_id: string;
    cats?: Array<ExtraDesc>;
    feats?: Array<ExtraDesc>;
    thms?: Array<ExtraDesc>;
    active: string;
}

interface ExtraDesc {
    id: string;
    title: string;
    type: string;
}
