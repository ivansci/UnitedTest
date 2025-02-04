import {Injectable} from '@angular/core';
import {Game} from '../models/game';
import {of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CasinoService {

    games: Array<Game> = [
        {
            'categories': [
                '51'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '2984',
            'server_game_id': '205',
            'extearnal_game_id': '3041',
            'front_game_id': 'ASG205',
            'name': 'WolfsBet ',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG205.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/2219ae1d06d31cb180a7b9cf13a322d7_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015628',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '93'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '2982',
            'server_game_id': '204',
            'extearnal_game_id': '3047',
            'front_game_id': 'ASG204',
            'name': 'Viking Treasures',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG204.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/f09b721146743c153c4bcefac2e7949f_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015630',
            'cats': [
                {
                    'id': '93',
                    'title': 'Top Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '4172',
            'server_game_id': '208',
            'extearnal_game_id': '3049',
            'front_game_id': 'ASG208',
            'name': 'Under Water',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/b7f060a6e0c289a437bfa4daa0f17086_casinoGameIcon2.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/0a65627dac4e909cc24300994d7fe10d_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015632',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '2992',
            'server_game_id': '2005',
            'extearnal_game_id': '3046',
            'front_game_id': 'ASG2005',
            'name': 'Tens Or Better ',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG2005.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/c28d9cc88883906fc04e24e11dd70423_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015636',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '95'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '743',
            'server_game_id': '5',
            'extearnal_game_id': '3018',
            'front_game_id': 'ASG5',
            'name': 'Sports Bet',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/b8642723b8d954eead8ee95760b534b7_background.jpeg',
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/253e60ffa2412a72649e6e7603295a8a_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/73015b89a9437858d4386b473d717db3_casinoGameIcon3.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015638',
            'cats': [
                {
                    'id': '95',
                    'title': 'Popular Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '93'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '2427',
            'server_game_id': '19',
            'extearnal_game_id': '3033',
            'front_game_id': 'ASG19',
            'name': 'Shamans Quest',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG19.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/b844159bcf6e18ae57834bf229087935_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015640',
            'cats': [
                {
                    'id': '93',
                    'title': 'Top Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '93'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '2902',
            'server_game_id': '201',
            'extearnal_game_id': '3038',
            'front_game_id': 'ASG201',
            'name': 'Santa Surprise',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG201.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/9eb78000dc9a28e0164ad066e2ed41cb_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015642',
            'cats': [
                {
                    'id': '93',
                    'title': 'Top Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '5592',
            'server_game_id': '300',
            'extearnal_game_id': '3052',
            'front_game_id': 'ASG300',
            'name': 'Royal Panda',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/745166648c09bb8bfd5146e26b04a60e_casinoGameIcon2.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/745166648c09bb8bfd5146e26b04a60e_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015643',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '1636',
            'server_game_id': '1101',
            'extearnal_game_id': '3034',
            'front_game_id': 'ASG1101',
            'name': 'Rabbit Fire Circus',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': '',
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG1101.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/ASG1101.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/ASG1101.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015644',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '733',
            'server_game_id': '2',
            'extearnal_game_id': '3015',
            'front_game_id': 'ASG2',
            'name': 'Poker.am',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG2.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/ASG2.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/ASG2.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015648',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '51',
                '93',
                '101'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '7215',
            'server_game_id': '214',
            'extearnal_game_id': '3054',
            'front_game_id': 'ASG214',
            'name': 'Merry Christmas',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/f8a6b2a340ee2cd31c363b836d45966f_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/f8a6b2a340ee2cd31c363b836d45966f_casinoGameIcon3.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/985093806be99c8bc929d781bc5cd771_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015654',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                },
                {
                    'id': '93',
                    'title': 'Top Slots',
                    'type': 'category'
                },
                {
                    'id': '101',
                    'title': 'Christmas Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '36'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '1314',
            'server_game_id': '1000',
            'extearnal_game_id': '116',
            'front_game_id': 'ASG1000',
            'name': 'Ogwil',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG1000.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/00c55ca740a4c164c67d2a4bf5625c29_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015652',
            'cats': [
                {
                    'id': '36',
                    'title': 'Skill Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '9024',
            'server_game_id': '321',
            'extearnal_game_id': '125159',
            'front_game_id': 'ASG321',
            'name': 'LuluBet',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/077484aa0668f1e6fa41c66691adb303_background.jpeg',
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/392f1260e7c8f37aaa737eced8cc4bab_casinoGameIcon2.png',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/54f313faeee35cd218a32579917a5d61_casinoGameIcon3.png',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015656',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '93'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '615',
            'server_game_id': '1',
            'extearnal_game_id': '3013',
            'front_game_id': 'ASG1',
            'name': 'Ivanushka',
            'title': null,
            'width': '960',
            'height': '700',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG1.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/ASG1.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/c184476ac1a344c15d71858d04fa99c0_background.jpeg',
            'types': {
                'realMode': 1,
                'is_target': 1,
                'funMode': 1
            },
            'game_skin_id': '5015662',
            'cats': [
                {
                    'id': '93',
                    'title': 'Top Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '52'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '1892',
            'server_game_id': '22',
            'extearnal_game_id': '3035',
            'front_game_id': 'ASG22',
            'name': 'Hi Lo',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG22.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/7ec057598f099891a234e0a5f3d0e6bc_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015664',
            'cats': [
                {
                    'id': '52',
                    'title': 'Mini Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '2980',
            'server_game_id': '203',
            'extearnal_game_id': '3039',
            'front_game_id': 'ASG203',
            'name': 'Halloween Night',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG203.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/5fe7f2a4c94dae429cd1f3c11440cdb5_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015666',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '95'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '735',
            'server_game_id': '6',
            'extearnal_game_id': '3019',
            'front_game_id': 'ASG6',
            'name': 'Gold Rush',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG6.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/c87d15489a3eb8edfe70a68f10bcf05e_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015668',
            'cats': [
                {
                    'id': '95',
                    'title': 'Popular Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '93'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '1635',
            'server_game_id': '18',
            'extearnal_game_id': '3032',
            'front_game_id': 'ASG18',
            'name': 'Fruit Cocktail',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG18.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/667de6effbea87bc1354c2ee8ef78dd2_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015670',
            'cats': [
                {
                    'id': '93',
                    'title': 'Top Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '4170',
            'server_game_id': '207',
            'extearnal_game_id': '3048',
            'front_game_id': 'ASG207',
            'name': 'Fresh Fruits',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/67af7c68afb504a9210e066baff61157_casinoGameIcon2.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/cb5785740241e9829e7c99bb33409fc4_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015672',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '95'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '521',
            'server_game_id': '23',
            'extearnal_game_id': '3037',
            'front_game_id': 'ASG23',
            'name': 'Flaming Fruits',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/cdd2216c13bec3ef534ef205f9d6c9d0_background.jpeg',
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/201e6fc4dfc046fa0d3ab90888ab87ab_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/0a26a2980eeabb3d8787222c3e8db118_casinoGameIcon3.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015674',
            'cats': [
                {
                    'id': '95',
                    'title': 'Popular Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '2986',
            'server_game_id': '2001',
            'extearnal_game_id': '3042',
            'front_game_id': 'ASG2001',
            'name': 'Double Double Bonus Poker',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG2001.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/5c9d400415a731c94214434e5029a04d_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015678',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '95'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '798',
            'server_game_id': '15',
            'extearnal_game_id': '3028',
            'front_game_id': 'ASG15',
            'name': 'Crazy Monkey',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/24287cfbb5bd35666428b6286a10316e_background.jpeg',
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/d9da174e43d6141a39b3c52bb50a87e1_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/4904fdda4a2dd101ddd39dc359094050_casinoGameIcon3.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015682',
            'cats': [
                {
                    'id': '95',
                    'title': 'Popular Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '2994',
            'server_game_id': '16',
            'extearnal_game_id': '3029',
            'front_game_id': 'ASG16',
            'name': 'Crazy Ducky',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG16.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/43569581df82873137f043544da05cea_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015684',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '6484',
            'server_game_id': '211',
            'extearnal_game_id': '3053',
            'front_game_id': 'ASG211',
            'name': 'Chinga Choong',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/be99d9c415fe8958190b9d77f5d7dcb2_casinoGameIcon2.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/b08f192c838d6b5b3b8a8fcb4df5baed_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015686',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '93'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '2433',
            'server_game_id': '21',
            'extearnal_game_id': '3036',
            'front_game_id': 'ASG21',
            'name': 'Chess Round',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG21.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/c5fec6ef48eaef39138b58cc3d88d867_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015687',
            'cats': [
                {
                    'id': '93',
                    'title': 'Top Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '2996',
            'server_game_id': '2004',
            'extearnal_game_id': '3045',
            'front_game_id': 'ASG2004',
            'name': 'Bonus Poker',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG2004.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/af3eeccc263e531af79371be8cde80d3_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015692',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '2978',
            'server_game_id': '202',
            'extearnal_game_id': '3040',
            'front_game_id': 'ASG202',
            'name': 'Bake House',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG202.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/a4f8aaca8c00813961d13bd00994e0f6_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015696',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '9021',
            'server_game_id': '320',
            'extearnal_game_id': '125158',
            'front_game_id': 'ASG320',
            'name': 'Animals',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/d22abfa1c309b092e5ce8169390f95df_background.jpeg',
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/7c24aa009f1be906e519fc8fd3479599_casinoGameIcon2.png',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/a91367882dedf2c5ac7d0ff1aca648b5_casinoGameIcon3.png',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015698',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '2990',
            'server_game_id': '2003',
            'extearnal_game_id': '3044',
            'front_game_id': 'ASG2003',
            'name': 'All American Poker',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG2003.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/1685caaefa91db8c570efe869787345b_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015700',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '1546',
            'server_game_id': '1100',
            'extearnal_game_id': '3031',
            'front_game_id': 'ASG1100',
            'name': 'Alice in Wonderland',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': '',
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG1100.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/ASG1100.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/ASG1100.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015701',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '9026',
            'server_game_id': '322',
            'extearnal_game_id': '125160',
            'front_game_id': 'ASG322',
            'name': '123456789',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/5636a9ec3ad54e5ff646f1558cdc64f9_background.gif',
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/f5fa388d8990c92e2958fab470b301ec_casinoGameIcon2.gif',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/9f3809497beaa4eb7b102958d98c32c7_casinoGameIcon3.gif',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015703',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '95'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '734',
            'server_game_id': '7',
            'extearnal_game_id': '3020',
            'front_game_id': 'ASG7',
            'name': '12 chairs',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/09a8b38c6c6b1a47e139a07efe3c37c6_background.jpeg',
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/84da9ab22239ee75e00244bfb14b007c_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/ba7bcb389752237d520dc5f662ea9120_casinoGameIcon3.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015705',
            'cats': [
                {
                    'id': '95',
                    'title': 'Popular Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '2988',
            'server_game_id': '2002',
            'extearnal_game_id': '3043',
            'front_game_id': 'ASG2002',
            'name': ' Jacks Or Better',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG2002.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/d3a08ea60e7d67f3c5ffa4f368dc400e_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5015707',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '7263',
            'server_game_id': '4',
            'extearnal_game_id': '5500',
            'front_game_id': 'PNH4',
            'name': 'Roulette',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'PNH',
            'show_as_provider': 'PNH',
            'provider_title': 'USOFTGAMING',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/22df2e045b7e54bb50ee79ab471a5e74_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/22df2e045b7e54bb50ee79ab471a5e74_casinoGameIcon3.jpeg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5267341',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '7266',
            'server_game_id': '6',
            'extearnal_game_id': '5501',
            'front_game_id': 'PNH6',
            'name': 'CASINO HOLD\'EM',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'PNH',
            'show_as_provider': 'PNH',
            'provider_title': 'USOFTGAMING',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/e6207f6ef83934fa208a601e1104c95b_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/e6207f6ef83934fa208a601e1104c95b_casinoGameIcon3.jpeg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5267342',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '7259',
            'server_game_id': '1',
            'extearnal_game_id': '5503',
            'front_game_id': 'PNH1',
            'name': 'Blackjack Unlimited',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'PNH',
            'show_as_provider': 'PNH',
            'provider_title': 'USOFTGAMING',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/8d3b144a69e00d0baf425137159ce94c_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/8d3b144a69e00d0baf425137159ce94c_casinoGameIcon3.jpeg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5267345',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '7257',
            'server_game_id': null,
            'extearnal_game_id': '4000243',
            'front_game_id': 'PNH0',
            'name': 'Blackjack',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'PNH',
            'show_as_provider': 'PNH',
            'provider_title': 'USOFTGAMING',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/396d48eb1b2eafb2f1ae9fe9d8e2564b_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/396d48eb1b2eafb2f1ae9fe9d8e2564b_casinoGameIcon3.jpeg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5267347',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '7261',
            'server_game_id': '2',
            'extearnal_game_id': '5502',
            'front_game_id': 'PNH2',
            'name': 'Baccarat',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'PNH',
            'show_as_provider': 'PNH',
            'provider_title': 'USOFTGAMING',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ac5884dcc8acebea24003f5bbc09aa89_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/ac5884dcc8acebea24003f5bbc09aa89_casinoGameIcon3.jpeg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5267349',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '6697',
            'server_game_id': 'Roulette',
            'extearnal_game_id': '19201',
            'front_game_id': 'LKSRoulette',
            'name': 'Roulette',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'LKS',
            'show_as_provider': 'LKS',
            'provider_title': 'LUCKY STREAK',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/019c8a09ff5244a90ff9dcdd35f27555_casinoGameIcon2.png',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/019c8a09ff5244a90ff9dcdd35f27555_casinoGameIcon3.png',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5267369',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '6696',
            'server_game_id': 'ExternalRoulette',
            'extearnal_game_id': '19205',
            'front_game_id': 'LKSExternalRoulette',
            'name': 'External Roulette',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'LKS',
            'show_as_provider': 'LKS',
            'provider_title': 'LUCKY STREAK',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/2818f4578f31c1d810650ddd1c2309a8_casinoGameIcon2.png',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/2818f4578f31c1d810650ddd1c2309a8_casinoGameIcon3.png',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5267371',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '6698',
            'server_game_id': 'Blackjack',
            'extearnal_game_id': '19202',
            'front_game_id': 'LKSBlackjack',
            'name': 'Blackjack',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'LKS',
            'show_as_provider': 'LKS',
            'provider_title': 'LUCKY STREAK',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ff2fa3efbb5f5b275b61eaf0437fb0d5_casinoGameIcon2.png',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/ff2fa3efbb5f5b275b61eaf0437fb0d5_casinoGameIcon3.png',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5267373',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '6695',
            'server_game_id': 'Baccarat',
            'extearnal_game_id': '19200',
            'front_game_id': 'LKSBaccarat',
            'name': 'Baccarat',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'LKS',
            'show_as_provider': 'LKS',
            'provider_title': 'LUCKY STREAK',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/6f9dfa636b59418c16d98d5cbb5cee42_casinoGameIcon2.png',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/6f9dfa636b59418c16d98d5cbb5cee42_casinoGameIcon3.png',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5267375',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '7400',
            'server_game_id': 'uth',
            'extearnal_game_id': '21668',
            'front_game_id': 'EVLuth',
            'name': 'Ultimate Texas Holdem',
            'title': null,
            'width': '960',
            'height': '540',
            'status': 'published',
            'provider': 'EVL',
            'show_as_provider': 'EVL',
            'provider_title': 'EVOLUTION',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/26eff4569694736fad858637aee0768e_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/26eff4569694736fad858637aee0768e_casinoGameIcon3.jpeg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5276542',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '1887',
            'server_game_id': 'trp',
            'extearnal_game_id': '20999',
            'front_game_id': 'EVLtrp',
            'name': 'Triple Card Poker',
            'title': null,
            'width': '960',
            'height': '540',
            'status': 'published',
            'provider': 'EVL',
            'show_as_provider': 'EVL',
            'provider_title': 'EVOLUTION',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/24c3a2167a490ae043e89b722b8ced6c_casinoGameIcon2.jpeg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5276544',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '8267',
            'server_game_id': 'TopCard000000001',
            'extearnal_game_id': '217032',
            'front_game_id': 'EVLTopCard000000001',
            'name': 'Top Card',
            'title': null,
            'width': '960',
            'height': '540',
            'status': 'published',
            'provider': 'EVL',
            'show_as_provider': 'EVL',
            'provider_title': 'EVOLUTION',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/5bdfc5345a83954b5ec27e08d4a97ae8_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/2e1589c9f8ec061effbef00c6a02a631_casinoGameIcon3.jpeg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5276546',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '7403',
            'server_game_id': 'tcp',
            'extearnal_game_id': '21029',
            'front_game_id': 'EVLtcp',
            'name': 'Three Card Poker',
            'title': null,
            'width': '960',
            'height': '540',
            'status': 'published',
            'provider': 'EVL',
            'show_as_provider': 'EVL',
            'provider_title': 'EVOLUTION',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/437ef169685d1f4d6e00e30a703df2e9_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/437ef169685d1f4d6e00e30a703df2e9_casinoGameIcon3.jpeg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5276547',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '1845',
            'server_game_id': '104',
            'extearnal_game_id': '21030',
            'front_game_id': 'EVL104',
            'name': 'Live Roulette',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'EVL',
            'show_as_provider': 'EVL',
            'provider_title': 'EVOLUTION',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ed30d65b0c2d92c7f5a02d9a3f9752cf_casinoGameIcon2.jpeg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5276550',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '1885',
            'server_game_id': '105',
            'extearnal_game_id': '21027',
            'front_game_id': 'EVL105',
            'name': 'Live BlackJack',
            'title': null,
            'width': '960',
            'height': '540',
            'status': 'published',
            'provider': 'EVL',
            'show_as_provider': 'EVL',
            'provider_title': 'EVOLUTION',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/4ecf219cab797f4a3885dbc912b209a3_casinoGameIcon2.jpeg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5276552',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '1884',
            'server_game_id': '103',
            'extearnal_game_id': '21026',
            'front_game_id': 'EVL103',
            'name': 'Live Baccarat',
            'title': null,
            'width': '960',
            'height': '540',
            'status': 'published',
            'provider': 'EVL',
            'show_as_provider': 'EVL',
            'provider_title': 'EVOLUTION',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/7d80ac32cc3395f4c9d93b4431202c9e_casinoGameIcon2.jpeg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5276554',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '8574',
            'server_game_id': '217033',
            'extearnal_game_id': '217033',
            'front_game_id': 'EVL217033',
            'name': 'Lightening Roulette',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'EVL',
            'show_as_provider': 'EVL',
            'provider_title': 'EVOLUTION',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/9007a498ff59bb8a6c114eff3e4e041d_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/cf08c6006481976525333b9ca17a59c8_casinoGameIcon3.jpeg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5276556',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '6472',
            'server_game_id': 'eth',
            'extearnal_game_id': '21667',
            'front_game_id': 'EVLeth',
            'name': 'Extreme Texas Holdem',
            'title': null,
            'width': '960',
            'height': '540',
            'status': 'published',
            'provider': 'EVL',
            'show_as_provider': 'EVL',
            'provider_title': 'EVOLUTION',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/bcc412cf0cc85503c6081d344f0a42e0_casinoGameIcon2.jpeg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5276558',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '6476',
            'server_game_id': 'moneywheel',
            'extearnal_game_id': '21666',
            'front_game_id': 'EVLmoneywheel',
            'name': 'Dream Catcher',
            'title': null,
            'width': '960',
            'height': '540',
            'status': 'published',
            'provider': 'EVL',
            'show_as_provider': 'EVL',
            'provider_title': 'EVOLUTION',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/d5b1140318b0708f6cae1cbba48954c4_casinoGameIcon2.jpeg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5276560',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '8059',
            'server_game_id': 'DragonTiger00001',
            'extearnal_game_id': '217028',
            'front_game_id': 'EVLDragonTiger00001',
            'name': 'Dragon Tiger',
            'title': null,
            'width': '960',
            'height': '540',
            'status': 'published',
            'provider': 'EVL',
            'show_as_provider': 'EVL',
            'provider_title': 'EVOLUTION',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/57df7484223281389346ee0a244f8c71_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/0c256d1a87112ec68f47ebfb30ce3634_casinoGameIcon3.jpeg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5276562',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '1886',
            'server_game_id': '108',
            'extearnal_game_id': '21028',
            'front_game_id': 'EVL108',
            'name': 'Casino Holdem',
            'title': null,
            'width': '960',
            'height': '540',
            'status': 'published',
            'provider': 'EVL',
            'show_as_provider': 'EVL',
            'provider_title': 'EVOLUTION',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/b7680666f6d64047eb3a1270ecafbffe_casinoGameIcon2.jpeg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5276564',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '6474',
            'server_game_id': 'csp',
            'extearnal_game_id': '20998',
            'front_game_id': 'EVLcsp',
            'name': 'Caribbean Stud Poker',
            'title': null,
            'width': '960',
            'height': '540',
            'status': 'published',
            'provider': 'EVL',
            'show_as_provider': 'EVL',
            'provider_title': 'EVOLUTION',
            'game_options': '&tableid=CSPTable00000001',
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/e2649c56110822d53910c175d360f87b_casinoGameIcon2.jpeg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5276566',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '94'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '729',
            'server_game_id': '278',
            'extearnal_game_id': '4125',
            'front_game_id': 'BSG278',
            'name': 'Zoom Roulette',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG278.jpg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5304698',
            'cats': [
                {
                    'id': '94',
                    'title': 'Table Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '95'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '384',
            'server_game_id': '199',
            'extearnal_game_id': '4086',
            'front_game_id': 'BSG199',
            'name': 'Virtual Racebook 3D',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG199.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG199.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG199.jpg',
            'types': {
                'realMode': 1,
                'viewMode': 1
            },
            'game_skin_id': '5304699',
            'cats': [
                {
                    'id': '95',
                    'title': 'Popular Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '189',
                '192'
            ],
            'themes': [
                '150',
                '154'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '281',
            'server_game_id': '228',
            'extearnal_game_id': '4098',
            'front_game_id': 'BSG228',
            'name': 'Viking Age',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG228.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG228.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304700',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '192',
                    'title': 'MULTIPLIER SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '150',
                    'title': 'ADVENTURES AND EXPLORERS',
                    'type': 'theme'
                },
                {
                    'id': '154',
                    'title': 'WINTER SLOTS',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '186',
                '189',
                '192',
                '193',
                '196'
            ],
            'themes': [
                '149',
                '182',
                '157'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '279',
            'server_game_id': '259',
            'extearnal_game_id': '4111',
            'front_game_id': 'BSG259',
            'name': 'Under the Sea',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG259.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG259.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG259.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304701',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '192',
                    'title': 'MULTIPLIER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '193',
                    'title': 'SCATTER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '149',
                    'title': 'ANIMAL SLOTS',
                    'type': 'theme'
                },
                {
                    'id': '182',
                    'title': 'MONEY AND WEALTH',
                    'type': 'theme'
                },
                {
                    'id': '157',
                    'title': 'UNDERWATER',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '93',
                '51'
            ],
            'features': [
                '186',
                '189',
                '192',
                '200'
            ],
            'themes': [
                '226',
                '170'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '668',
            'server_game_id': '308',
            'extearnal_game_id': '4140',
            'front_game_id': 'BSG308',
            'name': 'Under the Bed',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG308.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG308.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304702',
            'cats': [
                {
                    'id': '93',
                    'title': 'Top Slots',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '192',
                    'title': 'MULTIPLIER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '200',
                    'title': 'STICKY WILDS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '226',
                    'title': 'MONSTERS',
                    'type': 'theme'
                },
                {
                    'id': '170',
                    'title': 'SCARY SLOTS',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '186',
                '189',
                '192',
                '196'
            ],
            'themes': [
                '160',
                '165',
                '211',
                '182'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '296',
            'server_game_id': '471',
            'extearnal_game_id': '4100',
            'front_game_id': 'BSG471',
            'name': 'Tycoons',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG471.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG471.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG471.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304703',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '192',
                    'title': 'MULTIPLIER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '160',
                    'title': 'CARS',
                    'type': 'theme'
                },
                {
                    'id': '165',
                    'title': 'GOLD',
                    'type': 'theme'
                },
                {
                    'id': '211',
                    'title': 'LUXURY',
                    'type': 'theme'
                },
                {
                    'id': '182',
                    'title': 'MONEY AND WEALTH',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '186',
                '189',
                '196'
            ],
            'themes': [
                '141'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '295',
            'server_game_id': '236',
            'extearnal_game_id': '4102',
            'front_game_id': 'BSG236',
            'name': 'True Illusions',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG236.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG236.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG236.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304704',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '141',
                    'title': 'MAGIC',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '94'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '373',
            'server_game_id': '105',
            'extearnal_game_id': '4055',
            'front_game_id': 'BSG105',
            'name': 'Triple Edge Poker',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG105.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG105.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304705',
            'cats': [
                {
                    'id': '94',
                    'title': 'Table Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '184',
                '193'
            ],
            'themes': [
                '150',
                '216',
                '165',
                '183'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '304',
            'server_game_id': '158',
            'extearnal_game_id': '4072',
            'front_game_id': 'BSG158',
            'name': 'Treasure Room',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG158.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG158.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG158.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304706',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '184',
                    'title': 'JACKPOT',
                    'type': 'feature'
                },
                {
                    'id': '193',
                    'title': 'SCATTER SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '150',
                    'title': 'ADVENTURES AND EXPLORERS',
                    'type': 'theme'
                },
                {
                    'id': '216',
                    'title': 'ANCIENT CIVILIZATIONS',
                    'type': 'theme'
                },
                {
                    'id': '165',
                    'title': 'GOLD',
                    'type': 'theme'
                },
                {
                    'id': '183',
                    'title': 'JEWELS AND GEMS',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '94'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '372',
            'server_game_id': '48',
            'extearnal_game_id': '4026',
            'front_game_id': 'BSG48',
            'name': 'Top Card Trumps',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG48.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG48.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304707',
            'cats': [
                {
                    'id': '94',
                    'title': 'Table Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '51'
            ],
            'features': [
                '189',
                '191',
                '193',
                '196',
                '188'
            ],
            'themes': [
                '149',
                '141'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '8046',
            'server_game_id': '788',
            'extearnal_game_id': '4558',
            'front_game_id': 'BSG788',
            'name': 'Tiger\'s Claw',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/3e7af7a42a68fb3044feba03361ae962_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/ff9bb1d7f0e0670487222c98a0246428_casinoGameIcon3.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/e1c9017a7759c0e48b21ded5f4b78702_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304709',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '193',
                    'title': 'SCATTER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '188',
                    'title': 'WIN BOTH WAYS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '149',
                    'title': 'ANIMAL SLOTS',
                    'type': 'theme'
                },
                {
                    'id': '141',
                    'title': 'MAGIC',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '93',
                '51'
            ],
            'features': [
                '186',
                '189',
                '191',
                '202',
                '196'
            ],
            'themes': [
                '150',
                '147'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '669',
            'server_game_id': '384',
            'extearnal_game_id': '4184',
            'front_game_id': 'BSG384',
            'name': 'The True Sheriff',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG384.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG384.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304710',
            'cats': [
                {
                    'id': '93',
                    'title': 'Top Slots',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '202',
                    'title': 'RANDOM WILDS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '150',
                    'title': 'ADVENTURES AND EXPLORERS',
                    'type': 'theme'
                },
                {
                    'id': '147',
                    'title': 'WILD WEST',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '51',
                '76'
            ],
            'features': [
                '186',
                '187',
                '189',
                '195'
            ],
            'themes': [
                '150',
                '160',
                '211',
                '182',
                '167',
                '212'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '8030',
            'server_game_id': '704',
            'extearnal_game_id': '4522',
            'front_game_id': 'BSG704',
            'name': 'THE SLOTFATHER: PART II',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/21cfb043c68721c1ff6fb9a28ba9c655_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/418ee9d11443b801dc381d94905bde1b_casinoGameIcon3.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/40da6c41d5460f1ef1e3823582d1beef_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304712',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                },
                {
                    'id': '76',
                    'title': '25 lines',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '187',
                    'title': 'BONUS SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '195',
                    'title': 'REEL RESPINS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '150',
                    'title': 'ADVENTURES AND EXPLORERS',
                    'type': 'theme'
                },
                {
                    'id': '160',
                    'title': 'CARS',
                    'type': 'theme'
                },
                {
                    'id': '211',
                    'title': 'LUXURY',
                    'type': 'theme'
                },
                {
                    'id': '182',
                    'title': 'MONEY AND WEALTH',
                    'type': 'theme'
                },
                {
                    'id': '167',
                    'title': 'RETRO',
                    'type': 'theme'
                },
                {
                    'id': '212',
                    'title': 'CRIME AND DETECTIVE',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '51'
            ],
            'features': [
                '189',
                '191',
                '196'
            ],
            'themes': [
                '141',
                '170'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '8038',
            'server_game_id': '751',
            'extearnal_game_id': '4538',
            'front_game_id': 'BSG751',
            'name': 'The Magic Shoppe',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/b963f6882236b631bf65b79a561ac573_background.jpeg',
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/9d0b7c813deaaa56968243c6f0027575_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/01db3bb108c745039fa54dc800dfda01_casinoGameIcon3.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304714',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '141',
                    'title': 'MAGIC',
                    'type': 'theme'
                },
                {
                    'id': '170',
                    'title': 'SCARY SLOTS',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '51'
            ],
            'features': [
                '189',
                '191',
                '193',
                '196'
            ],
            'themes': [
                '216',
                '166',
                '145'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '8605',
            'server_game_id': '794',
            'extearnal_game_id': '4000277',
            'front_game_id': 'BSG794',
            'name': 'The Golden Owl of Athena',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/e75ce796cb40642d66d4dcc779e11d15_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/8b2a621ba8c0df874450b14cd88327a2_casinoGameIcon3.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/0f33b6f8e5a6cdd578574bb7905c63e2_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304716',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '193',
                    'title': 'SCATTER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '216',
                    'title': 'ANCIENT CIVILIZATIONS',
                    'type': 'theme'
                },
                {
                    'id': '166',
                    'title': 'GREEK',
                    'type': 'theme'
                },
                {
                    'id': '145',
                    'title': 'MYTHOLOGY',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '186',
                '189',
                '184'
            ],
            'themes': [
                '176',
                '211',
                '169'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '302',
            'server_game_id': '173',
            'extearnal_game_id': '4074',
            'front_game_id': 'BSG173',
            'name': 'The Glam Life',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG173.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG173.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG173.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304717',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '184',
                    'title': 'JACKPOT',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '176',
                    'title': 'LIGHTS AND STONES',
                    'type': 'theme'
                },
                {
                    'id': '211',
                    'title': 'LUXURY',
                    'type': 'theme'
                },
                {
                    'id': '169',
                    'title': 'TRAVEL',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '189',
                '191',
                '200',
                '196'
            ],
            'themes': [
                '150',
                '149',
                '215'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '323',
            'server_game_id': '262',
            'extearnal_game_id': '4112',
            'front_game_id': 'BSG262',
            'name': 'The Exterminator',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG262.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG262.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG262.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304718',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '200',
                    'title': 'STICKY WILDS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '150',
                    'title': 'ADVENTURES AND EXPLORERS',
                    'type': 'theme'
                },
                {
                    'id': '149',
                    'title': 'ANIMAL SLOTS',
                    'type': 'theme'
                },
                {
                    'id': '215',
                    'title': 'FLOWERS AND NATURE',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '51'
            ],
            'features': [
                '186',
                '189',
                '191',
                '193',
                '196'
            ],
            'themes': [
                '149',
                '157'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '8036',
            'server_game_id': '747',
            'extearnal_game_id': '4534',
            'front_game_id': 'BSG747',
            'name': 'The Angler',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/df0b09c1af3453e465cfb7b3c512ea7b_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/a03b4bf3a572112ebeaaab0aebed7bbd_casinoGameIcon3.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/130234f349ade3f9a0319d7c19f3bcff_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304720',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '193',
                    'title': 'SCATTER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '149',
                    'title': 'ANIMAL SLOTS',
                    'type': 'theme'
                },
                {
                    'id': '157',
                    'title': 'UNDERWATER',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '360',
            'server_game_id': '146',
            'extearnal_game_id': '4067',
            'front_game_id': 'BSG146',
            'name': 'Tens or Better',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG146.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG146.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304721',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '93',
                '51'
            ],
            'features': [
                '189',
                '192',
                '196'
            ],
            'themes': [
                '131',
                '164',
                '153'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '662',
            'server_game_id': '2888',
            'extearnal_game_id': '4127',
            'front_game_id': 'BSG2888',
            'name': 'Sushi Bar',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG2888.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG2888.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304722',
            'cats': [
                {
                    'id': '93',
                    'title': 'Top Slots',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '192',
                    'title': 'MULTIPLIER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '131',
                    'title': 'ASIA',
                    'type': 'theme'
                },
                {
                    'id': '164',
                    'title': 'FOODNDRINK',
                    'type': 'theme'
                },
                {
                    'id': '153',
                    'title': 'TASTY SLOTS',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '94'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '366',
            'server_game_id': '44',
            'extearnal_game_id': '4023',
            'front_game_id': 'BSG44',
            'name': 'Super 7 Blackjack',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG44.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG44.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304723',
            'cats': [
                {
                    'id': '94',
                    'title': 'Table Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '93',
                '51'
            ],
            'features': [
                '192',
                '195'
            ],
            'themes': [
                '151',
                '153'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '660',
            'server_game_id': '402',
            'extearnal_game_id': '4197',
            'front_game_id': 'BSG402',
            'name': 'SugarPop!',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG402.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG402.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304724',
            'cats': [
                {
                    'id': '93',
                    'title': 'Top Slots',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '192',
                    'title': 'MULTIPLIER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '195',
                    'title': 'REEL RESPINS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '151',
                    'title': 'CUTE & BUBBLY',
                    'type': 'theme'
                },
                {
                    'id': '153',
                    'title': 'TASTY SLOTS',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '51'
            ],
            'features': [
                '189',
                '191',
                '196'
            ],
            'themes': [
                '151',
                '153'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '8044',
            'server_game_id': '784',
            'extearnal_game_id': '4554',
            'front_game_id': 'BSG784',
            'name': 'Sugar Pop 2: Double Dipped',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/62ee8d949f0812f52592c1cdcaa77069_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/09780261995ab3f2e0ddd89e8465e453_casinoGameIcon3.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/ef4e31c32fdfcbb076d4a90fcb984dfa_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304726',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '151',
                    'title': 'CUTE & BUBBLY',
                    'type': 'theme'
                },
                {
                    'id': '153',
                    'title': 'TASTY SLOTS',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '359',
            'server_game_id': '142',
            'extearnal_game_id': '4063',
            'front_game_id': 'BSG142',
            'name': 'Split Way Royal',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG142.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG142.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304727',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '51',
                '59'
            ],
            'features': [
                '186',
                '189',
                '191',
                '184',
                '195'
            ],
            'themes': [
                '150',
                '164'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '306',
            'server_game_id': '258',
            'extearnal_game_id': '4110',
            'front_game_id': 'BSG258',
            'name': 'Slots Angels',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG258.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG258.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG258.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304728',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                },
                {
                    'id': '59',
                    'title': 'Progressive',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '184',
                    'title': 'JACKPOT',
                    'type': 'feature'
                },
                {
                    'id': '195',
                    'title': 'REEL RESPINS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '150',
                    'title': 'ADVENTURES AND EXPLORERS',
                    'type': 'theme'
                },
                {
                    'id': '164',
                    'title': 'FOODNDRINK',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '44'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '727',
            'server_game_id': '143',
            'extearnal_game_id': '4064',
            'front_game_id': 'BSG143',
            'name': 'Skratcherz',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG143.jpg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5304729',
            'cats': [
                {
                    'id': '44',
                    'title': 'Other Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '94'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '365',
            'server_game_id': '63',
            'extearnal_game_id': '4028',
            'front_game_id': 'BSG63',
            'name': 'Single Deck Blackjack',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG63.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG63.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304730',
            'cats': [
                {
                    'id': '94',
                    'title': 'Table Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '51'
            ],
            'features': [
                '189',
                '191',
                '192',
                '196'
            ],
            'themes': [
                '227',
                '179',
                '211'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '8032',
            'server_game_id': '720',
            'extearnal_game_id': '4527',
            'front_game_id': 'BSG720',
            'name': 'Sin City Nights',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/d9bf0cb77d4600467566679cfa351548_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/0f9449ab68689c4cc4a5816a5d3d714c_casinoGameIcon3.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/e1161c99b37a7e8f344c7cf2bb2152f6_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304732',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '192',
                    'title': 'MULTIPLIER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '227',
                    'title': 'CASINO',
                    'type': 'theme'
                },
                {
                    'id': '179',
                    'title': 'FESTIVE',
                    'type': 'theme'
                },
                {
                    'id': '211',
                    'title': 'LUXURY',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '186',
                '189',
                '191',
                '202',
                '193',
                '199'
            ],
            'themes': [
                '150',
                '144',
                '149'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '320',
            'server_game_id': '280',
            'extearnal_game_id': '4126',
            'front_game_id': 'BSG280',
            'name': 'Safari Sam',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG280.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG280.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG280.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304733',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '202',
                    'title': 'RANDOM WILDS',
                    'type': 'feature'
                },
                {
                    'id': '193',
                    'title': 'SCATTER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '199',
                    'title': 'STACKED WILDS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '150',
                    'title': 'ADVENTURES AND EXPLORERS',
                    'type': 'theme'
                },
                {
                    'id': '144',
                    'title': 'AFRICAN',
                    'type': 'theme'
                },
                {
                    'id': '149',
                    'title': 'ANIMAL SLOTS',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '93'
            ],
            'features': [
                '186',
                '196'
            ],
            'themes': [
                '152',
                '183',
                '211',
                '225'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '319',
            'server_game_id': '223',
            'extearnal_game_id': '4094',
            'front_game_id': 'BSG223',
            'name': 'Royal Reels',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG223.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG223.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG223.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304734',
            'cats': [
                {
                    'id': '93',
                    'title': 'Top Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '152',
                    'title': 'FRUIT SLOTS',
                    'type': 'theme'
                },
                {
                    'id': '183',
                    'title': 'JEWELS AND GEMS',
                    'type': 'theme'
                },
                {
                    'id': '211',
                    'title': 'LUXURY',
                    'type': 'theme'
                },
                {
                    'id': '225',
                    'title': 'ROYALTY',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '189',
                '192',
                '196'
            ],
            'themes': [
                '216',
                '214',
                '176'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '318',
            'server_game_id': '277',
            'extearnal_game_id': '4124',
            'front_game_id': 'BSG277',
            'name': 'Rook\'s Revenge',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG277.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG277.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG277.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304735',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '192',
                    'title': 'MULTIPLIER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '216',
                    'title': 'ANCIENT CIVILIZATIONS',
                    'type': 'theme'
                },
                {
                    'id': '214',
                    'title': 'JUNGLE',
                    'type': 'theme'
                },
                {
                    'id': '176',
                    'title': 'LIGHTS AND STONES',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '93',
                '51'
            ],
            'features': [
                '186',
                '192',
                '196'
            ],
            'themes': [
                '148'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '277',
            'server_game_id': '220',
            'extearnal_game_id': '4091',
            'front_game_id': 'BSG220',
            'name': 'RockStar',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG220.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG220.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG220.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304736',
            'cats': [
                {
                    'id': '93',
                    'title': 'Top Slots',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '192',
                    'title': 'MULTIPLIER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '148',
                    'title': 'MUSIC SLOTS',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '94'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '731',
            'server_game_id': '43',
            'extearnal_game_id': '4022',
            'front_game_id': 'BSG43',
            'name': 'Ride\'m Poker',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG43.jpg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5304737',
            'cats': [
                {
                    'id': '94',
                    'title': 'Table Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '94'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '370',
            'server_game_id': '94',
            'extearnal_game_id': '4045',
            'front_game_id': 'BSG94',
            'name': 'Red Dog',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG94.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG94.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304738',
            'cats': [
                {
                    'id': '94',
                    'title': 'Table Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '348',
            'server_game_id': '67',
            'extearnal_game_id': '4032',
            'front_game_id': 'BSG67',
            'name': 'Pyramid Joker Poker',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG67.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG67.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304739',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '346',
            'server_game_id': '72',
            'extearnal_game_id': '4037',
            'front_game_id': 'BSG72',
            'name': 'Pyramid Double Jackpot Poker',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG72.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG72.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304740',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '345',
            'server_game_id': '71',
            'extearnal_game_id': '4036',
            'front_game_id': 'BSG71',
            'name': 'Pyramid Double Bonus Poker',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG71.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG71.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304741',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '344',
            'server_game_id': '66',
            'extearnal_game_id': '4031',
            'front_game_id': 'BSG66',
            'name': 'Pyramid Deuces Wild Poker',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG66.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG66.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304742',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '343',
            'server_game_id': '69',
            'extearnal_game_id': '4034',
            'front_game_id': 'BSG69',
            'name': 'Pyramid Bonus Poker',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG69.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG69.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304743',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '342',
            'server_game_id': '70',
            'extearnal_game_id': '4035',
            'front_game_id': 'BSG70',
            'name': 'Pyramid Bonus Deluxe Poker',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG70.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG70.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304744',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '341',
            'server_game_id': '68',
            'extearnal_game_id': '4033',
            'front_game_id': 'BSG68',
            'name': 'Pyramid Aces and Faces',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG68.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG68.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304745',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '93',
                '51'
            ],
            'features': [
                '186',
                '189',
                '192',
                '193'
            ],
            'themes': [
                '149'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '661',
            'server_game_id': '482',
            'extearnal_game_id': '4141',
            'front_game_id': 'BSG482',
            'name': 'Puppy Love',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG482.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG482.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304746',
            'cats': [
                {
                    'id': '93',
                    'title': 'Top Slots',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '192',
                    'title': 'MULTIPLIER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '193',
                    'title': 'SCATTER SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '149',
                    'title': 'ANIMAL SLOTS',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '347',
            'server_game_id': '65',
            'extearnal_game_id': '4030',
            'front_game_id': 'BSG65',
            'name': 'PP Jacks or Better',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/09a4ae8bc5a688e526f1b2c82c555ebb_background.jpeg',
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ac7200ec7293ef6c057f4530d54bebe2_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/2840455d2e4cb179c5354d28aa028c3b_casinoGameIcon3.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304747',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '94'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '364',
            'server_game_id': '81',
            'extearnal_game_id': '4041',
            'front_game_id': 'BSG81',
            'name': 'Pontoon',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/042548d9a761c0428a2278e6c510db0b_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/042548d9a761c0428a2278e6c510db0b_casinoGameIcon3.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304748',
            'cats': [
                {
                    'id': '94',
                    'title': 'Table Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '94'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '369',
            'server_game_id': '249',
            'extearnal_game_id': '4108',
            'front_game_id': 'BSG249',
            'name': 'Poker3 Heads Up Hold em',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG249.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG249.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG249.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304749',
            'cats': [
                {
                    'id': '94',
                    'title': 'Table Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '94'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '728',
            'server_game_id': '82',
            'extearnal_game_id': '4042',
            'front_game_id': 'BSG82',
            'name': 'Pirate 21',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG82.jpg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5304750',
            'cats': [
                {
                    'id': '94',
                    'title': 'Table Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '94'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '368',
            'server_game_id': '9',
            'extearnal_game_id': '4006',
            'front_game_id': 'BSG9',
            'name': 'Pai Gow Poker',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG9.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG9.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304751',
            'cats': [
                {
                    'id': '94',
                    'title': 'Table Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '186',
                '192',
                '196'
            ],
            'themes': [
                '139',
                '155',
                '153'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '292',
            'server_game_id': '225',
            'extearnal_game_id': '4096',
            'front_game_id': 'BSG225',
            'name': 'Paco and the Popping Peppers',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG225.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG225.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG225.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304752',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '192',
                    'title': 'MULTIPLIER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '139',
                    'title': 'FUNNY',
                    'type': 'theme'
                },
                {
                    'id': '155',
                    'title': 'SUMMER SLOTS',
                    'type': 'theme'
                },
                {
                    'id': '153',
                    'title': 'TASTY SLOTS',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '186',
                '189',
                '196'
            ],
            'themes': [
                '150',
                '217',
                '178'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '300',
            'server_game_id': '193',
            'extearnal_game_id': '4081',
            'front_game_id': 'BSG193',
            'name': 'Once Upon a Time',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG193.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG193.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG193.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304753',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '150',
                    'title': 'ADVENTURES AND EXPLORERS',
                    'type': 'theme'
                },
                {
                    'id': '217',
                    'title': 'BATTLES AND WARS',
                    'type': 'theme'
                },
                {
                    'id': '178',
                    'title': 'FAIRYTAILES',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '51'
            ],
            'features': [
                '191',
                '192',
                '196'
            ],
            'themes': [
                '150',
                '178',
                '165',
                '183',
                '225'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '8562',
            'server_game_id': '793',
            'extearnal_game_id': '4000272',
            'front_game_id': 'BSG793',
            'name': 'Ogre Empire',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/6e84715e79515790c8000e4518bc877b_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/a1f2bdf09a31c8b978e50f4ed0dc3f2e_casinoGameIcon3.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/4b01b6c3904c02016526d4e23305099c_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304755',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '192',
                    'title': 'MULTIPLIER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '150',
                    'title': 'ADVENTURES AND EXPLORERS',
                    'type': 'theme'
                },
                {
                    'id': '178',
                    'title': 'FAIRYTAILES',
                    'type': 'theme'
                },
                {
                    'id': '165',
                    'title': 'GOLD',
                    'type': 'theme'
                },
                {
                    'id': '183',
                    'title': 'JEWELS AND GEMS',
                    'type': 'theme'
                },
                {
                    'id': '225',
                    'title': 'ROYALTY',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '94'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '367',
            'server_game_id': '203',
            'extearnal_game_id': '4087',
            'front_game_id': 'BSG203',
            'name': 'Oasis Poker',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG203.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG203.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304756',
            'cats': [
                {
                    'id': '94',
                    'title': 'Table Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '186',
                '189',
                '193'
            ],
            'themes': [
                '149',
                '150'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '294',
            'server_game_id': '243',
            'extearnal_game_id': '4104',
            'front_game_id': 'BSG243',
            'name': 'Ned and his Friends',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG243.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG243.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG243.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304757',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '193',
                    'title': 'SCATTER SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '149',
                    'title': 'ANIMAL SLOTS',
                    'type': 'theme'
                },
                {
                    'id': '150',
                    'title': 'ADVENTURES AND EXPLORERS',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '340',
            'server_game_id': '98',
            'extearnal_game_id': '4048',
            'front_game_id': 'BSG98',
            'name': 'Multihand Joker Poker',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG98.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG98.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304758',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '339',
            'server_game_id': '96',
            'extearnal_game_id': '4046',
            'front_game_id': 'BSG96',
            'name': 'Multihand Jacks Or Better',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG96.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG96.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304759',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '338',
            'server_game_id': '103',
            'extearnal_game_id': '4053',
            'front_game_id': 'BSG103',
            'name': 'Multihand Double Jackpot',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG103.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG103.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304760',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '337',
            'server_game_id': '102',
            'extearnal_game_id': '4052',
            'front_game_id': 'BSG102',
            'name': 'Multihand Double Bonus Poker',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG102.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG102.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304761',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '336',
            'server_game_id': '97',
            'extearnal_game_id': '4047',
            'front_game_id': 'BSG97',
            'name': 'Multihand Deuces Wild Poker',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG97.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG97.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304762',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '335',
            'server_game_id': '100',
            'extearnal_game_id': '4050',
            'front_game_id': 'BSG100',
            'name': 'Multihand Bonus Poker',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG100.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG100.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304763',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '334',
            'server_game_id': '101',
            'extearnal_game_id': '4051',
            'front_game_id': 'BSG101',
            'name': 'Multihand Bonus Deluxe Poker',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG101.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG101.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304764',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '333',
            'server_game_id': '99',
            'extearnal_game_id': '4049',
            'front_game_id': 'BSG99',
            'name': 'Multihand All American',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG99.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG99.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304765',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '95',
                '51'
            ],
            'features': [
                '186',
                '189',
                '184'
            ],
            'themes': [
                '227',
                '159',
                '211'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '276',
            'server_game_id': '210',
            'extearnal_game_id': '4090',
            'front_game_id': 'BSG210',
            'name': 'Mr. Vegas',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG210.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG210.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSGBSMRVEGAS.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304766',
            'cats': [
                {
                    'id': '95',
                    'title': 'Popular Games',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '184',
                    'title': 'JACKPOT',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '227',
                    'title': 'CASINO',
                    'type': 'theme'
                },
                {
                    'id': '159',
                    'title': 'HOT GIRL',
                    'type': 'theme'
                },
                {
                    'id': '211',
                    'title': 'LUXURY',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '44'
            ],
            'features': [
                '186'
            ],
            'themes': [
                '150',
                '142',
                '145',
                '170'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '9526',
            'server_game_id': '779',
            'extearnal_game_id': '4562',
            'front_game_id': 'BSG779',
            'name': 'Max Quest: Wrath of Ra',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/f65353fad92f43270f4a2d9f8f8312d2_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/07de336acd08ddbdb4594f50b600b1b9_casinoGameIcon3.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/da8caec208f6238cddf527890e961a60_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304768',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '44',
                    'title': 'Other Games',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '150',
                    'title': 'ADVENTURES AND EXPLORERS',
                    'type': 'theme'
                },
                {
                    'id': '142',
                    'title': 'EGYPT',
                    'type': 'theme'
                },
                {
                    'id': '145',
                    'title': 'MYTHOLOGY',
                    'type': 'theme'
                },
                {
                    'id': '170',
                    'title': 'SCARY SLOTS',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '186',
                '189',
                '196'
            ],
            'themes': [
                '164',
                '153'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '299',
            'server_game_id': '238',
            'extearnal_game_id': '4103',
            'front_game_id': 'BSG238',
            'name': 'Mamma Mia',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG238.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG238.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG238.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304769',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '164',
                    'title': 'FOODNDRINK',
                    'type': 'theme'
                },
                {
                    'id': '153',
                    'title': 'TASTY SLOTS',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '186',
                '195',
                '193',
                '196'
            ],
            'themes': [
                '141',
                '222'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '293',
            'server_game_id': '247',
            'extearnal_game_id': '4106',
            'front_game_id': 'BSG247',
            'name': 'Madder Scientist',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG247.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG247.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG247.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304770',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '195',
                    'title': 'REEL RESPINS',
                    'type': 'feature'
                },
                {
                    'id': '193',
                    'title': 'SCATTER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '141',
                    'title': 'MAGIC',
                    'type': 'theme'
                },
                {
                    'id': '222',
                    'title': 'SCIENCE',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '187',
                '193',
                '196'
            ],
            'themes': [
                '222'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '298',
            'server_game_id': '159',
            'extearnal_game_id': '4073',
            'front_game_id': 'BSG159',
            'name': 'Mad Scientist',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG159.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG159.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG159.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304771',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '187',
                    'title': 'BONUS SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '193',
                    'title': 'SCATTER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '222',
                    'title': 'SCIENCE',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '93'
            ],
            'features': [],
            'themes': [
                '227',
                '167'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '313',
            'server_game_id': '2',
            'extearnal_game_id': '4002',
            'front_game_id': 'BSG2',
            'name': 'Lucky Seven',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG2.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG2.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG2.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304772',
            'cats': [
                {
                    'id': '93',
                    'title': 'Top Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [
                {
                    'id': '227',
                    'title': 'CASINO',
                    'type': 'theme'
                },
                {
                    'id': '167',
                    'title': 'RETRO',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '186',
                '195',
                '196'
            ],
            'themes': [
                '150',
                '216',
                '142'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '297',
            'server_game_id': '248',
            'extearnal_game_id': '4107',
            'front_game_id': 'BSG248',
            'name': 'Lost',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG248.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG248.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG248.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304773',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '195',
                    'title': 'REEL RESPINS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '150',
                    'title': 'ADVENTURES AND EXPLORERS',
                    'type': 'theme'
                },
                {
                    'id': '216',
                    'title': 'ANCIENT CIVILIZATIONS',
                    'type': 'theme'
                },
                {
                    'id': '142',
                    'title': 'EGYPT',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '51',
                '59'
            ],
            'features': [
                '189',
                '191',
                '184',
                '196'
            ],
            'themes': [
                '216',
                '142',
                '213',
                '145'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '8042',
            'server_game_id': '775',
            'extearnal_game_id': '4550',
            'front_game_id': 'BSG775',
            'name': 'Legend Of The Nile',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/7639d75e3552619b6337ca220c62ff11_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/64f5e74c40d34892438d3c5f2e299e23_casinoGameIcon3.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/07426e95f8c065d758eddb844d5fee8d_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304775',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                },
                {
                    'id': '59',
                    'title': 'Progressive',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '184',
                    'title': 'JACKPOT',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '216',
                    'title': 'ANCIENT CIVILIZATIONS',
                    'type': 'theme'
                },
                {
                    'id': '142',
                    'title': 'EGYPT',
                    'type': 'theme'
                },
                {
                    'id': '213',
                    'title': 'LEGENDS',
                    'type': 'theme'
                },
                {
                    'id': '145',
                    'title': 'MYTHOLOGY',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '51'
            ],
            'features': [
                '197',
                '191',
                '195',
                '196'
            ],
            'themes': [
                '149',
                '151'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '8034',
            'server_game_id': '727',
            'extearnal_game_id': '4530',
            'front_game_id': 'BSG727',
            'name': 'Kawaii Kitty',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/3d30fc4da60a82120738d00ded85efaa_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/ac45975943a0eb536b21f5f732d3880a_casinoGameIcon3.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/b6b7b6740f6cb723ef3db4111cd76a40_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304777',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '197',
                    'title': 'EXPANDING WILDS',
                    'type': 'feature'
                },
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '195',
                    'title': 'REEL RESPINS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '149',
                    'title': 'ANIMAL SLOTS',
                    'type': 'theme'
                },
                {
                    'id': '151',
                    'title': 'CUTE & BUBBLY',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '358',
            'server_game_id': '30',
            'extearnal_game_id': '4017',
            'front_game_id': 'BSG30',
            'name': 'Joker Poker',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG30.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG30.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304778',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '357',
            'server_game_id': '31',
            'extearnal_game_id': '4018',
            'front_game_id': 'BSG31',
            'name': 'Jacks or Better',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG31.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG31.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304779',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '93'
            ],
            'features': [
                '186',
                '189',
                '191',
                '202',
                '200'
            ],
            'themes': [
                '215',
                '226',
                '170'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '312',
            'server_game_id': '504',
            'extearnal_game_id': '4121',
            'front_game_id': 'BSG504',
            'name': 'It Came From Venus',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG504.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG504.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG504.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304780',
            'cats': [
                {
                    'id': '93',
                    'title': 'Top Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '202',
                    'title': 'RANDOM WILDS',
                    'type': 'feature'
                },
                {
                    'id': '200',
                    'title': 'STICKY WILDS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '215',
                    'title': 'FLOWERS AND NATURE',
                    'type': 'theme'
                },
                {
                    'id': '226',
                    'title': 'MONSTERS',
                    'type': 'theme'
                },
                {
                    'id': '170',
                    'title': 'SCARY SLOTS',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '186',
                '189',
                '196'
            ],
            'themes': [
                '170'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '290',
            'server_game_id': '221',
            'extearnal_game_id': '4092',
            'front_game_id': 'BSG221',
            'name': 'House of Fun',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG221.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG221.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG221.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304781',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '170',
                    'title': 'SCARY SLOTS',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '186',
                '189',
                '193'
            ],
            'themes': [
                '212',
                '182'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '280',
            'server_game_id': '180',
            'extearnal_game_id': '4078',
            'front_game_id': 'BSG180',
            'name': 'Heist',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG180.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG180.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG180.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304782',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '193',
                    'title': 'SCATTER SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '212',
                    'title': 'CRIME AND DETECTIVE',
                    'type': 'theme'
                },
                {
                    'id': '182',
                    'title': 'MONEY AND WEALTH',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '93',
                '51'
            ],
            'features': [
                '186',
                '189',
                '191',
                '184',
                '200',
                '196'
            ],
            'themes': [
                '178',
                '165',
                '141',
                '182'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '665',
            'server_game_id': '341',
            'extearnal_game_id': '4157',
            'front_game_id': 'BSG341',
            'name': 'Greedy Goblins',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG341.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG341.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304783',
            'cats': [
                {
                    'id': '93',
                    'title': 'Top Slots',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '184',
                    'title': 'JACKPOT',
                    'type': 'feature'
                },
                {
                    'id': '200',
                    'title': 'STICKY WILDS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '178',
                    'title': 'FAIRYTAILES',
                    'type': 'theme'
                },
                {
                    'id': '165',
                    'title': 'GOLD',
                    'type': 'theme'
                },
                {
                    'id': '141',
                    'title': 'MAGIC',
                    'type': 'theme'
                },
                {
                    'id': '182',
                    'title': 'MONEY AND WEALTH',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '51'
            ],
            'features': [
                '187',
                '189',
                '196',
                '191'
            ],
            'themes': [
                '131',
                '145'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '6631',
            'server_game_id': '700',
            'extearnal_game_id': '4516',
            'front_game_id': 'BSG700',
            'name': 'Great 88',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/604960305176890b7e68b48ad6df91c3_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/604960305176890b7e68b48ad6df91c3_casinoGameIcon3.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/604960305176890b7e68b48ad6df91c3_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304785',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '187',
                    'title': 'BONUS SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '131',
                    'title': 'ASIA',
                    'type': 'theme'
                },
                {
                    'id': '145',
                    'title': 'MYTHOLOGY',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '186'
            ],
            'themes': [
                '150',
                '165',
                '176'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '282',
            'server_game_id': '222',
            'extearnal_game_id': '4093',
            'front_game_id': 'BSG222',
            'name': 'Gold Diggers',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG222.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG222.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG222.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304786',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '150',
                    'title': 'ADVENTURES AND EXPLORERS',
                    'type': 'theme'
                },
                {
                    'id': '165',
                    'title': 'GOLD',
                    'type': 'theme'
                },
                {
                    'id': '176',
                    'title': 'LIGHTS AND STONES',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '186',
                '193',
                '196'
            ],
            'themes': [
                '150',
                '143',
                '149',
                '217'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '278',
            'server_game_id': '178',
            'extearnal_game_id': '4076',
            'front_game_id': 'BSG178',
            'name': 'Gladiator',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG178.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG178.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304787',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '193',
                    'title': 'SCATTER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '150',
                    'title': 'ADVENTURES AND EXPLORERS',
                    'type': 'theme'
                },
                {
                    'id': '143',
                    'title': 'ANCIENT ROME',
                    'type': 'theme'
                },
                {
                    'id': '149',
                    'title': 'ANIMAL SLOTS',
                    'type': 'theme'
                },
                {
                    'id': '217',
                    'title': 'BATTLES AND WARS',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '51'
            ],
            'features': [
                '189',
                '191',
                '193',
                '196'
            ],
            'themes': [
                '150',
                '183',
                '214'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '8040',
            'server_game_id': '759',
            'extearnal_game_id': '4546',
            'front_game_id': 'BSG759',
            'name': 'Giovanni\'s Gems',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/84d61874680f6056d0ca72c3cdea6f99_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/3a906f2a007ac5532512b895b9dca11e_casinoGameIcon3.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/982544148e9e31cbdead0a9dbb13dae4_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304789',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '193',
                    'title': 'SCATTER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '150',
                    'title': 'ADVENTURES AND EXPLORERS',
                    'type': 'theme'
                },
                {
                    'id': '183',
                    'title': 'JEWELS AND GEMS',
                    'type': 'theme'
                },
                {
                    'id': '214',
                    'title': 'JUNGLE',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '51'
            ],
            'features': [
                '187',
                '189',
                '191',
                '193',
                '196'
            ],
            'themes': [
                '226',
                '170',
                '222'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '6434',
            'server_game_id': '647',
            'extearnal_game_id': '4510',
            'front_game_id': 'BSG647',
            'name': 'Frankenslot\'s Monster',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/f0c4a2f9c79be974a348f509b7beea0a_casinoGameIcon2.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/f0c4a2f9c79be974a348f509b7beea0a_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304790',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '187',
                    'title': 'BONUS SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '193',
                    'title': 'SCATTER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '226',
                    'title': 'MONSTERS',
                    'type': 'theme'
                },
                {
                    'id': '170',
                    'title': 'SCARY SLOTS',
                    'type': 'theme'
                },
                {
                    'id': '222',
                    'title': 'SCIENCE',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '356',
            'server_game_id': '23',
            'extearnal_game_id': '4015',
            'front_game_id': 'BSG23',
            'name': 'Five Draw Poker',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG23.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG23.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304791',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '51'
            ],
            'features': [
                '189',
                '196'
            ],
            'themes': [
                '150',
                '217',
                '141'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '8048',
            'server_game_id': '755',
            'extearnal_game_id': '4542',
            'front_game_id': 'BSG755',
            'name': 'Fire & Steel',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/c0d9593f0320720ebd661a074c15a52e_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/c317d9c0bb8e69e4ecb259b566099ec8_casinoGameIcon3.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/57b686abc5b327b8f6a5c4bbbd74c157_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304792',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '150',
                    'title': 'ADVENTURES AND EXPLORERS',
                    'type': 'theme'
                },
                {
                    'id': '217',
                    'title': 'BATTLES AND WARS',
                    'type': 'theme'
                },
                {
                    'id': '141',
                    'title': 'MAGIC',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '51'
            ],
            'features': [
                '191',
                '196',
                '188'
            ],
            'themes': [
                '131',
                '179'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '8028',
            'server_game_id': '692',
            'extearnal_game_id': '4518',
            'front_game_id': 'BSG692',
            'name': 'Fa-Fa Twins',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/3cbf4183116995f9a5c1846c7e53792f_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/391f467451dc15db21cf2e0f132602ac_casinoGameIcon3.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/cffc2a1b27ac7dff4bd2dc29db5ab0f1_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304795',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '188',
                    'title': 'WIN BOTH WAYS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '131',
                    'title': 'ASIA',
                    'type': 'theme'
                },
                {
                    'id': '179',
                    'title': 'FESTIVE',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '94'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '730',
            'server_game_id': '79',
            'extearnal_game_id': '4039',
            'front_game_id': 'BSG79',
            'name': 'European Roulette',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG79.jpg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5304796',
            'cats': [
                {
                    'id': '94',
                    'title': 'Table Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '94'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '363',
            'server_game_id': '191',
            'extearnal_game_id': '4080',
            'front_game_id': 'BSG191',
            'name': 'European Blackjack',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG191.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG191.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304797',
            'cats': [
                {
                    'id': '94',
                    'title': 'Table Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '186',
                '189',
                '195'
            ],
            'themes': [
                '178',
                '215',
                '141'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '291',
            'server_game_id': '350',
            'extearnal_game_id': '4088',
            'front_game_id': 'BSG350',
            'name': 'Enchanted',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG350.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG350.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG350.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304798',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '195',
                    'title': 'REEL RESPINS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '178',
                    'title': 'FAIRYTAILES',
                    'type': 'theme'
                },
                {
                    'id': '215',
                    'title': 'FLOWERS AND NATURE',
                    'type': 'theme'
                },
                {
                    'id': '141',
                    'title': 'MAGIC',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '94'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '375',
            'server_game_id': '74',
            'extearnal_game_id': '4038',
            'front_game_id': 'BSG74',
            'name': 'Draw High Low',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/532392d5eae5e7e5df73fa8b02015959_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/532392d5eae5e7e5df73fa8b02015959_casinoGameIcon3.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG74.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304799',
            'cats': [
                {
                    'id': '94',
                    'title': 'Table Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '51',
                '59'
            ],
            'features': [
                '197',
                '189',
                '191',
                '184',
                '192',
                '195',
                '196'
            ],
            'themes': [
                '131',
                '145'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '8805',
            'server_game_id': '796',
            'extearnal_game_id': '4000279',
            'front_game_id': 'BSG796',
            'name': 'Dragon Kings',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/18700cb4f33407a04d8107a5198f3247_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/97f43df6417a5e1036dfe2d4366a0123_casinoGameIcon3.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/29a205e537aae0b6fc17919c50710fd9_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304801',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                },
                {
                    'id': '59',
                    'title': 'Progressive',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '197',
                    'title': 'EXPANDING WILDS',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '184',
                    'title': 'JACKPOT',
                    'type': 'feature'
                },
                {
                    'id': '192',
                    'title': 'MULTIPLIER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '195',
                    'title': 'REEL RESPINS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '131',
                    'title': 'ASIA',
                    'type': 'theme'
                },
                {
                    'id': '145',
                    'title': 'MYTHOLOGY',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '355',
            'server_game_id': '144',
            'extearnal_game_id': '4065',
            'front_game_id': 'BSG144',
            'name': 'Double Joker Poker',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG144.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG144.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304802',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '354',
            'server_game_id': '139',
            'extearnal_game_id': '4062',
            'front_game_id': 'BSG139',
            'name': 'Double Bonus Poker',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG139.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG139.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304803',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '353',
            'server_game_id': '29',
            'extearnal_game_id': '4016',
            'front_game_id': 'BSG29',
            'name': 'Deuces Wild',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG29.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG29.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304804',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '352',
            'server_game_id': '147',
            'extearnal_game_id': '4068',
            'front_game_id': 'BSG147',
            'name': 'Deuces And Jokers',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG147.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG147.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304805',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '94'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '374',
            'server_game_id': '5',
            'extearnal_game_id': '4007',
            'front_game_id': 'BSG10',
            'name': 'Craps',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG10.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG10.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304806',
            'cats': [
                {
                    'id': '94',
                    'title': 'Table Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '94'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '377',
            'server_game_id': '209',
            'extearnal_game_id': '4089',
            'front_game_id': 'BSG209',
            'name': 'Common Draw Roulette',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG209.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG209.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304807',
            'cats': [
                {
                    'id': '94',
                    'title': 'Table Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '59',
                '51'
            ],
            'features': [
                '186',
                '189',
                '191',
                '184',
                '196'
            ],
            'themes': [
                '165',
                '130',
                '141'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '6629',
            'server_game_id': '691',
            'extearnal_game_id': '4515',
            'front_game_id': 'BSG691',
            'name': 'Charms & Clovers',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/1340756fc712cd0e4b1f017dbd511d85_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/1340756fc712cd0e4b1f017dbd511d85_casinoGameIcon3.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/1340756fc712cd0e4b1f017dbd511d85_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304811',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '59',
                    'title': 'Progressive',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '184',
                    'title': 'JACKPOT',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '165',
                    'title': 'GOLD',
                    'type': 'theme'
                },
                {
                    'id': '130',
                    'title': 'IRISH',
                    'type': 'theme'
                },
                {
                    'id': '141',
                    'title': 'MAGIC',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '94'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '371',
            'server_game_id': '12',
            'extearnal_game_id': '4008',
            'front_game_id': 'BSG12',
            'name': 'Caribbean Poker',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG12.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG12.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304812',
            'cats': [
                {
                    'id': '94',
                    'title': 'Table Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '93',
                '51'
            ],
            'features': [
                '189',
                '195',
                '196'
            ],
            'themes': [
                '179',
                '176'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '666',
            'server_game_id': '323',
            'extearnal_game_id': '4152',
            'front_game_id': 'BSG323',
            'name': 'Boomanji',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG323.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG323.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304813',
            'cats': [
                {
                    'id': '93',
                    'title': 'Top Slots',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '195',
                    'title': 'REEL RESPINS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '179',
                    'title': 'FESTIVE',
                    'type': 'theme'
                },
                {
                    'id': '176',
                    'title': 'LIGHTS AND STONES',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '351',
            'server_game_id': '137',
            'extearnal_game_id': '4061',
            'front_game_id': 'BSG137',
            'name': 'Bonus Poker',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG137.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG137.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304814',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '350',
            'server_game_id': '145',
            'extearnal_game_id': '4066',
            'front_game_id': 'BSG145',
            'name': 'Bonus Deuces',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG145.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG145.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304815',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '186',
                '189',
                '192',
                '195'
            ],
            'themes': [
                '165',
                '147'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '288',
            'server_game_id': '256',
            'extearnal_game_id': '4109',
            'front_game_id': 'BSG256',
            'name': 'Black Gold',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG256.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG256.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG256.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304816',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '192',
                    'title': 'MULTIPLIER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '195',
                    'title': 'REEL RESPINS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '165',
                    'title': 'GOLD',
                    'type': 'theme'
                },
                {
                    'id': '147',
                    'title': 'WILD WEST',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '51'
            ],
            'features': [
                '191',
                '196'
            ],
            'themes': [
                '149',
                '151',
                '139'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '6626',
            'server_game_id': '654',
            'extearnal_game_id': '4512',
            'front_game_id': 'BSG654',
            'name': 'Birds!',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/40495894f56c6d28a502f3ea0f3c0bf7_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/40495894f56c6d28a502f3ea0f3c0bf7_casinoGameIcon3.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/40495894f56c6d28a502f3ea0f3c0bf7_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304818',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '149',
                    'title': 'ANIMAL SLOTS',
                    'type': 'theme'
                },
                {
                    'id': '151',
                    'title': 'CUTE & BUBBLY',
                    'type': 'theme'
                },
                {
                    'id': '139',
                    'title': 'FUNNY',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '186',
                '189',
                '196'
            ],
            'themes': [
                '150',
                '165',
                '182'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '289',
            'server_game_id': '194',
            'extearnal_game_id': '4082',
            'front_game_id': 'BSG194',
            'name': 'Barbary Coast',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG194.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG194.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG194.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304819',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '150',
                    'title': 'ADVENTURES AND EXPLORERS',
                    'type': 'theme'
                },
                {
                    'id': '165',
                    'title': 'GOLD',
                    'type': 'theme'
                },
                {
                    'id': '182',
                    'title': 'MONEY AND WEALTH',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '94'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '378',
            'server_game_id': '4',
            'extearnal_game_id': '4009',
            'front_game_id': 'BSG13',
            'name': 'Baccarat',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG13.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG13.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG13.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304820',
            'cats': [
                {
                    'id': '94',
                    'title': 'Table Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '189',
                '202',
                '193'
            ],
            'themes': [
                '150',
                '216',
                '165',
                '176'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '301',
            'server_game_id': '190',
            'extearnal_game_id': '4079',
            'front_game_id': 'BSG190',
            'name': 'Aztec Treasures',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG190.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG190.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG190.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304821',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '202',
                    'title': 'RANDOM WILDS',
                    'type': 'feature'
                },
                {
                    'id': '193',
                    'title': 'SCATTER SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '150',
                    'title': 'ADVENTURES AND EXPLORERS',
                    'type': 'theme'
                },
                {
                    'id': '216',
                    'title': 'ANCIENT CIVILIZATIONS',
                    'type': 'theme'
                },
                {
                    'id': '165',
                    'title': 'GOLD',
                    'type': 'theme'
                },
                {
                    'id': '176',
                    'title': 'LIGHTS AND STONES',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '189',
                '192',
                '193',
                '196'
            ],
            'themes': [
                '158'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '285',
            'server_game_id': '266',
            'extearnal_game_id': '4114',
            'front_game_id': 'BSG266',
            'name': 'At the Movies',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG266.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG266.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG266.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304822',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '192',
                    'title': 'MULTIPLIER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '193',
                    'title': 'SCATTER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '158',
                    'title': 'MOVIES & TV',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '93',
                '59',
                '51'
            ],
            'features': [
                '186',
                '189',
                '191',
                '184',
                '196'
            ],
            'themes': [
                '162',
                '159',
                '148'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '663',
            'server_game_id': '300',
            'extearnal_game_id': '4135',
            'front_game_id': 'BSG300',
            'name': 'At The Copa',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG300.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG300.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304823',
            'cats': [
                {
                    'id': '93',
                    'title': 'Top Slots',
                    'type': 'category'
                },
                {
                    'id': '59',
                    'title': 'Progressive',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '184',
                    'title': 'JACKPOT',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '162',
                    'title': 'DISCO',
                    'type': 'theme'
                },
                {
                    'id': '159',
                    'title': 'HOT GIRL',
                    'type': 'theme'
                },
                {
                    'id': '148',
                    'title': 'MUSIC SLOTS',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '186',
                '196'
            ],
            'themes': [
                '150',
                '174',
                '177'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '286',
            'server_game_id': '226',
            'extearnal_game_id': '4097',
            'front_game_id': 'BSG226',
            'name': 'Arrival',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG226.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG226.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG226.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304824',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '150',
                    'title': 'ADVENTURES AND EXPLORERS',
                    'type': 'theme'
                },
                {
                    'id': '174',
                    'title': 'ALIENS & ROBOTS',
                    'type': 'theme'
                },
                {
                    'id': '177',
                    'title': 'SPACE SLOTS',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '94'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '376',
            'server_game_id': '5',
            'extearnal_game_id': '4004',
            'front_game_id': 'BSG5',
            'name': 'American Roulette',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG5.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG5.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304825',
            'cats': [
                {
                    'id': '94',
                    'title': 'Table Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '94'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '361',
            'server_game_id': '195',
            'extearnal_game_id': '4083',
            'front_game_id': 'BSG195',
            'name': 'American Blackjack',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/6191d3f66baf1b440ad07c8e024e24dd_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/6191d3f66baf1b440ad07c8e024e24dd_casinoGameIcon3.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG195.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304826',
            'cats': [
                {
                    'id': '94',
                    'title': 'Table Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '40'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '349',
            'server_game_id': '46',
            'extearnal_game_id': '4024',
            'front_game_id': 'BSG46',
            'name': 'All American',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG46.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG46.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304827',
            'cats': [
                {
                    'id': '40',
                    'title': 'Video Poker',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '93',
                '51'
            ],
            'features': [
                '186',
                '189',
                '191',
                '193',
                '203'
            ],
            'themes': [
                '212',
                '183'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '664',
            'server_game_id': '295',
            'extearnal_game_id': '4130',
            'front_game_id': 'BSG295',
            'name': 'After Night Falls',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG295.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG295.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304828',
            'cats': [
                {
                    'id': '93',
                    'title': 'Top Slots',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '193',
                    'title': 'SCATTER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '203',
                    'title': 'WALKING WILDS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '212',
                    'title': 'CRIME AND DETECTIVE',
                    'type': 'theme'
                },
                {
                    'id': '183',
                    'title': 'JEWELS AND GEMS',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '186',
                '189'
            ],
            'themes': [
                '212',
                '138'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '283',
            'server_game_id': '234',
            'extearnal_game_id': '4101',
            'front_game_id': 'BSG234',
            'name': 'A Night in Paris',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG351.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG351.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304829',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '212',
                    'title': 'CRIME AND DETECTIVE',
                    'type': 'theme'
                },
                {
                    'id': '138',
                    'title': 'LOVE',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '93'
            ],
            'features': [
                '189',
                '196'
            ],
            'themes': [
                '227'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '324',
            'server_game_id': '229',
            'extearnal_game_id': '4099',
            'front_game_id': 'BSG229',
            'name': '7th Heaven',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG229.jpg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/BSG229.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG229.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304830',
            'cats': [
                {
                    'id': '93',
                    'title': 'Top Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '227',
                    'title': 'CASINO',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '51'
            ],
            'features': [
                '186',
                '189',
                '191',
                '192',
                '196'
            ],
            'themes': [
                '149',
                '131',
                '145'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '6446',
            'server_game_id': '637',
            'extearnal_game_id': '4508',
            'front_game_id': 'BSG637',
            'name': '4 Seasons',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/9eb0b205708d4c5e1ca8d54687494187_casinoGameIcon2.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/9eb0b205708d4c5e1ca8d54687494187_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304832',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '186',
                    'title': 'BONUS GAMES',
                    'type': 'feature'
                },
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '192',
                    'title': 'MULTIPLIER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '149',
                    'title': 'ANIMAL SLOTS',
                    'type': 'theme'
                },
                {
                    'id': '131',
                    'title': 'ASIA',
                    'type': 'theme'
                },
                {
                    'id': '145',
                    'title': 'MYTHOLOGY',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '94'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '362',
            'server_game_id': '64',
            'extearnal_game_id': '4029',
            'front_game_id': 'BSG64',
            'name': '21 Burn Blackjack',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG64.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG64.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304833',
            'cats': [
                {
                    'id': '94',
                    'title': 'Table Games',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '51'
            ],
            'features': [
                '189',
                '196'
            ],
            'themes': [
                '150',
                '214',
                '176'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '284',
            'server_game_id': '224',
            'extearnal_game_id': '4095',
            'front_game_id': 'BSG224',
            'name': '2 Million BC',
            'title': null,
            'ratio': '4:3',
            'status': 'published',
            'provider': 'BSG',
            'show_as_provider': 'BSG',
            'provider_title': 'BETSOFT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/BSG224.jpg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/BSG224.jpg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5304834',
            'cats': [
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '150',
                    'title': 'ADVENTURES AND EXPLORERS',
                    'type': 'theme'
                },
                {
                    'id': '214',
                    'title': 'JUNGLE',
                    'type': 'theme'
                },
                {
                    'id': '176',
                    'title': 'LIGHTS AND STONES',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '51'
            ],
            'features': [
                '189',
                '191',
                '193',
                '196'
            ],
            'themes': [
                '152',
                '139',
                '153'
            ],
            'icons': [],
            'backgrounds': [],
            'id': '9792',
            'server_game_id': '65892',
            'extearnal_game_id': '4000111',
            'front_game_id': 'WZN65892',
            'name': 'Slot Jam',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'WZN',
            'show_as_provider': 'WZN',
            'provider_title': 'WAZDAN',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/6e9b5b198e66e88ca11a3470153acbbd_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/63dfb3ed2b3ebbe2b5612af1784c58b8_casinoGameIcon3.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/9640d96ae3c022bfbe97228b81a64fc5_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5354375',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [
                {
                    'id': '189',
                    'title': 'FREE SPINS',
                    'type': 'feature'
                },
                {
                    'id': '191',
                    'title': 'GAMBLE - DOUBLE OR NOTHING',
                    'type': 'feature'
                },
                {
                    'id': '193',
                    'title': 'SCATTER SYMBOLS',
                    'type': 'feature'
                },
                {
                    'id': '196',
                    'title': 'WILD SYMBOLS',
                    'type': 'feature'
                }
            ],
            'thms': [
                {
                    'id': '152',
                    'title': 'FRUIT SLOTS',
                    'type': 'theme'
                },
                {
                    'id': '139',
                    'title': 'FUNNY',
                    'type': 'theme'
                },
                {
                    'id': '153',
                    'title': 'TASTY SLOTS',
                    'type': 'theme'
                }
            ],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '51'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '9802',
            'server_game_id': '330',
            'extearnal_game_id': '125187',
            'front_game_id': 'ASG330',
            'name': 'Magical Christmas',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/a224d97bba2bfc341c00fe274cf30e26_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/dc0fd0db2cc7982147fb2deb2f0b00b3_casinoGameIcon3.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/22eb04262a5fac48983a5b40c6604829_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5403934',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '9726',
            'server_game_id': 'rng-rt-european0',
            'extearnal_game_id': '40002995',
            'front_game_id': 'EVLrng-rt-european0',
            'name': 'First Person Roulette',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'EVL',
            'show_as_provider': 'EVL',
            'provider_title': 'EVOLUTION',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/f30b0cdd9a00fca8ebdaa534de731025_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/9ecb0c9be39bd733a6cf490b46059e6d_casinoGameIcon3.jpeg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5410645',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '51'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '9538',
            'server_game_id': '329',
            'extearnal_game_id': '125167',
            'front_game_id': 'ASG329',
            'name': 'Bubbly Fruits',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'ASG',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/a080169871ed5362fefd408df776033d_background.jpeg',
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/041b77728e3987f70f02679dced16855_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/051ffbba8f514717327b3a5d8f643a34_casinoGameIcon3.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5412714',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '9728',
            'server_game_id': 'rng-bj-standard0',
            'extearnal_game_id': '40002996',
            'front_game_id': 'EVLrng-bj-standard0',
            'name': 'RNG Standard Blackjack',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'EVL',
            'show_as_provider': 'EVL',
            'provider_title': 'EVOLUTION',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/3378ec95396c12feb9094ce6c00e8164_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/a5caaa46a6bd74cf9748b47da2116b96_casinoGameIcon3.jpeg',
            'types': {
                'realMode': 1
            },
            'game_skin_id': '5415769',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '9972',
            'server_game_id': '126',
            'extearnal_game_id': '126',
            'front_game_id': 'VGS126',
            'name': 'Super Six Baccarat',
            'title': null,
            'ratio': '0',
            'status': 'published',
            'provider': 'VGS',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/4f63711bcc2ab044d790f690ec767a56_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/64f6882512e83ea214b9d66b606fae95_casinoGameIcon3.jpeg',
            'types': {
                'realMode': 1,
                'viewMode': 1
            },
            'game_skin_id': '5448642',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '28'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '9970',
            'server_game_id': '125',
            'extearnal_game_id': '125',
            'front_game_id': 'VGS125',
            'name': 'Dragon Tiger',
            'title': null,
            'ratio': '0',
            'status': 'published',
            'provider': 'VGS',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/d6ae61f8add3bd2b2f8c2ab73aa3f79f_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/3384bfc63ff14b649c78339ff4996ac7_casinoGameIcon3.jpeg',
            'types': {
                'realMode': 1,
                'viewMode': 1
            },
            'game_skin_id': '5455141',
            'cats': [
                {
                    'id': '28',
                    'title': 'Live Dealer',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '65'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '9982',
            'server_game_id': '334',
            'extearnal_game_id': '125191',
            'front_game_id': 'VGS334',
            'name': 'Heroes Vs Villains',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'VGS',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/5e9303eb13efd36467a300c8dc3365cb_casinoGameIcon2.png',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/fb49b46deafd5a07487c634cc7fe9d2c_casinoGameIcon3.png',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/6ec1751d904273dbfcbe9e052447702e_background.png',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5471977',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '51'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '9974',
            'server_game_id': '336',
            'extearnal_game_id': '125193',
            'front_game_id': 'VGS336',
            'name': 'Xmas Chance',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'VGS',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/53281fbff1c962d21ec2b8555268fd1b_casinoGameIcon2.jpeg',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/92df7a07962d35e68fea83d4d35e0dc4_casinoGameIcon3.jpeg',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/abc092d592479ff8ddf80660b3be7aea_background.jpeg',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5481982',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '65'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '9976',
            'server_game_id': '331',
            'extearnal_game_id': '125188',
            'front_game_id': 'VGS331',
            'name': 'Persepolis',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'VGS',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/fffaf03157bda8f0c28e840efa2f918b_casinoGameIcon2.png',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/ace0809b713b0147a5f5ec5acd543751_casinoGameIcon3.png',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/7441b3406c5d63db6140d21dded71072_background.png',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5488652',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        },
        {
            'categories': [
                '65',
                '51'
            ],
            'features': [],
            'themes': [],
            'icons': [],
            'backgrounds': [],
            'id': '9980',
            'server_game_id': '332',
            'extearnal_game_id': '125189',
            'front_game_id': 'VGS332',
            'name': 'Space',
            'title': null,
            'ratio': '16:9',
            'status': 'published',
            'provider': 'VGS',
            'show_as_provider': 'VGS',
            'provider_title': 'BETCONSTRUCT',
            'game_options': null,
            'blocked_countries': null,
            'has_age_restriction': 0,
            'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/bc1346d27615a95eff98d41c99249040_casinoGameIcon2.png',
            'icon_3': 'https://www.cmsbetconstruct.com/content/images/casino/icon3/5c9c7e40667313bd54565ba5830f10c8_casinoGameIcon3.png',
            'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/adcb57a1777061b7bb585301780d447d_background.png',
            'types': {
                'realMode': 1,
                'funMode': 1
            },
            'game_skin_id': '5498230',
            'cats': [
                {
                    'id': '65',
                    'title': 'New',
                    'type': 'category'
                },
                {
                    'id': '51',
                    'title': 'Video Slots',
                    'type': 'category'
                }
            ],
            'feats': [],
            'thms': [],
            'active': '1'
        }
    ];

    constructor() {
    }

    getGames() {
        return this.games;
    }
}
