import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer, mapStateToProps, mapDispatchToProps} from './CardContainer';
import { setSelectedCard, clearSelectedCardInfo } from '../../actions';

describe('CardContainer', () => {
  let card1
  let card2

  beforeEach(() => {
    card1 = {
      "object": "card",
      "id": "456627ec-81a4-40db-91dc-d25a59cd2837",
      "oracle_id": "8b119b69-4794-443e-aa13-747c125b5b1b",
      "multiverse_ids": [
          479055
      ],
      "mtgo_id": 80009,
      "tcgplayer_id": 206238,
      "name": "Treeshaker Chimera",
      "lang": "en",
      "released_at": "2020-01-24",
      "uri": "https://api.scryfall.com/cards/456627ec-81a4-40db-91dc-d25a59cd2837",
      "scryfall_uri": "https://scryfall.com/card/thb/297/treeshaker-chimera?utm_source=api",
      "layout": "normal",
      "highres_image": true,
      "image_uris": {
          "small": "https://img.scryfall.com/cards/small/front/4/5/456627ec-81a4-40db-91dc-d25a59cd2837.jpg?1580182799",
          "normal": "https://img.scryfall.com/cards/normal/front/4/5/456627ec-81a4-40db-91dc-d25a59cd2837.jpg?1580182799",
          "large": "https://img.scryfall.com/cards/large/front/4/5/456627ec-81a4-40db-91dc-d25a59cd2837.jpg?1580182799",
          "png": "https://img.scryfall.com/cards/png/front/4/5/456627ec-81a4-40db-91dc-d25a59cd2837.png?1580182799",
          "art_crop": "https://img.scryfall.com/cards/art_crop/front/4/5/456627ec-81a4-40db-91dc-d25a59cd2837.jpg?1580182799",
          "border_crop": "https://img.scryfall.com/cards/border_crop/front/4/5/456627ec-81a4-40db-91dc-d25a59cd2837.jpg?1580182799"
      },
      "mana_cost": "{5}{G}{G}",
      "cmc": 7.0,
      "type_line": "Creature — Chimera",
      "oracle_text": "All creatures able to block Treeshaker Chimera do so.\nWhen Treeshaker Chimera dies, draw three cards.",
      "power": "8",
      "toughness": "5",
      "colors": [
          "G"
      ],
      "color_identity": [
          "G"
      ],
      "legalities": {
          "standard": "legal",
          "future": "legal",
          "historic": "legal",
          "pioneer": "legal",
          "modern": "legal",
          "legacy": "legal",
          "pauper": "not_legal",
          "vintage": "legal",
          "penny": "not_legal",
          "commander": "legal",
          "brawl": "legal",
          "duel": "legal",
          "oldschool": "not_legal"
      },
      "games": [
          "arena",
          "mtgo",
          "paper"
      ],
      "reserved": false,
      "foil": true,
      "nonfoil": true,
      "oversized": false,
      "promo": false,
      "reprint": false,
      "variation": false,
      "set": "thb",
      "set_name": "Theros Beyond Death",
      "set_type": "expansion",
      "set_uri": "https://api.scryfall.com/sets/5f23a78d-cda1-462a-8be3-a62b40c34913",
      "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints",
      "scryfall_set_uri": "https://scryfall.com/sets/thb?utm_source=api",
      "rulings_uri": "https://api.scryfall.com/cards/456627ec-81a4-40db-91dc-d25a59cd2837/rulings",
      "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A8b119b69-4794-443e-aa13-747c125b5b1b&unique=prints",
      "collector_number": "297",
      "digital": false,
      "rarity": "rare",
      "flavor_text": "The wisdom of the past is written on the bones of ancients.",
      "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
      "artist": "Vincent Proce",
      "artist_ids": [
          "d82b1138-76d3-49f7-9d8c-bc2e2d3e0b0a"
      ],
      "illustration_id": "fc5f6af6-984c-4a77-9718-3cd78604e8ee",
      "border_color": "black",
      "frame": "2015",
      "full_art": false,
      "textless": false,
      "booster": false,
      "story_spotlight": false,
      "edhrec_rank": 15641,
      "preview": {
          "source": "Wizards of the Coast",
          "source_uri": "https://magic.wizards.com/en/articles/archive/card-preview/theros-beyond-death-theme-boosters-2019-12-17",
          "previewed_at": "2019-12-17"
      },
      "prices": {
          "usd": "0.36",
          "usd_foil": null,
          "eur": null,
          "tix": "0.44"
      },
      "related_uris": {
          "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=479055",
          "tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Treeshaker+Chimera&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
          "edhrec": "https://edhrec.com/route/?cc=Treeshaker+Chimera",
          "mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Treeshaker+Chimera"
      },
      "purchase_uris": {
          "tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=206238&partner=Scryfall&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
          "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Treeshaker+Chimera&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
          "cardhoarder": "https://www.cardhoarder.com/cards/80009?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
      }
    }
    card2 = {
      "object": "card",
      "id": "bfc00bf8-236b-4c68-be85-1609be122259",
      "oracle_id": "947a2665-2f4d-4193-8768-118f85334549",
      "multiverse_ids": [
          413698
      ],
      "mtgo_id": 60755,
      "mtgo_foil_id": 60756,
      "tcgplayer_id": 118691,
      "name": "Abundant Growth",
      "lang": "en",
      "released_at": "2016-06-10",
      "uri": "https://api.scryfall.com/cards/bfc00bf8-236b-4c68-be85-1609be122259",
      "scryfall_uri": "https://scryfall.com/card/ema/156/abundant-growth?utm_source=api",
      "layout": "normal",
      "highres_image": true,
      "image_uris": {
          "small": "https://img.scryfall.com/cards/small/front/b/f/bfc00bf8-236b-4c68-be85-1609be122259.jpg?1580014714",
          "normal": "https://img.scryfall.com/cards/normal/front/b/f/bfc00bf8-236b-4c68-be85-1609be122259.jpg?1580014714",
          "large": "https://img.scryfall.com/cards/large/front/b/f/bfc00bf8-236b-4c68-be85-1609be122259.jpg?1580014714",
          "png": "https://img.scryfall.com/cards/png/front/b/f/bfc00bf8-236b-4c68-be85-1609be122259.png?1580014714",
          "art_crop": "https://img.scryfall.com/cards/art_crop/front/b/f/bfc00bf8-236b-4c68-be85-1609be122259.jpg?1580014714",
          "border_crop": "https://img.scryfall.com/cards/border_crop/front/b/f/bfc00bf8-236b-4c68-be85-1609be122259.jpg?1580014714"
      },
      "mana_cost": "{G}",
      "cmc": 1.0,
      "type_line": "Enchantment — Aura",
      "oracle_text": "Enchant land\nWhen Abundant Growth enters the battlefield, draw a card.\nEnchanted land has \"{T}: Add one mana of any color.\"",
      "colors": [
          "G"
      ],
      "color_identity": [
          "G"
      ],
      "legalities": {
          "standard": "not_legal",
          "future": "not_legal",
          "historic": "not_legal",
          "pioneer": "not_legal",
          "modern": "legal",
          "legacy": "legal",
          "pauper": "legal",
          "vintage": "legal",
          "penny": "not_legal",
          "commander": "legal",
          "brawl": "not_legal",
          "duel": "legal",
          "oldschool": "not_legal"
      },
      "games": [
          "paper",
          "mtgo"
      ],
      "reserved": false,
      "foil": true,
      "nonfoil": true,
      "oversized": false,
      "promo": false,
      "reprint": true,
      "variation": false,
      "set": "ema",
      "set_name": "Eternal Masters",
      "set_type": "masters",
      "set_uri": "https://api.scryfall.com/sets/1f29f022-3ace-4c96-85e8-1f7b63aadf7e",
      "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aema&unique=prints",
      "scryfall_set_uri": "https://scryfall.com/sets/ema?utm_source=api",
      "rulings_uri": "https://api.scryfall.com/cards/bfc00bf8-236b-4c68-be85-1609be122259/rulings",
      "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A947a2665-2f4d-4193-8768-118f85334549&unique=prints",
      "collector_number": "156",
      "digital": false,
      "rarity": "common",
      "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
      "artist": "Vincent Proce",
      "artist_ids": [
          "d82b1138-76d3-49f7-9d8c-bc2e2d3e0b0a"
      ],
      "illustration_id": "1a1434bf-540b-424e-b545-325569e9ef7f",
      "border_color": "black",
      "frame": "2015",
      "full_art": false,
      "textless": false,
      "booster": true,
      "story_spotlight": false,
      "edhrec_rank": 3254,
      "prices": {
          "usd": "0.25",
          "usd_foil": "0.49",
          "eur": "0.25",
          "tix": "0.04"
      },
      "related_uris": {
          "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=413698",
          "tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Abundant+Growth&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
          "edhrec": "https://edhrec.com/route/?cc=Abundant+Growth",
          "mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Abundant+Growth"
      },
      "purchase_uris": {
          "tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=118691&partner=Scryfall&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
          "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Eternal-Masters/Abundant-Growth?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
          "cardhoarder": "https://www.cardhoarder.com/cards/60755?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
      }
    }
  })

  describe('mapStateToProps', () => {
    it ('should return an object with an array of cards', () => {
      const mockState = {
        searchCards: [card1, card2],
        loadingStatus: false,
        artistCards: [card1, card2],
        selectedCard: card1.tcgplayer_id,
        selectedCardInfo: card1,
        favoriteCards: [card1, card2]
      };
      const expected = {
        searchCards: [card1, card2],
        loadingStatus: false,
        artistCards: [card1, card2],
        favoriteCards: [card1, card2]
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    })
  })

  describe('mapDispatchToProps', () => {
    it ('should call dispatch with the setSelectedCard action when it is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setSelectedCard(123456);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setSelectedCard(123456);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })

    it ('should call dispatch with the clearSelectedCardInfo action when it is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = clearSelectedCardInfo();

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.clearSelectedCardInfo();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
})
