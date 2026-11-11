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
    original: 'https://raw.githubusercontent.com/Rnocek14/Door-Knockers/main/3d%20Cock%20knocker.png',
    model: null,
    originalLabel: 'Rooster bronze concept study'
  },
  {
    id: 'dragon', number: '03', name: 'The Dragon',
    line: 'Myth, made tangible.',
    image: archivedAsset('3d dragon knocker.png'),
    original: archivedAsset('3d dragon knocker.png'),
    model: null,
    originalLabel: 'Dragon bronze concept study'
  }
];
