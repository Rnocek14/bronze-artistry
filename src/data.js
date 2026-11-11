export const archivedAsset = (name) =>
  'https://raw.githubusercontent.com/Rnocek14/Door-Knockers/main/' + encodeURIComponent(name);

export const bullModel = 'https://d8j0ntlcm91z4.cloudfront.net/user_3JKXANr2UOgVCTXeHeEY7LLgXbS/hf_20261111_034341_e089ccd4-e2c2-41ad-9ab3-6d8833b3361f.glb';

export const sculptures = [
  {
    id: 'bull', number: '01', name: 'The Bull',
    line: 'Strength in every detail.',
    image: archivedAsset('3d Bull Knocker.png'),
    original: archivedAsset('First Bull Updated.jpg'),
    model: bullModel,
    originalLabel: 'Original handmade bull sculpture'
  },
  {
    id: 'rooster', number: '02', name: 'The Rooster',
    line: 'A character all its own.',
    image: archivedAsset('3d Cock knocker.png'),
    original: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3JKXANr2UOgVCTXeHeEY7LLgXbS/7d23e374-bce7-4648-bc10-79a3fd944cd6.jpg',
    model: 'https://d8j0ntlcm91z4.cloudfront.net/user_3JKXANr2UOgVCTXeHeEY7LLgXbS/hf_20261111_044030_bf8a776d-e9ed-460d-8267-3a0e1ff19af9.glb',
    experimental: true,
    originalLabel: 'Original hand-sculpted rooster wax relief'
  },
  {
    id: 'dragon', number: '03', name: 'The Dragon',
    line: 'Myth, made tangible.',
    image: archivedAsset('3d dragon knocker.png'),
    original: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3JKXANr2UOgVCTXeHeEY7LLgXbS/ed3c7138-b461-47c8-95c9-99a7002dc449.jpg',
    model: 'https://d8j0ntlcm91z4.cloudfront.net/user_3JKXANr2UOgVCTXeHeEY7LLgXbS/hf_20261111_044032_ea93a383-1a9f-4e65-9cf1-47ac5910cf8c.glb',
    experimental: true,
    originalLabel: 'Original hand-sculpted dragon wax relief'
  }
];
