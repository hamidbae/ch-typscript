class FootballPlayer { 
    firstName: string; 
    lastName: string;
  
    constructor(fname:string, lname:string) { 
      this.firstName = fname;
      this.lastName = lname;
    }
  }
  
  // generic constraint dengan type FootPlayer menggunakan keywords extends 
  function printBestPlayer(player: object): void { 
    console.log(player) 
  }
  
  const bestPlayer: FootballPlayer = new FootballPlayer('Bambang', 'Pamungkas') 
  
  printBestPlayer(bestPlayer)