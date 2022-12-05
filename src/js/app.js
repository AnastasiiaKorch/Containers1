export default class Team {
  constructor() {
    this.members = new Set();
  }
  add(player){
    if(this.members.has(player)){
      throw new Error('Объект уже в команде');
    }
    else{
      this.members.add(player);
    }
  }
  addAll(...player){
    for(const item of player){
      this.members.add(item);
    }
  }
  toArray(){
    return Array.from(this.members);
  }
}

