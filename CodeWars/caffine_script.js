function caffeineBuzz(n){
  var s = ""
  if(n % 3 === 0 && n % 4 === 0){
    s+="Coffee"
    if(n % 2 === 0){
      s+="Script"
      return s
    }
    return s
  }
  if(n % 3 === 0){
    s+="Java"
    if(n % 2 === 0){
      s+="Script"
      return s
    }
    return s
  }
  else
    return "mocha_missing!"
}