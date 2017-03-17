function nbYear(p0, percent, aug, p) {
  percent = percent/100
  var pop = p0 + (p0 * percent) + aug
  var years = 1
  while (pop < p){
    pop +=  (pop * percent) + aug 
    years += 1;
  }
  return years
}