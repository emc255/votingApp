window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const products = [
    {
      id: 1,
      title: 'Under the Red Cloud',
      description: 'Amorphis, 2015',
      url: 'https://www.amazon.ca/Under-Red-Cloud-Amorphis-2015-10-21/dp/B01M74P7EE/ref=sr_1_3?keywords=under+the+red+cloud&qid=1579888516&s=electronics&sr=1-3-catcorr',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/chris.png',
      productImageUrl: 'images/albums/redcloud.png',
    },
    {
      id: 2,
      title: 'Twilight of the Thunder God',
      description: 'Amon Amarth, 2008',
      url: 'https://www.amazon.ca/Twilight-Thunder-God-Amon-Amarth/dp/B001CISHU4/ref=sr_1_1?keywords=amon+amarth+twilight+of+the+thunder+god&qid=1579888584&s=music&sr=1-1',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/deja.png',
      productImageUrl: 'images/albums/twilight.png',
    },
    {
      id: 3,
      title: 'Relentless Mutation',
      description: 'Archspire, 2017',
      url: 'https://www.amazon.ca/Relentless-Mutation-Archspire/dp/B073VGQDMW/ref=sr_1_1?gclid=Cj0KCQiAyKrxBRDHARIsAKCzn8zuXLaa8qcSJtAkJevPnqr-jfgWUkp2O71rTORgj6QBHIF5YqJsccQaAtbsEALw_wcB&hvadid=312011771255&hvdev=c&hvlocphy=9001172&hvnetw=g&hvpos=1t1&hvqmt=e&hvrand=6466900384173491050&hvtargid=kwd-383797004860&hydadcr=23336_10308585&keywords=relentless+mutation&qid=1579888461&sr=8-1',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/chris.png',
      productImageUrl: 'images/albums/archspire.png',
    },
    {
      id: 4,
      title: 'Algorythm',
      description: 'Beyond Creation, 2018',
      url: 'https://www.amazon.ca/Algorythm-Beyond-Creation/dp/B07G2DLVGY/ref=sr_1_1?qid=1579888556&refinements=p_32%3ABeyond+Creation&s=music&sr=1-1',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/deja.png',
      productImageUrl: 'images/albums/algorythm.png',
    },
  ];

  return { products: products };
}());
