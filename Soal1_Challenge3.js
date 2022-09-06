//challenge chapter 3 soal 1

function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
}
Ship.prototype.Muatan = function () {
  //Code: memberikan properti tambahan
  if (this.draft > 20) {
    //code: nilai draft lebih besar dari 20 maka menghasilkan return
    return "Banyak nih Muatan Kapalnya";
  }
  if (this.draft < this.crew * 1.5) {
    //code: nilai draft lebih kecil dari nilai crew dikali 1.5 maka menghasilkan return
    return "Lebih banyak Muatan Orangnya";
  }
};

var emptyShip = new Ship(21, 99); // Output => "Banyak Nih Muatan Kapalnya"
console.log(emptyShip.Muatan());
var emptyShip = new Ship(18, 99); // Output => "Lebih Banyak Muatan Orangnya"
console.log(emptyShip.Muatan());
