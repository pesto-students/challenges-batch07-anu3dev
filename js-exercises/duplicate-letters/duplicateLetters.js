function duplicateLetters(args) 
{
	let temparr = args.split('');
    let counts = [];

 for(let i =0; i < temparr.length; i++){ 
     if (counts[temparr[i]]){
     counts[temparr[i]] += 1
     } else {
     counts[temparr[i]] = 1
     }
    }  
    for (let prop in counts){
        if (counts[prop] >= 2){
            counts.push(counts[prop]);
        }
    }
    args = Math.max(...counts)
    if (args <= 1)
    {
        return false;
    }

  return args;
}

export {
  duplicateLetters,
};