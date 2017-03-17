class SmallestIntegerFinder {
  findSmallestInt(args) {
  	args.sort((a,b) => a-b)
  	var target = args[0]
  	return target
  }
}