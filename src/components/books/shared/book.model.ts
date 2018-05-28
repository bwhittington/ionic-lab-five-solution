export class Book {
  id: number;
  title: string;
  description: string;
  backgroundImage:string;
}

export const fakeBookList: Array<Book> = [
  {
    id: 1,
    title: 'The Eye of the World',
    description: 'The Wheel of Time turns and Ages come and go, leaving memories that become legend. Legend fades to myth, and even myth is long forgotten when the Age that gave it birth returns again. In the Third Age, an Age of Prophecy, the World and Time themselves hang in the balance. What was, what will be, and what is, may yet fall under the Shadow.',
    backgroundImage: 'assets/imgs/world.jpg'
  },
  {
    id: 2,
    title: 'Pawn of Prophecy',
    description: 'Long ago, the Storyteller claimed, in this first book of THE BELGARIAD, the evil god Torak drove men and Gods to war. But Belgarath the Sorcerer led men to reclaim the Orb that protected men of the West. So long as it lay at Riva, the prophecy went, men would be safe.  But Garion did not believe in such stories. Brought up on a quiet farm by his Aunt Pol, how could he know that the Apostate planned to wake dread Torak, or that he would be led on a quest of unparalleled magic and danger by those he loved--but did not know...?',
    backgroundImage: 'assets/imgs/pawn.jpg'
  },
  {
    id: 3,
    title: 'Sword of Shannara',
    description: 'Living in peaceful Shady Vale, Shea Ohmsford knew little of the troubles that plagued the rest of the world. Then the giant, forbidding Allanon revaled that the supposedly dead Warlock Lord was plotting to destory the world. The sole weapon against this Power of Darkness was the Sword of Shannara, which could only be used by a true heir of Shannara--Shea being the last of the bloodline, upon whom all hope rested. Soon a Skull Bearer, dread minion of Evil, flew into the Vale, seeking to destroy Shea. To save the Vale, Shea fled, drawing the Skull Bearer after him....',
    backgroundImage: 'assets/imgs/sword.jpg'
  },
  {
    id: 4,
    title: 'Wizards First Rule',
    description: `After the brutal murder of his father, a mysterious woman, Kahlan Amnell, appears in Richard Cypher's forest sanctuary seeking help...and more. His world and beliefs are shattered when ancient debts come due with thundering violence.
    In a dark age it takes courage to live, and more than courage to challenge those who hold dominion. Richard and Kahlan must take up that challenge or become the next victims. Yet, Richard fears nothing so much as what secrets his sword might reveal about his own soul. Falling in love would destroy them_for reasons Richard can't imagine and Kahlan dare not say.
    In their darkest hour, Kahlan calls upon Richard to reach beyond his sword to invoke within himself something nobler. Neither knows that the rules of battle have just changed...or that their time has run out.`,
    backgroundImage: 'assets/imgs/wizards-rule.jpg'
  }
]
