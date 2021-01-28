import { setupWorker, rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:3000/nendoparts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
      [{
        name : 'Smiling face',
        type : 'Head',
        price: '3€',
        base_character: 'Mayuri Shina',
        reference: '7777',
        remaining_stocks: '5',
        image : ''
      },
      {name : 'Hunter_AA_hair',
        type : 'Hair',
        price: '50',
        base_character: 'Hunter',
        reference: 'Hunter_hair_01',
        remaining_stocks: '12',
        image : ''
      },

        {name : 'Naruto_bust',
        type : 'bust',
        price: '12',
        base_character: 'Naruto',
        reference: 'Naruto_bust_12',
        remaining_stocks: '40',
        image : ''},

        {
        name : 'Pikachu_tail',
        type : 'tail',
        price: '23',
        base_character: 'Pikachu',
        reference: '8448',
        remaining_stocks: '4',
        image : ''
       },
       {
        name : 'Mario_leg',
        type : 'leg',
        price: '30€',
        base_character: 'Mario',
        reference: '5447',
        remaining_stocks: '89',
        image : ''
      }]
      )
    )
  }),
]
