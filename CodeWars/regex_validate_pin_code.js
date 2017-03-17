function validatePIN (pin) {
  if((pin.length === 4 || pin.length === 6) && !isNaN(pin) && pin.match(/^\d+$/)){
    return true;
  }
  return false;
}