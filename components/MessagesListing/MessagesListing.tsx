import React from 'react';

const MessagesListing = () => {
  return <div>MessagesListing</div>;
};

export default MessagesListing;

// https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light
const randomAvatar = () => {
  const topTypes = [
    'NoHair',
    'Hat',
    'LongHairBun',
    'LongHairCurly',
    'LongHairStraight',
  ];
  const hairColors = [
    'Auburn',
    'Black',
    'Blonde',
    'BlondeGolden',
    'Brown',
    'BrownDark',
    'PastelPink',
    'Platinum',
    'Red',
    'SilverGray',
  ];
  const eyesTypes = [
    'Close',
    'Cry',
    'Default',
    'Dizzy',
    'EyeRoll',
    'Happy',
    'Hearts',
    'Side',
    'Squint',
    'Surprised',
    'Wink',
    'WinkWacky',
  ];

  return `https://avataaars.io/?avatarStyle=Circle&topType=${
    topTypes[Math.floor(Math.random() * topTypes.length)]
  }&accessoriesType=Blank&hairColor=${
    hairColors[Math.floor(Math.random() * hairColors.length)]
  }&facialHairType=Blank&clotheType=BlazerShirt&eyeType=${
    eyesTypes[Math.floor(Math.random() * eyesTypes.length)]
  }&eyebrowType=Default&mouthType=Default&skinColor=Light`;
};

const messagesListing = [
  {
    name: 'Kelsey M.',
    time: '2:30 PM',
    tag: 'San Francisco, $123/night, 8/13/23-8/15/23',
    message:
      'Hi, I’m interested in your place. Is it available for the dates I’m looking for?',
    profilePhoto: randomAvatar(),
  },
  {
    name: 'Oaityn Calzoni',
    time: '2:30 PM',
    tag: 'Seattle, $116/night, 8/07/23-8/09/23',
    message: 'Your place looks like a delightful spot...',
    profilePhoto: randomAvatar(),
  },
  {
    name: 'Kelsey M.',
    time: '2:30 PM',
    tag: 'San Francisco, $123/night, 8/13/23-8/15/23',
    message:
      'Hi, I’m interested in your place. Is it available for the dates I’m looking for?',
    profilePhoto: randomAvatar(),
  },

  {
    name: 'Zain Curtis',
    time: '2:30 PM',
    tag: 'Seattle, $116/night, 8/07/23-8/09/23',
    message: 'Your place looks like a delightful spot...',
    profilePhoto: randomAvatar(),
  },
];
